import AxiosManager from '@/utils/axiosManager';
import Auth from './auth.service';
import Create from './create.service';
import CreateUser from './createUser.service';

const api = new AxiosManager().api();
const cloudinary = new AxiosManager().api('https://api.cloudinary.com/v1_1/nreyes-lean');

export const auth = new Auth(api);
export const cloudi = new Create(cloudinary);
export const createUser = new CreateUser(api);
