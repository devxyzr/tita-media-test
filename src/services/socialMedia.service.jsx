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

export const getSocialMediaComments = async (idPost) => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/post/${idPost}/comment`,
    requestConfig
  );
  const data = result.data;
  return data;
};

export const getSocialMediaUserDetail = async (idUser) => {
  const result = await axios.get(
    `https://dummyapi.io/data/v1/user/${idUser}`,
    requestConfig
  );
  const data = result.data;
  return data;
};
