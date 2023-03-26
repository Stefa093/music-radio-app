import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../store/action/authAction";

function Register() {

    const [data, setData] = useState({})
    const dispatch = useDispatch()

    function handledChange({ name, value }) {
        setData({
            ...data, [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        try {
          dispatch(register(data))
        } catch (error) {
          console.log(error);
          window.alert("User already exists")
        }
        setData({})       
    }

  return (
    <div className="register flex flex-col w-80 m-auto justify-center shadow-xl rounded-lg my-20 py-5 px-8">
      <h1 className="text-4xl text-center mb-5 font-extrabold text-fuchsia-600">Create a new Account</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Identification Number</label>
          <input
            type="text"
            name="identificationNumber"
            value={data.identificationNumber || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="[A-Za-z0-9]{4,15}"
            title="Must be between 4 and 15 characters"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={data.password || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="{4,20}"
            title="Must be between 4 and 20 characters"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={data.name || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="[^0-9]{4,50}"
            title="Must be between 4 and 50 characters"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={data.email || "" }
            onChange={({ target }) => handledChange(target)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            value={data.address || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="{4,300}"
            title="Must be between 4 and 300 characters"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="">City</label>
          <input
            type="text"
            name="city"
            value={data.city || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="[^0-9]{4,20}"
            title="Must be between 4 and 20 characters"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={data.phoneNumber || "" }
            onChange={({ target }) => handledChange(target)}
            pattern="[0-9]{4,20}"
            title="Must be between 4 and 20 characters"
          />
        </div>
        <input className="btn-sgn" type="submit" value='Register' />
      </form>
      <p className="text-left py-5 text-slate-400">Do you have an account? </p>
      <Link className="text-lg font-bold text-end hover:underline hover:text-orange-600 duration-300" to='/login'>
        Login
      </Link>
    </div>
  );
}

export default Register;
