import { get, post } from "./api_helper";

export const getUrls = () => get(
    "/url/list"
);

export const createUrl = (input) => post(
    "/url/create",
    input.payload
);
