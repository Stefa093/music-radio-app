import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth.slice";
import Swal from 'sweetalert2'
import { bg } from "../assets/images";

function Login() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handledChange({ name, value }) {
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      dispatch(login(data));
      navigate("/")
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Email or Password are incorrect',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    
  }

  return (
    <div className="flex justify-center items-center h-full">
    <div className="login flex flex-col w-80 m-auto justify-center shadow-xl rounded-lg py-5 px-8 relative">
      <img className="rounded-full w-44 h-44 object-cover self-center mb-5 absolute top-0 translate-y-[-50%]" src={bg} alt="music_login" />
      <h1 className="text-5xl text-center mb-2 font-extrabold text-orange-400 pt-[5rem]">Welcome Back!</h1>
      <p className="py-5">Please enter to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={data.email || ""}
            onChange={({ target }) => handledChange(target)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={data.password || ""}
            onChange={({ target }) => handledChange(target)}
            pattern="[^]{4,20}"
            title="Must be between 4 and 20 characters"
            required
          />
        </div>
        <input className="btn-lgn" type="submit" value="Login" />
      </form>
      <p className="text-slate-400">Don't you have an account?</p>
      <Link className="text-end font-bold text-lg hover:underline hover:text-fuchsia-600 duration-300" to="/register">Sign Up</Link>
      </div>
      
    </div>
  );
}

export default Login;
