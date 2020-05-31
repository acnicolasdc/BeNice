export default function (api) {
  return {
    all: (user) =>
      api.get('/publicaciones', {
        params: {
          usuario_id: user,
        },
      }),
  };
}
