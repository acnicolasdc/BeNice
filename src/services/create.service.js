export default function (api) {
    return {
        Create: (data) => api.post('/image/upload/', data, {
            headers: { "X-Requested-With": "XMLHttpRequest",'Access-Control-Allow-Origin':'*' }}),
    };
  }
  