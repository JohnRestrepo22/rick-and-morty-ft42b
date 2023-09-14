import { useState } from "react";
import validation from "../../validation";
export default function Forms({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    login(userData)
  }
  return (
    <div>
      <form>
        <label htmlFor="email"> Email</label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        ></input>
        {errors.email1 ? (
          <p>{errors.email1}</p>
        ) : errors.email2 ? (
          <p>{errors.email2}</p>
        ) : (
          <p>{errors.email3}</p>
        )}
        <hr />

        <label htmlFor="password"> Password</label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="text"
          name="password"
        />
        {
            errors.password1 ? <p>{errors.password1}</p> : <p>{errors.p2}</p>
        }
        <hr />
        <button type="submit" onClick={handleSubmit}>!!!Submit!!!</button>
      </form>
    </div>
  );
}
