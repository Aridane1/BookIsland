import { NavLink } from "react-router-dom";
import About from "/assets/Icons/About.svg";
import ActiveAbout from "/assets/Icons/ActiveAbout.svg";
import Home from "/assets/Icons/Home.svg";
import ActiveHome from "/assets/Icons/ActiveHome.svg";
import Profile from "/assets/Icons/Profile.svg";
import ActiveProfile from "/assets/Icons/ActiveProfile.svg";
import Chat from "/assets/Icons/Chat.svg";
import ActiveChat from "/assets/Icons/ActiveChat.svg";

export const Footer = () => {
  return (

    
    <nav className="fixed bottom-0 left-0 w-screen h-20 bg-primary flex justify-center items-center" >
        <ul className="list-none flex justify-between w-full mx-8  bg-primary">
            <li className=" bg-primary" >
                <NavLink 
                to="/about" 
                activeClassName="active"
                >
                    <img 
                    src={location.pathname === "/about" ? ActiveAbout : About}
                    alt=""
                    className=" bg-primary"

                    />
                </NavLink>
            </li>
            <li>
                <NavLink to="/home">
                    <img 
                    src={location.pathname === "/home" ? ActiveHome : Home} 
                    alt=""
                    className=" bg-primary" 
                    />

                </NavLink>
            </li>
            <li>
                <NavLink to="profile">
                    <img 
                    src={location.pathname === "/profile" ? ActiveProfile : Profile} 
                    alt=""
                    className=" bg-primary" 
                    />

                </NavLink>
            </li>
            <li>
                <NavLink to="chat">
                    <img 
                    src={location.pathname === "/chat" ? ActiveChat : Chat} 
                    alt="" 
                    className=" bg-primary" 
                    />
                    
                </NavLink>
            </li>
        </ul>



 
                      
    </nav>
  );
};
