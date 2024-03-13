import axios from "axios";
import { backendBookEnpoint } from "../constants/backend.enpoints";

async function getAllBooks() {
  try {
    const response = axios.get(`${backendBookEnpoint}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export default { getAllBooks };
