import { BASE_API_ENDPOINT } from "../../constants/api-constants";

export const fetchUserById = (id: number) => {
  //   return fetch(`${BASE_API_ENDPOINT}/users/${id}`);
  return fetch(BASE_API_ENDPOINT.SWIGGY);
};
