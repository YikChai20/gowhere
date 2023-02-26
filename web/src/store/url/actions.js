import {
  CREATE_URL,
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  CLEAR_URL_MESSAGE,
  GET_URLS,
  GET_URLS_SUCCESS,
  GET_URLS_FAIL
} from "./actionTypes";

export const clearUrlMessage = () => {
  return {
    type: CLEAR_URL_MESSAGE
  };
};

export const createUrl = (input) => {
  return {
    type: CREATE_URL,
    payload: input
  }
};

export const createUrlSuccess = (payload) => {
  return {
    type: CREATE_URL_SUCCESS,
    payload: payload.message,
  };
};

export const createUrlFail = (error) => {
  return {
    type: CREATE_URL_FAIL,
    payload: error.data.message,
  };
};


export const getUrls = () => {
  return {
    type: GET_URLS,
  };
};

export const getUrlsSuccess = (payload) => {
  return {
    type: GET_URLS_SUCCESS,
    payload: payload.data,
  };
};

export const getUrlsFail = (error) => {
  return {
    type: GET_URLS_FAIL,
    payload: error,
  };
};