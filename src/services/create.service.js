export default function (api) {
    return {
      create: (data) => api.post('https://api.cloudinary.com/v1_1/nreyes-lean/image/upload/', data),
    };
  }
  