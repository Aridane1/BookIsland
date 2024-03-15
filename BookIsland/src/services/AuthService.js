import axios from "axios";
import { backendAuthEnpoint } from "../constants/backend.enpoints";

function getOptions(user) {
  const base64UserAndPassword = window.btoa(user.email + ":" + user.password);

  const basicAccess = "Basic " + base64UserAndPassword;
  const options = {
    headers: {
      Authorization: basicAccess,
    },
  };
  return options;
}

async function login(user) {
  try {
    const response = axios.post(
      `${backendAuthEnpoint}/signin`,
      {},
      getOptions(user)
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function logout() {
  try {
    localStorage.removeItem("token");
    window.location.href = "/login";
  } catch (err) {
    console.log(err);
  }
}

async function getOneUserById(userId) {
  try {
    const response = axios.get(`${backendAuthEnpoint}/${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function createUserWithImage(user, blob) {
  try {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("username", user.username);
    formData.append("genre", user.genre ? user.genre : "");
    formData.append("description", user.description ? user.description : "");
    formData.append("file", blob);

    const response = await axios.post(`${backendAuthEnpoint}`, formData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function createUser(user) {
  try {
    const response = axios.post(
      `${backendAuthEnpoint}/no-image-to-add`,
      { username: user.username },
      getOptions(user)
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export default {
  login,
  getOneUserById,
  logout,
  createUserWithImage,
  createUser,
};
