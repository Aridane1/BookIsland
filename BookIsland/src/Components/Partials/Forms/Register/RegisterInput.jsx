import { useState } from 'react';
import { Link } from "react-router-dom";

export const RegisterInput = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    genre: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="text-center mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username*"
        id="inputField"
        name="username"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email*"
        id="inputField"
        name="email"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password*"
        id="inputField"
        name="password"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password again*"
        id="inputField"
        name="confirmPassword"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="favorite genre"
        id="inputField"
        name="genre"
        className="block mb-4 w-72 h-10 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <input
        type="textarea"
        placeholder="description"
        id="inputField"
        name="description"
        className="block mb-4 w-72 h-20 bg-secondary placeholder:text-dark pl-2 font-semibold"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-primary w-28 h-10 rounded-lg mb-3  text-light font-bold"
      >
        Submit
      </button>
      <Link to="/login" className="block text-primary underline">
        cancel
      </Link>
    </form>
  );
};
