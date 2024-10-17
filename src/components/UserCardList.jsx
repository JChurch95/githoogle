import React from 'react';
import UserCard from './UserCard';
import styles from './UserCardList.module.css';

// UserCardList component that takes a 'users' prop
const UserCardList = ({ users }) => {
  return (
    // Container for the list of user cards
    <div className={styles.list}>
      {/* Conditional rendering based on whether there are users to display */}
      {users.length > 0 ? (
        // If there are users, map through the array and render a UserCard for each
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        // If there are no users, display a message
        <p className={styles.emptyMessage}>Ain't no users searched yet dawg.</p>
      )}
    </div>
  );
};

export default UserCardList;