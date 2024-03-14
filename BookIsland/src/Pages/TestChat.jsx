import { useEffect, useState } from "react";
import ChatUserService from "../services/ChatUserService";

export default function TestChat() {
  const [chats, setChats] = useState([]);

  const getAllChatsUser = async () => {
    const response = await ChatUserService.getAllChatsUserByUserId();
    console.log(response.data);
    setChats(response.data);
  };

  useEffect(() => {
    getAllChatsUser();
  }, []);

  return (
    <div className="">
      {chats.map((chat) => (
        <div key={chat.id}>
          <button>{chat.interested_user}</button>
        </div>
      ))}
    </div>
  );
}
