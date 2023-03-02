<<<<<<< HEAD
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });
=======
import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};
<<<<<<< HEAD
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
=======

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = id => client.delete(`/api/posts/${id}`);
>>>>>>> 02d20f216d37e6f99a8d85f14ac8400160901b89
