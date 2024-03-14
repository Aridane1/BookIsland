import { Link } from "react-router-dom";
import TornBook from "../../public/assets/Images/TornBook.svg"
import "../../src/global.css"

export const FallbackPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col p-4 gap-6">
      <img className="h-[200px]" src={TornBook} alt="torn book" />
      <h2 className="text-5xl text-primary font-semibold">404 error</h2>
      <p className="text-dark text-2xl text-center">
      Oops! 
      The page your looking for seems to be ripped out.
      We’ll look for some glue so you could try again later.        
      </p>
      <Link to="/home" className="text-primary font-raleway underline">
        Click here to get to the front page
      </Link>
    </div>
  );
};
