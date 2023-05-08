import { Link } from "react-router-dom";
import React, { useState } from "react";

function Register({ registerUser }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const input = e.target;

    setForm({
      ...form,
      [input.name]: input.value,
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    registerUser(form);
  }
  return (
    <div className="screen screen_register" onSubmit={handleSubmit}>
      <form className="screen-form screen-form_register">
        <h2 className="screen-form__title screen-form__title_register">
          Регистрация
        </h2>
        <input
          id="email"
          className="screen-form__input screen-form__input_email"
          type="email"
          name="email"
          placeholder={"Email"}
          value={form.email}
          required
          minLength="2"
          maxLength="40"
          onChange={handleChange}
        />

        <input
          id="password"
          className="screen-form__input screen-form__input_password"
          type="password"
          name="password"
          placeholder={"Пароль"}
          required
          minLength="3"
          maxLength="40"
          value={form.password}
          onChange={handleChange}
        />
        <button className="screen-form__button" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="screen-form__link" type="button">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}
export default Register;
