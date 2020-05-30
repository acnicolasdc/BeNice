import axios from '@/utils/axiosManager';
import Auth from './auth.service';
import Create from './create.service';
const api = axios.api();

export const auth = new Auth(api);
export const create = new Create(api);
