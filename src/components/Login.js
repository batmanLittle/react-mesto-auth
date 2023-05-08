import React, { useState } from "react";

function Login({ loginUser }) {
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
    loginUser(form);
  }
  return (
    <div className="screen screen_login " onSubmit={handleSubmit}>
      <form className="screen-form screen-form_login">
        <h2 className="screen-form__title screen-form__title_login">Вход</h2>
        <input
          className="screen-form__input screen-form__input_email"
          type="email"
          name="email"
          placeholder={"Email"}
          required
          minLength="2"
          maxLength="40"
          onChange={handleChange}
          value={form.email}
        />

        <input
          className="screen-form__input screen-form__input_password"
          type="password"
          name="password"
          placeholder={"Пароль"}
          required
          minLength="3"
          maxLength="40"
          onChange={handleChange}
          value={form.password}
        />
        <button className="screen-form__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
export default Login;
