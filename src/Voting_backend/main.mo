import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor VotingSystem {
    stable var votes : HashMap<Text, Nat> = HashMap<Text, Nat>(0);
    stable var ipTracker : HashMap<Text, Bool> = HashMap<Text, Bool>(0);

    // Function to cast a vote
    public shared func castVote(ip: Text, candidate: Text, voteCount: Nat) : async Bool {
        // Check if the IP has already voted
        switch (ipTracker.get(ip)) {
            case (?true) {
                // IP has already voted
                return false;
            };
            case (null) {
                // IP has not voted, proceed with voting
                // Update the votes for the candidate
                switch (votes.get(candidate)) {
                    case (?currentVotes) {
                        votes.put(candidate, currentVotes + voteCount);
                    };
                    case (null) {
                        votes.put(candidate, voteCount);
                    };
                };
                // Mark the IP as having voted
                ipTracker.put(ip, true);
                return true;
            };
        };
    };

    // Function to get election results
    public query func getResults() : async [(Text, Nat)] {
        return HashMap.entries(votes);
    };
};
