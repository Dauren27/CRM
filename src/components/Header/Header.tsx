import React, { useContext } from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const Header: React.FC = () => {
  const { isAuth, setIsAuth, role, setRole } = useContext(AuthContext);
  return (
    <div className={cl.header}>
      <h1 className={cl.header__logo}>CRM</h1>
      <div className={cl.header__buttons}>
        {isAuth && <div className={cl.header__role}>{role}</div>}
        {isAuth ? (
          <Link to="/signin">
            <div className={cl.header__login} onClick={() => setIsAuth(false)}>
              Выйти
            </div>
          </Link>
        ) : (
          <Link to="/signin">
            <div className={cl.header__login}>Войти</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
