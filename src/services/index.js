import AxiosManager from '@/utils/axiosManager';
import Auth from './auth.service';

const api = new AxiosManager().api();
const cloudinary = new AxiosManager('aqui va la url');

export const auth = new Auth(api);
