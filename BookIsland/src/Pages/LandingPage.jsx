import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logos/Vector.svg'
import { useEffect } from 'react';

export const LandingPage = () => {
 const navigate = useNavigate()
    // Navigating to homepage after 2 seconds
   useEffect(() => {
   
     setInterval(() => {
       console.log("Landing")
       navigate("/home")

      }, 2000);
    },[]);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="Logo" />
    </div>  
     )
}

