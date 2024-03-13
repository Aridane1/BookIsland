import { Link } from "react-router-dom";

export const RecentlyUploaded = () => {
  return (
    <div>
      <div className="grid grid-cols-[1fr,3fr] gap-[37px]">
        <div>
          <img src="" alt="" />
          <p>swap/donate</p>
        </div>
        <div>
          <h2 className="text-dark font-bold text-[22px]">Title</h2>
          <p className="py-[24px] text-primary font-bold text-[16px]">
            uploaded by
          </p>
          <h3 className="pb-[24px] text-primary font-bold text-[22px]">
            username
          </h3>

          <Link to="/specific" className="w-full h-[42px] bg-primary text-light rounded-lg">
            View
          </Link>
        </div>
      </div>
      <hr className="relative w-full h-1 my-8 bg-dark border-0 rounded mt-[32px]"></hr>
    </div>
  );
};
