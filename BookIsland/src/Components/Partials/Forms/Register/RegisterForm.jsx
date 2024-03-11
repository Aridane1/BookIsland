import React, { useState, useEffect } from 'react';
import { UploadingPicture } from './UploadingPicture';
import { RegisterInput } from './RegisterInput';


export const RegisterForm = () => {
  // Declaration for rezise header/footer
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const headerHeight = 80; 
  const footerHeight = 80; 


  // Method for rezise header/footer
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const remainingHeight = windowHeight - headerHeight - footerHeight;
return (
  <>
    <div
        className="flex flex-col justify-center items-center"
        style={{ height: `${remainingHeight}px` }}
      >
      <UploadingPicture></UploadingPicture>
      <RegisterInput></RegisterInput>
    </div>
   </>
  )
}

