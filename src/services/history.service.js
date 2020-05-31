export default function (api) {
  return {
    all: (user) => api.post('/user/historys', user),
  };
}
