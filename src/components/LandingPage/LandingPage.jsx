import React from 'react';
import { BiLike } from 'react-icons/bi';
import { useAuth0 } from '@auth0/auth0-react';
import { FaRegCommentAlt } from 'react-icons/fa';

import styles from './LandingPage.module.css';
import pdf from '../../assets/docs/Ricardo_Cuartas_I.pdf';
import imgPost from '../../assets/ilustrations/react.png';
import imgProfile from '../../assets/ilustrations/profilePhoto.png';

export const LandingPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className={styles.mainLandingPage}>
        <div className={styles.mainContainer}>
          <div className={styles.userInfoContainer}>
            <div>
              <img src={imgProfile} />
            </div>
            <p>Ricardo Cuartas</p>
            <div>
              <button className={styles.buttonDetail}>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_Ricardo_Cuartas.pdf"
                >
                  View profile
                </a>
              </button>
            </div>
          </div>
          <div className={styles.textInfoCard}>
            <p>devlop.xyzr@gmail.com | in: devxyzr | github: dexyzr</p>
          </div>
          <div className={styles.principalInfoPost}>
            <img src={imgPost} alt="" />
          </div>
          <div className={styles.tags}>
            <p>#developer #frontend #code #coffe</p>
          </div>
          <div className={styles.interactiosContainer}>
            <div className={styles.likes}>
              <BiLike /> 100
            </div>
            <div>
              <button className={styles.comments}>
                <p>
                  <FaRegCommentAlt />
                  {''} │Comment
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
