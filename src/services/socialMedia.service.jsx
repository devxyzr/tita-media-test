import axios from 'axios';
import { requestConfig } from './config';

export const getAllPost = async () => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/post`,
    requestConfig
  );
  const data = result.data;
  return data;
};

export const getPostByTag = async (tagName) => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/tag/${tagName}/post`,
    requestConfig
  );
  const data = result.data;
  return data;
};

export const getSocialMediaComments = async (postId) => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/post/${postId}/comment`,
    requestConfig
  );
  const data = result.data;
  return data;
};

export const getSocialMediaUserDetail = async (userId) => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/user/${userId}`,
    requestConfig
  );
  const data = result.data;
  return data;
};
