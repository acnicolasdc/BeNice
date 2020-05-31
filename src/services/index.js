import AxiosManager from '@/utils/axiosManager';
import Auth from './auth.service';
import History from './history.service';

const api = new AxiosManager().api();

export const auth = new Auth(api);
export const history = new History(api);
