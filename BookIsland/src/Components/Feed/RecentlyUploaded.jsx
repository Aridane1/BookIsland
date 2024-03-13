import { backendImageEndpoint } from "../../constants/backend.enpoints";

export const RecentlyUploaded = (book) => {
  return (
    <div>
      <div className="grid grid-cols-[1fr,3fr] gap-[37px]">
        <div>
          <img
            src={`${backendImageEndpoint}/${book.filename}`}
            alt={book.title}
          />
          <p
            className={`text-center mt-10 rounded text-secondary font-bold ${
              book.typeTransaction === "swap" ? "bg-[#FFA800]" : "bg-[#06CC55]"
            }`}
          >
            {book.typeTransaction}
          </p>
        </div>
        <div>
          <h2 className="text-dark font-bold text-[22px]">{book.title}</h2>
          <p className="py-[24px] text-primary font-bold text-[16px]">
            uploaded by
          </p>
          <h3 className="pb-[24px] text-primary font-bold text-[22px]">
            {book.username}
          </h3>

          <button className="w-full h-[42px] bg-primary text-light rounded-lg">
            View
          </button>
        </div>
      </div>
      <hr className="relative w-full h-1 my-8 bg-dark border-0 rounded mt-[32px]"></hr>
    </div>
  );
};
