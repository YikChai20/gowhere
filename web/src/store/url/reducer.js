import {
  CREATE_URL,
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  CLEAR_URL_MESSAGE,
  GET_URLS,
  GET_URLS_SUCCESS,
  GET_URLS_FAIL,
} from "./actionTypes";

const initialState = {
  urls: [],
  loading: false,
  error: {
    message: "",
    type: ""
  },
};

const UrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_URL:
      state = {
        ...state,
        loading: true
      };
      break;
    case CREATE_URL_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: {
          message: action.payload,
          type: "success"
        }
      };
      break;
    case CREATE_URL_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
          type: "danger"
        },
        loading: false,
      };
      break;
    case CLEAR_URL_MESSAGE:
      state = {
        ...state,
        error: initialState.error
      };
      break;
    case GET_URLS:
      state = {
        ...state,
        loading: true
      };
      break;
    case GET_URLS_SUCCESS:
      state = {
        ...state,
        urls: action.payload,
        loading: false
      };
      break;
    case GET_URLS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loading: false,
      };
      break;
    default:
      state = {
        ...state
      };
      break;
  }
  return state;
};

export default UrlReducer;