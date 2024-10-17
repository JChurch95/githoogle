import React, { useState } from 'react';
import UserCard from './components/UserCard';
import UserCardList from './components/UserCardList';

function App() {
  // State hooks for managing component state
  const [username, setUsername] = useState(''); // For input field
  const [currentUser, setCurrentUser] = useState(null); // For currently searched user
  const [userList, setUserList] = useState([]); // List of previously searched users
  const [error, setError] = useState(null); // For error messages

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null); // Clear any previous errors
    setCurrentUser(null); // Clear current user

    try {
      // Fetch user data from GitHub API
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setCurrentUser(data); // Set the current user
      setUserList(prevList => [...prevList, data]); // Add user to the list
      setUsername(''); // Clear the input field
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    }
  };

  return (
    <div className="app-container">
      <h1>GitHoogle</h1>
      
      {/* Search form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Show Me The Deets!</button>
      </form>

      {/* Error message display */}
      {error && <p className="error-message">{error}</p>}

      {/* Display current user if exists */}
      {currentUser && <UserCard user={currentUser} />}

      <h2>Previously Searched Users</h2>
      
      {/* List of previously searched users */}
      <UserCardList users={userList} />
    </div>
  );
}

export default App;