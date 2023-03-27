import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/slices/auth.slice";
import Swal from "sweetalert2";
import { music } from "../assets/images";

//se crea dos funciones: handleChange para llenar los campos requeridos en el estado data y handleSubmit nos permite enviar la información 
//ingresada a nuestro estado global por medio de las acciones 

function Register() {
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
      dispatch(register(data));
      navigate("/login");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "User already exists",
        icon: "error",
        confirmButtonText: "Got it",
      });
    }
    setData({});
  }

  return (
    <div className="flex justify-center items-center h-full bg-slate-100 p-5">
      <div className="bg-slate-50 shadow-lg rounded-xl m-auto w-[80%] h-auto absolute md:flex md:max-h-[90%] md:w-[70%]">
        <img className="w-36 h-36 rounded-full m-auto relative top-0 translate-y-[-10%] md:rounded md:w-[50%] md:h-auto md:m-0 md:translate-y-0" src={music} alt="" /> 
        <form className="flex flex-col justify-center items-center md:w-[50%] max-h-[90%] overflow-auto" onSubmit={handleSubmit}>
        <h1 className="text-4xl mb-5 font-extrabold text-fuchsia-600 p-5 text-center space-y-4">
          Create a new Account
        </h1>
          <div className="input-group">
            <label htmlFor="">Identification Number</label>
            <input
              type="text"
              name="identificationNumber"
              value={data.identificationNumber || ""}
              onChange={({ target }) => handledChange(target)}
              pattern="[A-Za-z0-9]{4,15}"
              title="Must be between 4 and 15 characters"
              className="w-60 md:w-80"
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
              className="w-60 md:w-80"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={data.name || ""}
              onChange={({ target }) => handledChange(target)}
              pattern="[^0-9]{4,50}"
              title="Must be between 4 and 50 characters"
              className="w-60 md:w-80"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={data.email || ""}
              onChange={({ target }) => handledChange(target)}
              className="w-60 md:w-80"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={data.address || ""}
              onChange={({ target }) => handledChange(target)}
              pattern="[^]{4,300}"
              title="Must be between 4 and 300 characters"
              className="w-60 md:w-80"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              value={data.city || ""}
              onChange={({ target }) => handledChange(target)}
              pattern="[^0-9]{4,20}"
              title="Must be between 4 and 20 characters"
              className="w-60 md:w-80"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={data.phoneNumber || ""}
              onChange={({ target }) => handledChange(target)}
              pattern="[0-9]{4,20}"
              title="Must be between 4 and 20 characters"
              className="w-60 md:w-80"
            />
          </div>
          <input className="btn-sgn" type="submit" value="Register" />
          <p className="text-left py-5 text-slate-400">
          Do you have an account?{" "}
        </p>
        <Link
          className="text-lg font-bold pb-3 ml-52 hover:underline hover:text-orange-600 duration-300"
          to="/login"
        >
          Login
        </Link>
        </form>
        
      </div>
    </div>
  );
}

export default Register;
