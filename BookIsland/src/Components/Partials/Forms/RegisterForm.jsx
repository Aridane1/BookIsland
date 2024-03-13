import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Komponent til at generere inputfelter dynamisk
const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
    />
  );
};

export const RegisterForm = () => {
  // Declaration for resize header/footer
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const headerHeight = 80;
  const footerHeight = 80;
  // State variable to store the path to the image
  const [profileImage, setProfileImage] = useState(null);

  // Method for resize header/footer
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

  // Event handler for handling image uploads
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Access the uploaded file

    // Create a FileReader instance
    const reader = new FileReader();

    // When the reading is complete, state variables are updated with the path to the uploaded image
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    //If there is a file, it should be read as a data URL
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen  ">
         {/* style={{ height: `${remainingHeight}px` }} */}
      
        {/* uploading picture */}
        
          <div className=" flex items-center w-72 justify-center pb-6 ">
            <div className="max-w-xs  ">
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="flex w-16 h-16 object-cover aspect-w-1 aspect-h-1 rounded-full"
                />
              )}
              {!profileImage && (
                <div
                  id="inputFieldSmall"
                  className="flex w-16 h-16 items-center rounded-full justify-center text-center border border-black  text-primary"
                >
                  Upload <br />
                  picture
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="inputFieldSmall"
              className="ml-6 file:p-4 file:rounded-lg file:border-none file:bg-primary file:text-light text-light"
            />        
          </div>
        

        {/* input fileds for register */}
        <form className="text-center mb-8">
          <FormInput type="text" placeholder="username*" />
          <FormInput type="email" placeholder="email*" />
          <FormInput type="password" placeholder="password*" />
          <FormInput type="password" placeholder="password again*" />
          <FormInput type="text" placeholder="favorite genre" />
          <FormInput type="textarea" placeholder="description" />
          <button
            className="bg-primary w-28 h-10 rounded-lg mb-3 text-light font-bold"
            id="inputField"
          >
            Submit
          </button>
          <Link to="/login" className="block text-primary underline">
            cancel
          </Link>
        </form>
      </div>
    </>
  );
};


