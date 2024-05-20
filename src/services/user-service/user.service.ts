import { BASE_API_ENDPOINT } from "../../constants/api-constants";

export const fetchUserById = (id: number) => {
  return fetch(`${BASE_API_ENDPOINT.LOCAL_HOST}/users/${id}`);
};

// export const fetchProductById = (id: number) => {
//   return fetch(BASE_API_ENDPOINT.SWIGGY);
// };

export const fetchProductById = async (userId: number) => {
  const response = await fetch(`${BASE_API_ENDPOINT.SWIGGY}/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
