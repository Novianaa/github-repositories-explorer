const initialState = {
  loading: false,
  data: {},
}

const GetUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { ...state, loading: true }
    case "GET_USERS_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}


export default GetUsers