import axios from 'axios';
import { FETCH_USER } from './types';


//  AXIOS API CHECKING FOR CURRENT USER
const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};