import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { email, password };
    const res = await axios.post("/api/user/login", formData);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      history.push("/blog");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      <Hero hero="loginHero">
        <Banner title="Sign In">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                name="email"
                placeholder="mmeekah@gmail.com"
                className="input"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password Here"
                className="input"
                onChange={e => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <button className="btn-primary" type="submit">
              login
            </button>
          </form>
        </Banner>
      </Hero>
    </>
  );
}
