import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { Footer } from "../Components/Partials/Footer";
import { Header } from "../Components/Partials/Header";
import BookService from "../services/BookService";
import { backendImageEndpoint } from "../constants/backend.enpoints";
import "../../src/global.css"


export const SpecificPage = () => {
  const [book, setBook] = useState();
  const { bookId } = useParams();
  const navigate = useNavigate();

  const getBookById = async (id) => {
    const response = await BookService.getOneBookById(id);
    const date = new Date(response.data.date);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    response.data.date = { day: day, month: month, year: year };

    setBook(response.data);
  };

  const formatDate = (date) => {
    const day = date.day.toString().padStart(2, "0");
    const month = date.month.toString().padStart(2, "0");
    const year = date.year;
    return `${day}/${month}/${year}`;
  };

  const goToChat = (bookId) => {
    navigate(`/specific-chat/${bookId}`);
  };

  useEffect(() => {
    getBookById(bookId);
  }, [bookId]);

  return (
    <>
      <Header></Header>
      {book ? (
        <main className="mt-[96px] px-0 m-[16px] ">
          <img
            className="w-screen"
            src={`${backendImageEndpoint}/${book.filename}`}
            alt={book.title}
          />
          <div className="p-0">
            <p className="text-dark font-bold text-[32px] w-full py-1 pt-4 ">
              {book.title}
            </p>
            <hr className="w-[84px] h-1 my-2 bg-dark border-0 rounded m-0 "></hr>
          </div>
          <div className="grid grid-cols-2 gap-[16px] justify-between py-4">
            <ul className="list-none -pb-6 font-bold text-dark text-[22px] w-fit p-0">
              <li className="pb-6">Author</li>
              <li className="pb-6">Publisher</li>
              <li className="pb-6">Publish date</li>
              <li className="pb-6">ISBN-13</li>
            </ul>
            <ul className="list-none -text-primary text-[22px] w-full p-0 text-primary">
              <li className="pb-6">{book.author}</li>
              <li className="pb-6">Harper Collins </li>
              <li className="pb-6">{formatDate(book.date)}</li>
              <li className="pb-6">{book.ISBN}</li>
            </ul>
          </div>
          <div className="-mt-[20px]">
            <p className="text-[16] text-dark text- ">{book.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-[32px] justify-between m-0 py-4 ">
            <ul className="list-none font-bold text-dark text-[22px] w-fit m-0 p-0">
              <li>Uploaded by</li>
            </ul>
            <ul className="list-none text-primary text-[22px] m-0 p-0">
              <li>{book.user.username}</li>
            </ul>
          </div>
          <div className="flex pb-[104px] gap[32px] justify-between">
            <div className="items-center">
              <Link
                to={"/home"}
                className="h-[48px]  rounded-lg text-primary font-bold text-[22px] px-[16px] py[8px] underline underline-offset-8"
              >
                Go Back
              </Link>
            </div>
            <div className="items-center">
              <button
                className="h-[48px] bg-primary rounded-lg text-center text-light font-bold text-[22px] px-[16px] py[8px]"
                onClick={() => goToChat(book.id)}
              >
                Reserve & Contact
              </button>
            </div>
          </div>
        </main>
      ) : (
        ""
      )}

      <Footer></Footer>
    </>
  );
};
