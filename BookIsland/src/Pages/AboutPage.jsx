import { Footer } from "../Components/Partials/Footer";
import { Header } from "../Components/Partials/Header";
import TheTeamImage from "../assets/Images/TheTeam.svg";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pb-20">
        <img src={TheTeamImage} alt="" />
        <div className="px-[18px]">
          <p className="text-dark font-bold text-[32px] w-fit pt-2 ">
            Our Team
          </p>
          <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
        </div>
        <div className="grid grid-cols-2 px-[18px] -mt-[20px]">
          <ul className="pb-6 font-bold text-dark text-[22px] w-fit">
            <li className="pb-6">Tanja</li>
            <li className="pb-6">Peter</li>
            <li className="pb-6">Alejandro</li>
            <li className="pb-6">Aridane</li>
          </ul>
          <ul className="text-primary text-[22px] -ml-[50px]">
            <li className="pb-6">front-end developer</li>
            <li className="pb-6">designer</li>
            <li className="pb-6">back-end developer</li>
            <li className="pb-6">back-end developer</li>
          </ul>
        </div>
        <div className="px-[18px] -mt-[20px]">
          <p className="pb-6">Our team consist of a wonderful people.</p>
          <p className="pb-6">
            Tanja is our front-end wizard who`s very curious and not afraid to
            tackle challenging tasks
          </p>
          <p className="pb-6">
            Peter takes care of our design needs and goes down all existing
            rabbit holes in figma
          </p>
          <p className="pb-6">
            Alejandro is a great back-end specialist who seems to quietly plan
            all steps and is very considerate.
          </p>
          <p className="pb-6">
            Aridane is the most vocal member of the group and has great
            enthusiasm when it comes to figure out problems.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};
