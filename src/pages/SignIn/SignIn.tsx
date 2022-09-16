import React, { useState, useContext } from "react";
import cl from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { isAuth, setIsAuth, role, setRole } = useContext(AuthContext);
  const checkLogin = () => {
    if (login == "Admin") {
      setIsAuth(true);
      navigate("/leads");
      setRole("Админ");
    } else if (login == "Manager") {
      setIsAuth(true);
      navigate("/leads");
      setRole("Менеджер");
    } else {
      setError(true);
    }
  };
  return (
    <div className={cl.login}>
      <div className={cl.login__form}>
        <h1>Войти</h1>
        <input
          type="text"
          placeholder="Введите логин"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <p>Неверный логин или пароль</p>: <p>Логин: Admin или Manager<br/>Пароля нет</p>}
        <button onClick={() => checkLogin()}>Войти</button>
      </div>
    </div>
  );
};

export default SignIn;
