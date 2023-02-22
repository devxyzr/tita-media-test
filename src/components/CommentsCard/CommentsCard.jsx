import React from 'react';
import styles from './CommentsCard.module.css';

export const CommentsCard = ({ comment }) => {
  const { message, owner, publishDate } = comment;
  const { firstName, lastName, picture } = owner;
  console.log({ comment });
  return (
    <div className={styles.mainContainerComments}>
      <div className={styles.containUserInfo}>
        <img src={picture} alt={firstName} />
        <div>
          {`${firstName} ${lastName}`} <br />
          <p>{new Date(publishDate).toDateString()}</p>
        </div>
      </div>
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </div>
  );
};
