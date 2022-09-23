import { Routes, Route } from "react-router-dom";
import Leads from "../pages/Leads/Leads";
import Page2 from "../pages/page2/Page2";
import Page3 from "../pages/page3/Page3";
import Page1 from "../pages/Gradustes/Graduates";
import SignIn from "../pages/SignIn/SignIn";
import Graduates from "../pages/Gradustes/Graduates";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/leads" element={<Leads />} />
      <Route path="/graduates" element={<Graduates/>} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="*" element={<Leads />} />
    </Routes>
  );
};

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
};
