import { NavLink, useLocation } from "react-router-dom";
import About from "/assets/Icons/About.svg";
import ActiveAbout from "/assets/Icons/ActiveAbout.svg";
import Home from "/assets/Icons/Home.svg";
import ActiveHome from "/assets/Icons/ActiveHome.svg";
import Profile from "/assets/Icons/Profile.svg";
import ActiveProfile from "/assets/Icons/ActiveProfile.svg";
import Chat from "/assets/Icons/Chat.svg";
import ActiveChat from "/assets/Icons/ActiveChat.svg";

export const Footer = () => {
  const location = useLocation();

  return (

    <nav className="fixed bottom-0 left-0 w-screen h-20 bg-primary flex justify-center items-center">
      <ul className="flex justify-between w-full mx-8  bg-primary">
        <li className=" bg-primary">
          <NavLink to="/about">
            <img
              src={location.pathname === "/about" ? ActiveAbout : About}
              alt=""
              className=" bg-primary"
            />
          </NavLink>
        </li>
        <li className=" bg-primary">
          <NavLink to="/home">
            <img
              src={location.pathname === "/home" ? ActiveHome : Home}
              alt=""
              className=" bg-primary"
            />
          </NavLink>
        </li>
        <li className=" bg-primary">
          <NavLink to="/user">
            <img
              src={location.pathname === "/user" ? ActiveProfile : Profile}
              alt=""
              className=" bg-primary"
            />
          </NavLink>
        </li>
        <li className=" bg-primary">
          <NavLink to="/Overview-chat">
            <img
              src={location.pathname === "/Overview-chat" ? ActiveChat : Chat}
              alt=""
              className=" bg-primary"
            />
          </NavLink>
        </li>
      </ul>

    </nav>
  );
};
