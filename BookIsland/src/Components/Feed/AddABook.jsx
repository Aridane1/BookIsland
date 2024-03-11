import { FaCirclePlus } from "react-icons/fa6";

export const AddABook = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="w-10/12 h-[48px] bg-primary rounded-lg text-light font-bold text-[22px] pr-[20px]">
          Add a book
        </button>
      </div>
      <FaCirclePlus className="relative -top-[35px] left-[250px] text-light text-[22px]" />
    </div>
  );
};
