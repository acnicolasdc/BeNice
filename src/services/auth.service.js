export default function (api) {
  return {
    login: (test) => api.post('/user/auth', test),
  };
}
