import React, { useState, useEffect } from 'react';
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory, canisterId } from '../../declarations/Voting_backend';

// Initialize the HttpAgent and the Actor
const agent = new HttpAgent();
const votingSystem = Actor.createActor(idlFactory, { agent, canisterId });

function App() {
  const [vote, setVote] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [ip, setIp] = useState('');

  const fetchResults = async () => {
    try {
      const results = await votingSystem.getResults();
      setResults(results);
    } catch (e) {
      console.error('Failed to fetch results:', e);
    }
  };

  useEffect(() => {
    // Fetch results initially
    fetchResults();

    // Set up polling to fetch results every 5 seconds
    const intervalId = setInterval(fetchResults, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to get the user's IP address (mocked for example purposes)
    const getUserIp = async () => {
      try {
        // You might need to replace this with an actual method to get the IP address
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);
      } catch (e) {
        console.error('Failed to get IP address:', e);
        setIp('unknown');
      }
    };

    getUserIp();
  }, []);

  const handleVote = async () => {
    if (vote && ip) {
      try {
        const result = await votingSystem.castVote(ip, vote, 1); // Assuming 1 vote per cast
        if (result.ok) {
          fetchResults();
          setError('');
        } else {
          setError(result.err);
        }
      } catch (e) {
        console.error('Failed to cast vote:', e);
        setError('An error occurred while casting your vote.');
      }
    } else {
      setError('Please select a candidate and ensure your IP address is available.');
    }
  };

  return (
    <div className="app">
      <h1>College President Election</h1>
      <div className="voting-form">
        <label>
          <input
            type="radio"
            name="candidate"
            value="Abhishek Singh"
            onChange={(e) => setVote(e.target.value)}
          />
          Abhishek Singh
        </label>
        <label>
          <input
            type="radio"
            name="candidate"
            value="Vikash Sawami"
            onChange={(e) => setVote(e.target.value)}
          />
          Vikash Sawami
        </label>
        <button onClick={handleVote}>Cast Vote</button>
        {error && <p className="error">{error}</p>}
      </div>
      <h2>Results</h2>
      <ul>
        {results.map(([candidate, votes]) => (
          <li key={candidate}>
            {candidate}: {votes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
