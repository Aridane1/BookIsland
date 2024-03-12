import { useState, useEffect } from "react";
import testImage from "../../assets/Images/TestImageUser.svg";
import { FaCirclePlus } from "react-icons/fa6";

export const OverviewChat = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [shouldShowElement, setShouldShowElement] = useState(false); // State for controlling element visibility
  const [isVisible, setIsVisible] = useState(true); // State for controlling component visibility

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      setShouldShowElement(true); // Show the element on right swipe
      setTimeout(() => {
        setIsVisible(false); // Hide the entire component after 5 seconds
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  useEffect(() => {
    // Cleanup timer if component unmounts or shouldShowElement changes
    let timer;
    if (shouldShowElement) {
      timer = setTimeout(() => {
        setIsVisible(false); // Hide the entire component after 5 seconds
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [shouldShowElement]);

  return (
    <>
      {isVisible && (
        <>
          {shouldShowElement && (
            <div className="absolute w-[68px] mx-[18px] h-20 bg-[#FF6565] flex justify-center items-center rounded-lg">
              <FaCirclePlus className="text-light text-[40px] rotate-45" />
            </div>
          )}

          <div
            className="flex justify-center items-center px-[18px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img src={testImage} alt="Picture of chatmember" />
            <div className="pl-5">
              <h3 className="text-primary text-[22px] font-bold">Test testersen</h3>
              <p className="text-dark text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
