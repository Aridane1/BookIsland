import logo from "/assets/Logos/Group-40.svg";
import FAQ from "/assets/Logos/FAQ.svg";
import LogOut from "/assets/Logos/close-round-fill.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (

    <header className=" fixed  top-0 w-screen h-20 bg-primary flex justify-between items-center pl-4 z-10">
      <Link to="/home" className=" bg-primary "><img src={logo} alt="" className=" rounded-full " /></Link>
      
      <div className="flex justify-between items-center m- rounded-full bg-primary">
        <Link to="/faq"><img src={FAQ} alt="" className="bg-primary" /></Link>
        
        <img src={LogOut} alt="" className="bg-primary pl-6 pr-4" />
      </div>
    </header>
  );
};
