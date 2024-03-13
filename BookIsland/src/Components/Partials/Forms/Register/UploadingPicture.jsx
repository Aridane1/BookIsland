import { useState } from "react";

export const UploadingPicture = () => {
  const [profileImage, setProfileImage] = useState(null); // Statevariabel til at gemme billedstien

  // Eventhandler til håndtering af billedopload
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Få adgang til den uploadede fil
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result); // Opdater statevariablen med stien til det uploadede billede
    };

    if (file) {
      reader.readAsDataURL(file); // Læs filen som en data-URL
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
