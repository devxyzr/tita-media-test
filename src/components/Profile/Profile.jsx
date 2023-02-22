import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import styles from './Profile.module.css';

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.containImgProfile}>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className={styles.infoUserContain}>
            <h2>{user.name}</h2>
            <p>@{user.nickname}</p>
          </div>
        </div>
      </div>
    )
  );
};
