export default function (api) {
  return {
    all: (data) => api.get('/publicaciones', data),
  };
}
