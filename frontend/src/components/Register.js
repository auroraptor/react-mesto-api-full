import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Input from "./Input";
import InfoTooltip from "./InfoTooltip";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onRegister(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Header link="/signin" text="Войти" elem={<Login />} />
      <LoadingSpinner className={`spinner-container ${props.isLoading && `visible`}`} />

      <form
        className={`form_theme_white register-form`}
        name="register"
        onSubmit={handleSubmit}
      >
        <label className="heading__register">Регистрация</label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          minLength="false"
          maxLength="false"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="form__submit-button_theme_white" disabled= {props.isLoading}>
          Зарегистрироваться
        </button>
      </form>
      <div className="help-text">
        <span>Уже зарегистрированы? </span>
        <Link className="help-text__link" to="/signin">
          Войти
        </Link>
      </div>
      <InfoTooltip
        {...props}
        onClick={() => {
          props.closeInfoTooltip(false);
        }}
      />
    </>
  );
}

export default Register;
