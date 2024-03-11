import EyeCatcherImage from "../../assets/Images/EyeCatcher.svg";

export const EyeCatcher = () => {
  return (
    <div>
      <img src={EyeCatcherImage} alt="" className="relative w-full" />
      <div className="">
        <span className="absolute text-light text-[32px] font-bold top-[230px] left-[240px]">
          Read
        </span>
        <span className="absolute text-light text-[32px] font-bold top-[260px] left-[200px]">
          Something
        </span>
        <span id="changeText" className="absolute top-[290px] left-[250px]">
          New
        </span>
        <span className="absolute block w-fit top-[320px] left-[180px] text-[32px] font-bold text-light">
          Every week!
        </span>
      </div>
    </div>
  );
};
