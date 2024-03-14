import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import BxsSend from "/assets/Icons/BxsSend.svg";

import { webSocketEndpoint } from "../../../constants/backend.enpoints";
import { decodeToken } from "../../../utils/shared/globalFunctions";
import { Header } from "../../../Components/Partials/Header";
import { Footer } from "../../../Components/Partials/Footer";

export const SpecificChatPage = () => {
  const [messages, setMessages] = useState([]);

  const messageRef = useRef();
  const ws = useRef();
  const { bookId } = useParams();
  const user = decodeToken();

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
    const SERVER_URL = `${webSocketEndpoint}?&interested_user=${user.id}&book_id=${bookId}`;
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "newMessages") {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };
  }, [bookId, user.id]);

  return (
    <>
      <main className="h-screen">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="">
            {messages.map((message, index) => {
              return (
                <p className="bg-blue-700" key={index}>
                  {message.content}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center fixed bottom-24 w-full">
          <form onSubmit={handleMessageSend} className="bg-secondary">
            <div className="flex w-full gap-2 relative ">
              <input
                type="text"
                ref={messageRef}
                className="w-60 bg-secondary"
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                className="absolute right-0 h-full bg-secondary "
              >
                <img src={BxsSend} alt="" className="bg-secondary  " />
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
