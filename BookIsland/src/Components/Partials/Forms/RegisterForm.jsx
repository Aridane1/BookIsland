import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";

export const RegisterForm = () => {
  // Declaration for resize header/footer
  const [imageBlob, setImageBlob] = useState(null);
  const navigate = useNavigate();
  const usernameRef = useReducer();
  const emailRef = useReducer();
  const passwordRef = useReducer();
  const genreRef = useReducer();
  const descriptionRef = useReducer();

  const [profileImage, setProfileImage] = useState(null);

  // Event handler for handling image uploads
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Acceder al archivo cargado
    const reader = new FileReader();

    // Si hay un archivo, se debe leer como una URL de datos
    if (file) {
      // Crear un Blob del archivo
      const blob = new Blob([file], { type: file.type });
      setImageBlob(blob); // Almacenar el Blob en el estado

      // Cuando la lectura se completa, se actualizan las variables de estado con la ruta de la imagen cargada
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      // Comenzar a leer el archivo como una URL de datos
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let usernameValue = usernameRef.current.value;
    let emailValue = emailRef.current.value;
    let passwordValue = passwordRef.current.value;
    let genreValue = genreRef.current.value;
    let descriptionValue = descriptionRef.current.value;

    let user = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      genre: genreValue,
      description: descriptionValue,
    };

    if (!imageBlob) {
      const response = await AuthService.createUser(user);
      console.log(response);
      localStorage.setItem("token", response.data.access_token);
      navigate("/home");
    } else {
      const response = await AuthService.createUserWithImage(user, imageBlob);
      localStorage.setItem("token", response.data.access_token);
      navigate("/home");
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
        <form className="text-center mb-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username*"
            ref={usernameRef}
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />
          <input
            type="email"
            placeholder="email*"
            ref={emailRef}
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />
          <input
            type="password"
            placeholder="password*"
            ref={passwordRef}
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />
          <input
            type="password"
            placeholder="password*"
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />

          <input
            type="text"
            placeholder="favorite genre"
            ref={genreRef}
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />
          <input
            type="text"
            placeholder="description"
            ref={descriptionRef}
            className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
          />

          <div className="flex flex-col items-center">
            <button
              className="bg-primary w-28 h-10 rounded-lg mb-3 text-light font-bold items-center"
              id="inputField"
              type="submit"
            >
              Submit
            </button>
            <Link
              to="/login"
              className="block text-primary underline items-center"
            >
              cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
