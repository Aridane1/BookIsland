import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logos/Logo3.svg'
import { useEffect } from 'react';

export const LandingPage = () => {
  const navigate = useNavigate()
    // Navigating to homepage after 2 seconds
   useEffect(() => {

    const stopIntaval = setInterval(() => {
       console.log("Landing")
       navigate("/login")

      }, 2000);
      return () => {
        clearInterval(stopIntaval)
      }
    },[]);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="Logo" />
    </div>  
     )
}

