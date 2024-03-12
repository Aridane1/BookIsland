import { OverviewChat } from "../../../Components/Chat pages/OverviewChat";
import { Footer } from "../../../Components/Partials/Footer";
import { Header } from "../../../Components/Partials/Header";
import TestImage from "../../../assets/Images/TestImageUser.svg";

export const OverviewChatPage = () => {
  return (
    <>
    <Header></Header>
    <div className="flex justify-center items-center py-4 ">
    <img src={TestImage} alt="profile picture" className=" w-2/6  " />
    </div>
    <div className="px-[18px]">
      <p className="text-dark font-bold text-[32px] w-fit pt-2 ">Your chat</p>
      <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
    </div>
    
    <OverviewChat></OverviewChat>
    <Footer></Footer>
    </>
  )
}
