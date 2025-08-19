import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import axios from "axios";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import { NewPage } from "./NewPage";

const data = async () => {
  try {
    const response = await axios.get(
      "mongodb+srv://veryeasy20:Patapon30@cluster0.wptxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Write a message
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("Registration successful:", data.message);
      message(data.message);
      setForm({ email: "", password: "" });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      console.log("🚀 Starting login with:", form);
      console.log("🔍 Auth state BEFORE login:", {
        token: auth.token,
        userId: auth.userId,
        isAuthenticated: auth.isAuthenticated,
      });
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      message(data.message);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div>
        <div className="col s6 offset-s3">
          <h1>Shorten URL</h1>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Authorization</span>
              <div className="input-field">
                <input
                  className="yellow-input"
                  value={form.email}
                  id="email"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  className="yellow-input"
                  value={form.password}
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: 10 }}
                onClick={loginHandler}
                disabled={loading}
              >
                Login
              </button>
              <button
                className="btn white darken-4 black-text"
                onClick={registerHandler}
                disabled={loading}
              >
                Registration
              </button>
            </div>
            {/* New page */}
            <div className="card-action">
              <button className="btn white darken-4 black-text">NewPage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
