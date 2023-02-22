import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { SocialMediaUsersContext } from '../../commons';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useGetSocialMediaComments } from '../../hooks/useGetSocialMediaComments';
import { useGetSocialMediaUserDetail } from '../../hooks/useGetSocialMediaUserDetail';
import styles from './PostCard.module.css';

export const PostCard = ({ post }) => {
  const { isAuthenticated } = useAuth0();
  const { id: postId, owner, text, image: postImg, tags, likes } = post;
  const { id: userId, picture: userImg, firstName, lastName } = owner;
  const {
    isVisibleComments,
    setIsVisibleComments,
    isVisibleUserDetail,
    setIsVisibleUserDetail,
  } = useContext(SocialMediaUsersContext);

  const { query: getSocialMediaComments } = useGetSocialMediaComments({
    postId,
  });

  const { query: getSocialMediaUserDetail } = useGetSocialMediaUserDetail({
    userId,
  });

  return (
    isAuthenticated && (
      <div className={styles.mainContainer}>
        <div className={styles.userInfoContainer}>
          <div>
            <img src={userImg} alt={firstName} />
          </div>
          <p>{`${firstName} ${lastName}`}</p>
          <div>
            <button
              className={styles.buttonDetail}
              onClick={() => {
                getSocialMediaUserDetail();
                setIsVisibleUserDetail(isVisibleUserDetail);
              }}
            >
              <p>View Profile</p>
            </button>
          </div>
        </div>
        <div className={styles.textInfoCard}>
          <p>{text}</p>
        </div>
        <div className={styles.principalInfoPost}>
          <img src={postImg} alt="" />
        </div>
        <div className={styles.tags}>
          <p>
            {tags.map((tag) => {
              return `#${tag} `;
            })}
          </p>
        </div>
        <div className={styles.interactiosContainer}>
          <div className={styles.likes}>
            <BiLike /> {likes}
          </div>
          <div>
            <button
              className={styles.comments}
              onClick={() => {
                getSocialMediaComments();
                setIsVisibleComments(isVisibleComments);
              }}
            >
              <p>
                <FaRegCommentAlt />
                {''} │Comment
              </p>
            </button>
          </div>
        </div>
      </div>
    )
  );
};
