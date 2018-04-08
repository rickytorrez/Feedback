import axios from 'axios';
import { FETCH_USER } from './types';


// AXIOS API CHECKING FOR CURRENT USER
const fetchUser = () => {
    axios.get('/api/current_user');
};