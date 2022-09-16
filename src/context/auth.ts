import { createContext } from "react";

type GlobalContent = {
  isAuth?: boolean;
  setIsAuth: (value: boolean) => void;
  role: string;
  setRole: (value: string) => void;
};

export const AuthContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  role: "",
  setRole: ()=>{},
});
