import React, { useState } from "react";
import cl from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={`${cl.sidebar} ${!sidebar && cl.close}`}>
      {sidebar ? (
        <AiOutlineClose onClick={() => setSidebar(false)} />
      ) : (
        <GiHamburgerMenu onClick={()=>setSidebar(true)}/>
      )}
      {sidebar && (
        <div className={cl.sidebar__content}>
          <div className={cl.sidebar__category}>
            <h1 className={cl.sidebar__title}>Продажи</h1>
            <div className={cl.sidebar__items}>
              <Link to="/leads">
                <button>Лиды</button>
              </Link>
              <Link to="/page2">
                <button>Page2</button>
              </Link>
              <Link to="/page3">
                <button>Page3</button>
              </Link>
            </div>
          </div>
          <div className={cl.sidebar__category}>
            <h1 className={cl.sidebar__title}>Студенты</h1>
            <div className={cl.sidebar__items}>
              <Link to="/graduates">
                <button>Выпускники</button>
              </Link>
              <Link to="/page2">
                <button>Page2</button>
              </Link>
              <Link to="/page3">
                <button>Page3</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
