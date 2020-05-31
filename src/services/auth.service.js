export default function (api) {
  return {
    login: (data) => api.post('/user/auth', data),
  };
}
