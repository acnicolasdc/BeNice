export default function (api) {
    return {
      publication: (test) => api.post('/publicacion', test),
    };
  }
  