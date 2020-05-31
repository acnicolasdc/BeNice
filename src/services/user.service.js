export default function (api) {
  return {
    like: (data) => api.post('/like_user', data),
    disLike: (data) => api.post('/dislike_user', data),
    updateUser: (data) => api.put('/user', data),
  };
}
