
import { Link, useNavigate } from "react-router-dom";


import { backendImageEndpoint } from "../../constants/backend.enpoints";

export const RecentlyUploaded = (book) => {
  const navigate = useNavigate();

  const goToInformationOfBook = (id) => {
    navigate(`/specific/${id}`);
  };

  return (
    <div className="mt-20">
      <div className="grid grid-cols-[1fr,3fr] gap-[37px]">
        <div>
          <img
            src={`${backendImageEndpoint}/${book.filename}`}
            alt={book.title}
            className=" w-20 h-[120px] border border-dark"
          />
          <p
            className={`h-6 text-center mt-10 rounded text-[#F6FEFF] text-[11px] font-bold flex justify-center items-center ${
              book.typeTransaction === "swap" ? "bg-[#FFA800]" : "bg-[#06CC55]"
            }`}
          >
            {book.typeTransaction}
          </p>
        </div>
        <div>
          <h2 className="text-dark font-bold text-[22px]">{book.title}</h2>
          <p className="py-[20px] text-dark font-bold text-[16px]">
            uploaded by
          </p>
          <h3 className="pb-[20px] text-primary font-bold text-[22px]">
            {book.username}
          </h3>


          <Link to="/specific" className="w-full h-[42px] bg-primary text-light rounded-lg text-center text-[22px] font-bold flex justify-center items-center">

            View
          </Link>
        </div>
      </div>
      <hr className="relative w-full h-1 my-8 bg-dark border-0 rounded mt-[32px]"></hr>
    </div>
  );
};
