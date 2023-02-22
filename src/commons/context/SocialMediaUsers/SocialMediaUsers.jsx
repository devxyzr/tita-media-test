import React, { useContext, createContext, useReducer } from 'react';

export const SocialMediaUsersContext = createContext();

export function useSocialMediaUsersContext() {
  return useContext(SocialMediaUsersContext);
}

const initialValues = {
  searchTag: '',
  socialMediaPost: [],
  socialMediaComments: [],
  isVisibleComments: false,
  socialMediaUserDetail: {},
  isVisibleUserDetail: false,
};

const actions = {
  SET_SEARCH_TAG: 'SET_SEARCH_TAG',
  SET_SOCIALMEDIA_POST: 'SET_SOCIALMEDIA_POST',
  SET_SOCIALMEDIA_COMMENTS: 'SET_SOCIALMEDIA_COMMENTS',
  SET_IS_VISIBLE_COMMENTS: 'SET_IS_VISIBLE_COMMENTS',
  SET_SOCIALMEDIA_USER_DETAIL: 'SET_SOCIALMEDIA_USER_DETAIL',
  SET_IS_VISIBLE_USER_DETAIL: 'SET_IS_VISIBLE_USER_DETAIL',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SEARCH_TAG: {
      return {
        ...state,
        searchTag: action.payload,
      };
    }
    case actions.SET_SOCIALMEDIA_POST: {
      return {
        ...state,
        socialMediaPost: action.payload,
      };
    }
    case actions.SET_SOCIALMEDIA_COMMENTS: {
      return {
        ...state,
        socialMediaComments: action.payload,
      };
    }
    case actions.SET_IS_VISIBLE_COMMENTS: {
      return {
        ...state,
        isVisibleComments: action.payload,
      };
    }
    case actions.SET_SOCIALMEDIA_USER_DETAIL: {
      return {
        ...state,
        socialMediaUserDetail: action.payload,
      };
    }
    case actions.SET_IS_VISIBLE_USER_DETAIL: {
      return {
        ...state,
        isVisibleUserDetail: action.payload,
      };
    }
    default:
      return state;
  }
};

export const SocialMediaUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const value = {
    searchTag: state.searchTag,
    socialMediaPost: state.socialMediaPost,
    socialMediaComments: state.socialMediaComments,
    isVisibleComments: state.isVisibleComments,
    socialMediaUserDetail: state.socialMediaUserDetail,
    isVisibleUserDetail: state.isVisibleUserDetail,

    setSearchTag: (value) => {
      dispatch({ type: actions.SET_SEARCH_TAG, payload: value });
    },
    setSocialMediaPost: (value) => {
      dispatch({ type: actions.SET_SOCIALMEDIA_POST, payload: value });
    },
    setSocialMediaComments: (value) => {
      dispatch({ type: actions.SET_SOCIALMEDIA_COMMENTS, payload: value });
    },
    setIsVisibleComments: (value) => {
      dispatch({ type: actions.SET_IS_VISIBLE_COMMENTS, payload: value });
    },
    setSocialMediaUserDetail: (value) => {
      dispatch({ type: actions.SET_SOCIALMEDIA_USER_DETAIL, payload: value });
    },
    setIsVisibleUserDetail: (value) => {
      dispatch({ type: actions.SET_IS_VISIBLE_USER_DETAIL, payload: value });
    },
  };

  return (
    <SocialMediaUsersContext.Provider value={value}>
      {children}
    </SocialMediaUsersContext.Provider>
  );
};
