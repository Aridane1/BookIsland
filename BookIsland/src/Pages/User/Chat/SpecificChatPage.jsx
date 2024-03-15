import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BxsSend from "/assets/Icons/BxsSend.svg";
import TestProfilImag from "/assets/Images/profilePictureTest.webp";
import CrossIcon from "/assets/Icons/CrossIcon.svg";

import { Message } from "../../../Components/Messages";
import { Footer } from "../../../Components/Partials/Footer";
import { Header } from "../../../Components/Partials/Header";
import { webSocketEndpoint } from "../../../constants/backend.enpoints";
import AuthService from "../../../services/AuthService";
import { decodeToken } from "../../../utils/shared/globalFunctions";

export const SpecificChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [infoUser, setInfoUser] = useState();

  const messageRef = useRef();
  const ws = useRef();
  const { bookId } = useParams();
  const { userId } = useParams();

  const user = decodeToken();

  const getInfoUser = async () => {
    const response = await AuthService.getOneUserById(userId);
    setInfoUser(response.data);
  };

  const handleMessageSend = (event) => {
    event.preventDefault();

    const messageValue = messageRef.current.value;

    const parseMessage = {
      message: messageValue,
      type: "sendMessage",
      username: user.username,
      bookId: bookId,
      userId: user.id,
    };

    const messageWithUsername = JSON.stringify(parseMessage);
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(messageWithUsername);
    }
  };

  useEffect(() => {
    const SERVER_URL = `${webSocketEndpoint}?&interested_user=${user.id}&changing_user=${userId}&book_id=${bookId}`;
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "newMessages") {
        console.log("hola");
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };
  }, [bookId, user.id, userId]);

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <>
      <main className="h-screen">
        <div className="h-20">
          <Header />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="flex w-[350px]  gap-x-2 h-full items-center pt-3 relative">
              <div className="flex flex-col items-center justify-center relative ">
                <img
                  src={TestProfilImag}
                  alt="profile image"
                  className="size-20 aspect-square object-cover rounded-full flex items-center justify-center"
                />
                <hr className="absolute -bottom-10 w-24 h-1 my-8 bg-dark border-0 rounded "></hr>
              </div>
              <div className="text-primary text-3xl font-bold">
                <p>{infoUser ? infoUser.username : ""}</p>
              </div>
              <Link className="absolute right-0" to={"/Overview-chat"}>
                <img src={CrossIcon} alt="cross icon" />
              </Link>
            </div>
          </div>
          <div className="mx-5 mb-20">
            {messages
              ? messages.map((message, index) => {
                  return (
                    <div className="my-5" key={index}>
                      <Message
                        username={message.author}
                        user={user.username}
                        message={message.content}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div className="flex justify-center fixed bottom-24 w-full bg-transparent">
          <form onSubmit={handleMessageSend}>
            <div className="flex w-full gap-2 relative h-10 bg-secondary ">
              <input
                type="text"
                ref={messageRef}
                className="w-60 bg-secondary"
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                className="absolute right-0 h-full bg-secondary"
              >
                <img src={BxsSend} alt="" className="bg-secondary" />
              </button>
            </div>
          </form>
        </div>
        <div className="h-20">
          <Footer />
        </div>
      </main>
    </>
  );
};
