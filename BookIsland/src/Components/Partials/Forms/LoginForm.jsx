import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../../../services/AuthService";

export const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await AuthService.login(user).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.access_token);
      navigate("/home");
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="text-center mb-8" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          ref={emailRef}
          className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        />
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        />
        <button
          type="submit"
          className="bg-primary w-28 h-10 rounded-lg mb-4 text-light uppercase font-bold"
        >
          Sign in
        </button>
      </form>
      <p className="block text-dark mb-4 uppercase font-bold">
        not a member yet?
      </p>
      <Link to="/register" className="block text-primary font-bold underline">
        register here
      </Link>
    </div>
  );
};
