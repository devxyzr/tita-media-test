import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Auth0Button.module.css';

export const Auth0Button = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleOnClick = () => {
    isAuthenticated ? logout() : loginWithRedirect();
  };

  const textMessage = () => {
    return isAuthenticated ? 'LOGOUT' : 'LOGIN';
  };

  return (
    <button className={styles.buttonStyle} onClick={handleOnClick}>
      {' '}
      {textMessage()}
    </button>
  );
};
