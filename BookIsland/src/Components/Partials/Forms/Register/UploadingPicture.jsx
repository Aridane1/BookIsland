import { useState } from "react";

export const UploadingPicture = () => {
  const [profileImage, setProfileImage] = useState(null); // State Variable to store the image path

  // Event handler for handling image uploads
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Access the uploaded file
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result); // Update the state variable with the path to the uploaded image
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="flex items-center justify-center pb-6 ">
      <div className="max-w-xs">
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
            className="flex w-16 h-16 items-center rounded-full justify-center text-center border border-solid border-primary text-primary"
          >
            Upload <br></br>picture
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="inputFieldSmall"
        className=" ml-6 file:p-4 file:rounded-lg file:border-none file:bg-primary file:text-light text-light"
      />
    </div>
  );
};
