function Login() {
  return (
    <div className="screen screen_login">
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
        />

        <input
          className="screen-form__input screen-form__input_password"
          type="password"
          name="password"
          placeholder={"Пароль"}
          required
          minLength="3"
          maxLength="40"
        />
        <button className="screen-form__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
export default Login;
