import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/auth";
import { PrivateRoutes, PublicRoutes } from "./routes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [role,setRole]=useState("")
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        role,
        setRole,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Header />
          {isAuth ? (
            <div className="flex-container">
              <Sidebar />
              <PrivateRoutes />
            </div>
          ) : (
            <PublicRoutes />
          )}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
