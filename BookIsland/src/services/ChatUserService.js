import axios from "axios";
import { backendChatUserEndpoint } from "../constants/backend.enpoints";
import { decodeToken } from "../utils/shared/globalFunctions";

async function getAllChatsUserByUserId() {
  try {
    const user = decodeToken();
    const response = axios.get(`${backendChatUserEndpoint}/${user.id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export default { getAllChatsUserByUserId };
