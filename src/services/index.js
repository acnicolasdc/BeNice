import axios from '@/utils/axiosManager';
import Test from './test.service';

const api = new axios.api();


export const auth = new Test(api);

