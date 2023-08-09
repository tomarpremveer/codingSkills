import axios from "axios";

export const FETCH_USERS = "FETCH_USERS"

export const fetchUsers = () => async (dispatch, getState) => {
    const { users } = getState();
    if (users.length === 0) {
        const response = await axios.get('https://react-ssr-api.herokuapp.com/users')
        dispatch({
            type: FETCH_USERS,
            payload: response.data
        })
    }
    
}