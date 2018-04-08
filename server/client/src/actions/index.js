import axios from 'axios';
import { FETCH_USER } from './types';


// AXIOS
const fetchUser = () => {
    axios.get('/api/current_user');
};