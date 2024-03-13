import { Link } from "react-router-dom"
import { AddABook } from "../../Components/Feed/AddBook/AddABook"
import { Footer } from "../../Components/Partials/Footer"
import { Header } from "../../Components/Partials/Header"
import TestPorfileImage from "/assets/Images/EyeCatcher.webp";
import { UserUploadedBooks } from "../../Components/UserUploadedBooks";
import { UserPendigBooks } from "../../Components/UserPendigBooks";
import { UserClosedExhanges } from "../../Components/UserClosedExhanges";

export const UserPage = () => {
  return (
    <>
    <Header></Header>
    <div className="flex  items-center justify-between  mx-4 my-6">
      <img 
        src={TestPorfileImage} 
        alt="profile picture"
        className=" w-24 aspect-square object-cover rounded-full" 
        />
      <h2 className="text-center w-full mx-4 text-dark text-[22px] font-bold">Test Testersen</h2>
    </div>

    
    <div className="grid grid-cols-2 px-[18px] ">
      <div className="text-dark">
        <p className="text-[16px] text-dark font-bold h-[49px]">name</p>
        <p className="text-[16px] text-dark font-bold h-[49px]">email</p>
        <p className="text-[16px] text-dark font-bold h-[49px]">favoritgenres</p>
        <p className="text-[16px] text-dark font-bold h-[49px]">description</p>
      </div>
      <div className=" text-primary ">
        <p className="h-[49px]">test testersen</p> {/* name of user */}
        <p className="h-[49px]">test@test.com</p> {/* email of user */}
        <p className="h-[49px]">test, test, test, test</p> {/* favorite genres of user */}
        <p className="h-[49px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> {/* description of user */}
      </div>

        <Link to="/ " className=" my-6 text-primary text-[22px] font-bold underline">edit profile</Link>

    </div>
    <div className="px-[18px]">
          <p className="text-dark font-bold text-[32px] w-fit pt-2 ">Your books</p>
          <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
    </div>
    <AddABook></AddABook>
    <UserUploadedBooks></UserUploadedBooks>   
    <UserPendigBooks></UserPendigBooks> 
    <UserClosedExhanges></UserClosedExhanges>
    <Footer></Footer>
    </>
  )
}
