import React from 'react';
import styles from './UserInfoCard.module.css';

export const UserInfoCard = ({ user }) => {
  const { firstName, lastName, email, picture, dateOfBirth, phone, location } =
    user;

  const country = location?.country ?? 'world';
  const city = location?.city ?? 'World';

  return (
    <div className={styles.mainUserContainer}>
      <div className={styles.userImg}>
        <img src={picture} alt={firstName} />
      </div>
      <div className={styles.userName}>
        <p> {`${firstName} ${lastName}`}</p>
        <p className={styles.born}>
          {' '}
          Born a: {new Date(dateOfBirth).toDateString()}
        </p>
      </div>
      <p className={styles.headerInfo}>Contact</p>
      <div className={styles.contactInfo}>
        <p>Email: {email}</p>
        <p>Phone: ( {phone} )</p>
      </div>
      <p className={styles.headerInfo}>Location</p>
      <div className={styles.locationInfo}>
        <p>Country: {country}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};
