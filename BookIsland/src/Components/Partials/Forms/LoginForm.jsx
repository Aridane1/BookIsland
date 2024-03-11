import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="text-center mb-8">
        <input
          type="email"
          placeholder="email"
          className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
        />
        <input
          type="password"
          placeholder="password"
          className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-bold"
        />
        <button className="bg-primary w-28 h-10 rounded-lg mb-4 text-light uppercase font-bold">
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
