import React, { useRef, useState } from "react";
import "../../App.css";
import { Button } from "../../components/Button/Button";
import useFetch from "../../hooks/useFetch";
import "./SignUpPage.scss";

export default function SignUpPage() {
  const userData = {
    email: "",
    password: "",
  };
  const formHasError = useRef(false);
  const [user, setUser] = useState(userData);
  const [formError, setFromError] = useState({});
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const { data, error } = useFetch("http://localhost:9000/users");

  const validate = (user) => {
    const errorMsg = {};
    formHasError.current = true;
    if (!user.email) {
      errorMsg.email = "Please enter an email";
      formHasError.current = false;
    }
    if (!user.password) {
      errorMsg.password = "PLease enter a password";
      formHasError.current = false;
    }
    return errorMsg;
  };

  const logInCheck = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === user.email) {
        if (data[i].password === user.password) return true;
      }
    }
    return false;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleSubmit = () => {
    const errors = validate(user);
    const login = logInCheck();
    if (formHasError.current) {
      if (login) {
        window.location.replace("/home");
      } else {
        setIncorrectPassword(true);
      }
    }

    setFromError(errors);
  };

  const showPassword = (e) => {
    let password = document.getElementById("passwordValue");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const handleSignUp = () => {
    const errors = validate(user);
    if (user.email === "" || user.password === "") {
      return setFromError(errors);
    }
    fetch("http://localhost:9000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log(user);
    });
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <div className="sign-up__logo">
          TRLV <i className="fab fa-typo3"></i>
        </div>

        <h2 className="sign-up__title">LogIn to your account</h2>

        <label className="sign-up__labels" htmlFor="email">
          Email
        </label>
        {formError.email && (
          <p className="sign-up__empty-inputs">Please enter an Email</p>
        )}
        <input
          className="sign-up__inputs"
          onChange={(e) => handleInputChange(e)}
          name="email"
          type="text"
        />
        <label className="sign-up__labels" htmlFor="password">
          Password
        </label>
        {formError.password && (
          <p className="sign-up__empty-inputs">Please enter a Password</p>
        )}
        <input
          className="sign-up__inputs"
          onChange={(e) => handleInputChange(e)}
          type="password"
          name="password"
          id="passwordValue"
        />
        <div className="sign-up__password-container">
          <input
            className="sign-up__show-password-btn"
            type="checkbox"
            name="show-password"
            onClick={(e) => showPassword(e)}
          />
          <label className="sign-up__show-password" htmlFor="show-password">
            Show Password
          </label>
        </div>
        {!!incorrectPassword && (
          <div className="password">
            Your username or password are incorrect
          </div>
        )}
        <div className="btn-container">
          <button
            className="sign-up__login-btn btn--large btn--outline"
            onClick={handleSubmit}
          >
            LogIn
          </button>
          <button
            onClick={handleSignUp}
            className="sign-up__login-btn btn--large btn--outline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
