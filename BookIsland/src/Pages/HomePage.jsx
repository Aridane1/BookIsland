import { useEffect, useState } from "react";
import { AddABook } from "../Components/Feed/AddBook/AddABook";
import { EyeCatcher } from "../Components/Feed/EyeCatcher";
import { RecentlyUploaded } from "../Components/Feed/RecentlyUploaded";
import { Footer } from "../Components/Partials/Footer";
import { Header } from "../Components/Partials/Header";
import BookService from "../services/BookService";


export const HomePage = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await BookService.getAllBooks();
      setBooks(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>

      <Header />
      <main className="pb-20">
        <EyeCatcher />
        <div className="px-[18px]">
          <p className="text-dark font-bold text-[32px] w-fit pt-2 ">
            Recently uploaded
          </p>
          <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
        </div>
        <AddABook />
        <div className="px-[18px]">
          {books.map((book) => (
            <RecentlyUploaded
              filename={book.filename}
              title={book.title}
              typeTransaction={book.type_transaction}
              username={book.user.username}
              key={book.id}
            />
          ))}
        </div>
      </main>
      <Footer />

    </>
  )
}
