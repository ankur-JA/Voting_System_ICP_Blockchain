# Voting System Using ICP Blockchain

## Overview

This project is a decentralized voting system built using the Internet Computer Protocol (ICP). It allows users to cast votes and view results in real-time. The system utilizes Motoko for the backend and React for the frontend, providing a seamless experience for managing and querying voting data.

## Features

- **Decentralized Voting**: Utilize the ICP blockchain to ensure votes are securely and transparently recorded.
- **Real-Time Results**: View voting results in real-time with automatic updates every 5 seconds.
- **Single Vote Per IP**: Ensure that each IP address can only vote once to prevent multiple votes from a single source.

## Technologies Used

- **Internet Computer Protocol (ICP)**: Blockchain platform for deploying and running the voting system.
- **Motoko**: Programming language used for the backend logic on ICP.
- **React**: Frontend framework for creating the user interface.
- **JavaScript**: For frontend interactivity and communication with the ICP backend.

## Project Structure

### Backend

- **`main.mo`**: The main Motoko file containing the backend logic for the voting system. Includes:
  - Casting votes
  - Retrieving results
  - IP-based voting restrictions

### Frontend

- **`App.js`**: Main React component handling:
  - Voting form
  - Fetching and displaying voting results
  - Real-time updates with polling

- **`index.css`**: Stylesheet for the frontend UI.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [Dfinity SDK](https://sdk.dfinity.org/docs/quickstart/quickstart.html) for deploying ICP canisters
- [Rust](https://www.rust-lang.org/), if building Motoko from source

### Setup

1. **Clone the Repository**

    ```bash
    https://github.com/ankur-JA/Voting_System_ICP_Blockchain.git
    cd Voting_System_ICP_Blockchain
    ```

2. **Install Dependencies**

    Navigate to the frontend directory and install the dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. **Build and Deploy the Backend**

    Ensure you have `dfx` installed and configured. Build and deploy the backend canister:

    ```bash
    dfx build
    dfx deploy
    ```

4. **Start the Frontend**

    Run the React development server:

    ```bash
    npm start
    ```

    The frontend should now be accessible at `http://localhost:3000`.

## Usage

1. **Access the Voting System**

    Open the frontend in your web browser and use the provided interface to cast your vote and view results.

2. **Cast a Vote**

    - Select a candidate by clicking the radio button.
    - Click the "Cast Vote" button to submit your vote.

3. **View Results**

    Results are displayed automatically, updated every 5 seconds.

## API Endpoints

- **`/castVote`**: Casts a vote for a specified candidate.
  - **Method**: `POST`
  - **Parameters**:
    - `topic`: The candidate's name
    - `vote`: Number of votes (typically `1`)

- **`/getResults`**: Retrieves the current voting results.
  - **Method**: `GET`
  - **Returns**: A list of candidates and their vote counts.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact:

- **Your Name** - [rajankur1802@gmail](rajankur1802@gmail)
- **GitHub** - [https://github.com/ankur-JA](https://github.com/ankur-JA)
