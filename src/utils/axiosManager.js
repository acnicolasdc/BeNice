import axios from 'axios';
const BASE_URL = 'https://benice-back-heroku.herokuapp.com/benice/v1';
const CONTENT_TYPE = 'application/x-www-form-urlencoded';
class AxiosManager {
  constructor() {
    this.axiosDefault = axios.create();
    this.init();
  }
  init() {
    this.setHeader();
    this.handleError();
  }
  api(url = BASE_URL) {
    this.setHeader();
    this.setBaseUrl(url);
    return this.axiosDefault;
  }
  setBaseUrl(url = BASE_URL) {
    this.axiosDefault.defaults.baseURL = url;
  }
  setHeader(contentType = CONTENT_TYPE) {
    debugger;
    this.axiosDefault.defaults.headers.post['Content-Type'] = contentType;
    this.axiosDefault.defaults.headers.post['Access-Control-Allow-Origin']='*';
    this.axiosDefault.defaults.headers.post['X-Requested-With']='XMLHttpRequest';

  }
  handleError() {
    this.axiosDefault.interceptors.response.use(
      function (response) {
        // aqui deberiamos de controlar la data para evitar destructurar en sagas
        return response;
      },
      function (error) {
        return Promise.reject(error.message);
      }
    );
  }

  deleteInterceptor(interceptor) {
    axios.interceptors.request.eject(interceptor);
  }
}

export default AxiosManager;
