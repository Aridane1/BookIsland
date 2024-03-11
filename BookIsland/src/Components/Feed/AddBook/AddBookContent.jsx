import closeIcon from "../../../assets/Icons/closeButton.svg"
import { UploadBookPicture } from "../../Partials/Forms/UploadBook"
export const AddBookContent = () => {
  return (
    <>
    <header className=' h-12 bg-primary rounded-lg'>
        <img src={closeIcon} alt="" className="relative top-1/2 -translate-y-1/2 left-[90%] text-light text-2xl"/>
    </header>
    <main className="bg-light rounded-b-lg -mt-1">
        <UploadBookPicture></UploadBookPicture>
    </main>
    </>
  )
}
