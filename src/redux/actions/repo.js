import axios from "axios"

const GetRepoPending = () => {
  return {
    type: 'GET_REPO_REQUEST'
  }
}
const GetRepoSuccess = (data) => {
  return {
    type: 'GET_REPO_SUCCESS',
    payload: data
  }
}
const GetRepoError = (err) => {
  return {
    type: 'GET_REPO_ERROR',
    payload: err

  }
}
const GetRepo = (username) => {
  return async (dispatch) => {
    try {
      dispatch(GetRepoPending())
      const result = await axios({
        method: 'GET',
        url: `https://api.github.com/users/${username}/repos`,
      })
      dispatch(GetRepoSuccess(result.data))
    }
    catch (err) {
      dispatch(GetRepoError(err.response))
    }
  }
}
export default GetRepo