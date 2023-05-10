import axios from "axios"

const GetUsersPending = () => {
  return {
    type: 'GET_USERS_REQUEST'
  }
}
const GetUsersSuccess = (data) => {
  return {
    type: 'GET_USERS_SUCCESS',
    payload: data
  }
}
const GetUsersError = (err) => {
  return {
    type: 'GET_USERS_ERROR',
    payload: err

  }
}
const GetUsers = (query) => {
  return async (dispatch) => {
    try {
      dispatch(GetUsersPending())
      const result = await axios({
        method: 'GET',
        url: `https://api.github.com/search/users?q=${query}&per_page=5`,
      })
      dispatch(GetUsersSuccess(result.data))
    }
    catch (err) {
      dispatch(GetUsersError(err.response))
    }
  }
}
export default GetUsers