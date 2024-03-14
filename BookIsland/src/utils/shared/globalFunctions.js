import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
  const token = localStorage.getItem("token");
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
};
