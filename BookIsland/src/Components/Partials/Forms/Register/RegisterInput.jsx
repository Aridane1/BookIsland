import { Link } from "react-router-dom";

export const RegisterInput = () => {
  return (
    <form className="text-center mb-8">
      <input
        type="text"
        placeholder="username*"
        id="inputField"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <input
        type="email"
        placeholder="email*"
        id="inputField"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <input
        type="password"
        placeholder="password*"
        id="inputField"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <input
        type="password"
        placeholder="password again*"
        id="inputField"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <input
        type="text"
        placeholder="favorite genre"
        id="inputField"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <input
        type="textarea"
        placeholder="description"
        id="inputField"
        className="block mb-4 w-72 h-20 bg-secondary placeholder:text-dark pl-2 font-semibold"
      />
      <button
        className="bg-primary w-28 h-10 rounded-lg mb-3  text-light font-bold"
        id="inputField"
      >
        Submit
      </button>
      <Link to="/login" className="block text-primary underline">
        cancel
      </Link>
    </form>
  );
};
