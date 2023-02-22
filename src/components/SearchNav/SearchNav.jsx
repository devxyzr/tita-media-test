import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SocialMediaUsersContext } from '../../commons';
import { useGetSocialMediaPost } from '../../hooks/useGetSocialMediaPost';
import styles from './SearchNav.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export const SearchNav = () => {
  const { isAuthenticated } = useAuth0();
  const { setSearchTag, searchTag } = useContext(SocialMediaUsersContext);
  const { query } = useGetSocialMediaPost({ onMount: true });

  return (
    isAuthenticated && (
      <div className={styles.mainContainerNav}>
        <form className={styles.containForm}>
          <input
            type="search"
            name="Filter"
            placeholder="Search by #Tag"
            value={searchTag}
            onChange={(event) => {
              const value = event.target.value.trim();
              setSearchTag(value);
            }}
          />
          <button
            className={styles.buttonNav}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              query();
            }}
          >
            <BsSearch />
          </button>
        </form>
      </div>
    )
  );
};
