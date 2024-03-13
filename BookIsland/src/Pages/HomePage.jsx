import { AddABook } from "../Components/Feed/AddBook/AddABook"
import { EyeCatcher } from "../Components/Feed/EyeCatcher"
import { RecentlyUploaded } from "../Components/Feed/RecentlyUploaded"
import { Footer } from "../Components/Partials/Footer"
import { Header } from "../Components/Partials/Header"

export const HomePage = () => {
  return (
    <>
    <Header></Header>
    <main className="pb-20">
      <EyeCatcher></EyeCatcher>
      <div className="px-[18px]">
        <p className="text-dark font-bold text-[32px] w-fit pt-2 ">Recently uploaded</p>
        <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
      </div>
      <AddABook></AddABook>
      <div className="px-[18px]">
      <RecentlyUploaded></RecentlyUploaded>
      </div>
    </main>
    <Footer></Footer>
    
    </>
  )
}
