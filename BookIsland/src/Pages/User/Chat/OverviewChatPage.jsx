import { Header } from "../../../Components/Partials/Header"
import { Footer } from "../../../Components/Partials/Footer"
import TestProfilImag from "/assets/Images/profilePictureTest.webp"
import { useEffect, useState } from "react"
import { FaCirclePlus } from "react-icons/fa6";


export const OverviewChatPage = () => {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [shouldShowElement, setShouldShowElement] = useState("normal"); // State for controlling element visibility


  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 
  
  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
    //  console.log('swiperight')
    
    setShouldShowElement("deleting"); // Show the element on right swipe
    setTimeout(() => {
      setShouldShowElement("deleted"); // Hide the element after 5 seconds
    }, 1550); // 1550 milliseconds = 1,55 seconds
  }
};

useEffect(() => {
  // Cleanup timer if component unmounts or shouldShowElement changes
  let timer;
  if (shouldShowElement !== "deleting") {
    timer = setTimeout(() => {
      setShouldShowElement("deleted");
    }, 1550);
  }
  return () => clearTimeout(timer);
}, [shouldShowElement]);


  return (
    <>
      <Header />
      <div className="py-20">
        <div className=" flex justify-center items-center w-screen py-4">
        <img 
          src={TestProfilImag} 
          alt="profile image"
          className="w-20 h-20 aspect-square object-cover rounded-full flex items-center justify-center"
        />
        </div>

        <div className="px-[18px] py-4 ">
          <p className="text-dark font-bold text-[32px] w-fit pt-2 ">Your chat</p>
          <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
        </div>
        {shouldShowElement === "deleting" && (
          <div className="-mt-8">

            <div className="absolute w-[68px] mx-[18px] h-20 bg-[#FF6565] flex justify-center items-center rounded-lg">
              <FaCirclePlus className="text-light text-[40px] rotate-45" />
            </div>
          </div>
        )}
        {!(shouldShowElement === "deleted") && (  
          <div 
            className="grid grid-cols-6 px-[18px] -mt-[30px]  "
            onTouchStart={onTouchStart} 
            onTouchMove={onTouchMove} 
            onTouchEnd={onTouchEnd}
            id="chatElement"
          >
            <div className=" col-span-1 ">
              <img 
                src={TestProfilImag} 
                alt="image of chat profile"
                className=" w-16 h-16 aspect-square object-cover rounded-full flex items-center justify-center"
              />
            </div>
            <div className=" pl-4 col-span-5">
              <h3 className="text-primary font-bold text-[22px] ">Test testersen</h3> {/*username of chat*/}
              <p className="text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit..{" "} </p>
            </div>
          </div> 
        )}
    </div>
      <Footer />
    </>
  )
}
