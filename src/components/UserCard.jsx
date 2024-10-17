import React from 'react';
import styles from './UserCard.module.css';

// UserCard component that takes a 'user' prop
const UserCard = ({ user }) => {
  return (
    // Main card container
    <div className={styles.card}>
      {/* User avatar */}
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className={styles.avatar} />
      
      {/* User's name (falls back to login if name is not available) */}
      <h2 className={styles.name}>{user.name || user.login}</h2>
      
      {/* User's login (username) */}
      <p className={styles.login}>@{user.login}</p>
      
      {/* User's bio (only rendered if available) */}
      {user.bio && <p className={styles.bio}>{user.bio}</p>}
      
      {/* User statistics */}
      <ul className={styles.stats}>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
        <li>Public Repos: {user.public_repos}</li>
      </ul>
      
      
      {/* Link to user's GitHub profile */}
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;