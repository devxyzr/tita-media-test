import { useContext } from 'react';
import { SocialMediaUsersContext } from '../../commons';
import { getSocialMediaComments } from '../../services';

export const useGetSocialMediaComments = ({ postId }) => {
  const { setIsVisibleComments, setSocialMediaComments } = useContext(
    SocialMediaUsersContext
  );
  const query = async () => {
    await getSocialMediaComments(postId).then((result) => {
      setSocialMediaComments(result?.data);
      setIsVisibleComments(true);
    });
  };

  return { query };
};
