export const EyeCatcher = () => {
  return (
    <div>
      <img
        src="../../../assets/Images/EyeCatcher.webp"
        alt=""
        className="relative w-full  filter brightness-75 "
      />
      <div className="">
        <span className="absolute bg-transparent text-white text-[32px] font-bold top-[230px] left-[240px]">
          Read
        </span>
        <span className="absolute  bg-transparent text-white text-[32px] font-bold top-[260px] left-[200px]">
          Something
        </span>
        <span
          id="changeText"
          className="absolute top-[290px] bg-transparent text-white left-[250px]"
        >
          New
        </span>
        <span className="absolute block w-fit top-[320px] left-[180px] bg-transparent text-white text-[32px] font-bold ">
          Every week!
        </span>
      </div>
    </div>
  );
};
