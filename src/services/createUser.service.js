export default function (api) {

    return {
      createUser: (test) => api.post('/user', test),
    };
  }
  