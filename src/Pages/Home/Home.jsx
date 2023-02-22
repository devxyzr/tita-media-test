import React, { useContext } from 'react';
import styles from './Home.module.css';
import {
  Modal,
  Profile,
  PostCard,
  Auth0Button,
  LandingPage,
  CommentsCard,
  SearchNav,
  UserInfoCard,
} from '../../components';
import { SocialMediaUsersContext } from '../../commons';


export const Home = () => {
  const {
    socialMediaPost,
    isVisibleComments,
    setIsVisibleComments,
    socialMediaComments,
    isVisibleUserDetail,
    setIsVisibleUserDetail,
    socialMediaUserDetail,
  } = useContext(SocialMediaUsersContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Profile />
        <h1>TITA SOCIAL</h1>
        <Auth0Button />
      </div>

      <div>
        <SearchNav />
      </div>

      <div>
        <LandingPage />
      </div>

      <div className={styles.mainPostCard}>
        {socialMediaPost?.length > 0 ? (
          socialMediaPost.map((post, i) => {
            return <PostCard post={post} key={i} />;
          })
        ) : (
          <div className={styles.errorHome}>
            <h3>
              ¡UPS!... I DID NOT FIND WHAT YOU WERE LOOKING FOR <br /> TRY AGAIN
              :D
            </h3>
          </div>
        )}
      </div>
      <div>
        <Modal
          isVisible={isVisibleComments}
          onClose={() => setIsVisibleComments(!isVisibleComments)}
        >
          {socialMediaComments.length > 0 ? (
            socialMediaComments.map((comment, index) => (
              <CommentsCard comment={comment} key={index} />
            ))
          ) : (
            <div className={styles.notComment}>
              NO COMMENTS, MAYBE IN ANOTHER POST
            </div>
          )}
        </Modal>
      </div>

      <div>
        <Modal
          isVisible={isVisibleUserDetail}
          onClose={() => setIsVisibleUserDetail(!isVisibleUserDetail)}
        >
          <UserInfoCard user={socialMediaUserDetail} />
        </Modal>
      </div>
    </div>
  );
};
