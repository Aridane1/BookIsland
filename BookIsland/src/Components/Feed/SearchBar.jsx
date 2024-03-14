import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
  return (
<>
<div className="absolute flex justify-center items-center w-10/12 h-[41px] mx-8 bg-secondary">
    <input 
        type="text" 
        placeholder="search..."
        className=" w-10/12 bg-secondary placeholder:font-bold placeholder:text-[22px] placeholder:text-[#8ABECD]" />
    <IoIosSearch className="relative left-0 bg-secondary text-[22px] text-[#8ABECD]"/>
</div>

</>    
  )
}
