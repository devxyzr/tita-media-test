import { useContext } from 'react';
import { SocialMediaUsersContext } from '../../commons';
import { getSocialMediaUserDetail } from '../../services';

export const useGetSocialMediaUserDetail = ({ userId }) => {
  const { setIsVisibleUserDetail, setSocialMediaUserDetail } = useContext(
    SocialMediaUsersContext
  );

  const query = async () => {
    await getSocialMediaUserDetail(userId).then((result) => {
      setSocialMediaUserDetail(result);
      setIsVisibleUserDetail(true);
    });
  };

  return { query };
};
