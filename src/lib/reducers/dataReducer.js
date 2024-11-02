import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: null,
  user: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;