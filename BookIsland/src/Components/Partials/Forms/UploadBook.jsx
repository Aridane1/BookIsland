import BookTest from "../../../assets/Images/BookTest.svg"
import { ToggleSwitch } from "../../ToggleSwitch"

export const UploadBookPicture = () => {
  return (
    <>
    <div className="grid grid-cols-2 ">
        <div className="w-fit ml-[14px]">
            <img 
                src={BookTest} 
                alt="" 
                className="w-[70px] h-[84px] ml-[11.5px] mt-[48.5px] mb-3" 
                />
            <input 
                type="file" 
                id="inputFieldSmall"
                className='w-[70px] ml-[11.5px] mb-[48px] file:p-4 file:rounded-lg file:border-none file:bg-primary file:text-light text-light'  
                />
                <div className="ml-2">
            <ToggleSwitch></ToggleSwitch>
                </div>
        </div>
        <div className="mt-[17px] -ml-10 ">
            <input 
                type="text" 
                placeholder="title" 
                id="BookInputField" 
                className=" bg-secondary mb-4 pl-2"  
                />
            <input 
                type="text" 
                placeholder="author" 
                id="BookInputField" 
                className=" bg-secondary mb-4 pl-2"  
            />
            <input 
                type="text" 
                placeholder="publisher" 
                id="BookInputField" 
                className=" bg-secondary mb-4 pl-2"
                />
            <input 
                type="text" 
                placeholder="publish date" 
                id="BookInputField" 
                className=" bg-secondary mb-4 pl-2"
                />
            <input 
                type="text" 
                placeholder="ISBN-13" 
                id="BookInputField" 
                className=" bg-secondary mb-4 pl-2" 
                />
            <textarea  
                rows="3"
                id="BookInputField" 
                placeholder="description" 
                resize="none"
                className=" bg-secondary w-11/12 mb-4 pl-2" 
            />
        </div>
    </div>
    <div class="flex justify-center">
  <button class="w-[122px] h-[42px] mb-4 text-light text-[22px] bg-primary rounded-lg">
    Add book
  </button>
</div>
    </>
  )
}
