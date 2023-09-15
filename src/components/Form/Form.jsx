import { useState } from "react";
import validation from "../../validation";
import styles from "./Form.module.css"
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
    <div >
      <form>
        <label className={styles.datos} htmlFor="email"> Email</label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        ></input>
       {errors.email && <p>{errors.email}</p>}


        <label className={styles.datos} htmlFor="password"> Password</label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="text"
          name="password"
        />
        {
          errors.password && <p>{errors.password}</p>
        }
        
        <button className={styles.botonsito} type="submit" onClick={handleSubmit}>!!!Submit!!!</button>
      </form>
    </div>
  );
}
