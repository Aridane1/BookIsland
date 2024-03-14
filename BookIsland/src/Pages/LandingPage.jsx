import { useNavigate } from "react-router-dom";
import logo from "/assets/Logos/Light-blue-bagground.svg";
import { useEffect } from "react";
import "../../src/global.css"

export const LandingPage = () => {
  const navigate = useNavigate();
  // Navigating to homepage after 2 seconds
  useEffect(() => {
    const stopIntaval = setInterval(() => {
      navigate("/login");
    }, 2000);
    return () => {
      clearInterval(stopIntaval);
    };
  }, []);

  return (
    <div 
      id="Bounce"
      className="flex justify-center items-center h-screen">
      <img src={logo} alt="Logo" />
    </div>
  );
};
