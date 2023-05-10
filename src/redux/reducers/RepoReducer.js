const initialState = {
  loading: false,
  data: {},
}

const GetRepo = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_REPO_REQUEST":
      return { ...state, loading: true }
    case "GET_REPO_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_REPO_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}
export default GetRepo