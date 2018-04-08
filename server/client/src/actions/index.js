import axios from 'axios';
import { FETCH_USER } from './types';


// AXIOS API
const fetchUser = () => {
    axios.get('/api/current_user');
};