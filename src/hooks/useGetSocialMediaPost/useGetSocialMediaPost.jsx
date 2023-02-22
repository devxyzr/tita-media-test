import React, { useContext, useEffect } from 'react';
import { SocialMediaUsersContext } from '../../commons';
import { getAllPost, getPostByTag } from '../../services/socialMedia.service';

export const useGetSocialMediaPost = ({ onMount }) => {
  const { searchTag, setSocialMediaPost } = useContext(SocialMediaUsersContext);

  const query = () => {
    if (searchTag && !searchTag.includes('#')) {
      getPostByTag(searchTag).then((result) => {
        setSocialMediaPost(result?.data);
      });
    } else {
      getAllPost().then((result) => {
        setSocialMediaPost(result?.data);
      });
    }
  };

  useEffect(() => {
    if (onMount) {
      query();
    }
  }, []);

  return { query };
};
