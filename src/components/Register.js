import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="screen screen_register">
      <form className="screen-form screen-form_register">
        <h2 className="screen-form__title screen-form__title_register">
          Регистрация
        </h2>
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
