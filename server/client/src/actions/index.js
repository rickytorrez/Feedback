import axios from 'axios';
import { FETCH_USER } from './types';


// AJAX
const fetchUser = () => {
    axios.get('/api/current_user');
};