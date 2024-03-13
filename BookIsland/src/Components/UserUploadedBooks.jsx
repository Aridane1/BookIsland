export const UserUploadedBooks = () => {
  return (
    <>
      <h2 className="-mt-1 my-7 text-center w-full text-[22px] font-bold text-dark">Uploaded books</h2>
    <div className="grid grid-cols-5 grid-rows-1 gap-4 pb-10">
        <div className="col-span-1 flex flex-col items-center pl-[18px]">
            <img 
             src=" "  //image from fetch
            alt="Image of the book"
            className="w-[80px]" />
            <p className=" mt-5 bg-swap w-fit rounded-lg py-1.5 px-2 text-light ">swap</p>
        </div>
        <div className="col-span-2 text-dark text-[16px] font-bold">
            <p className="h-[49px]">title</p>
            <p className="h-[49px]">reserved until</p>
            <p className="h-[49px]">uploader</p>
        </div>
        
        {/* Books that you have start a chat on, and wants  */}
        <div className="col-span-1 pr-[18px] text-dark text-[16px]">
            <p className="h-[49px] ">test</p> {/* title from upload */}
            <p className="h-[49px] ">test</p> {/* reserved when chat is createt otherwise: "-" */}
            <p className="h-[49px] ">test</p> {/* swap or donate from the checkbox at uploading the book */}
        </div>
    </div>

    </>
  )
}
