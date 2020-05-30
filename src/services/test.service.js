export default function (api) {
  return {
    testApi: (test) => api.post('/test', test),
  };
}
