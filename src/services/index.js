import axios from '@/utils/axiosManager';
import Auth from './auth.service';
const api = axios.api();

export const auth = new Auth(api);
