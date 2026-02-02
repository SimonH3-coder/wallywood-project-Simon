import { createContext, type SetStateAction } from "react";
import type { UserData } from "../types/Usertype";

// TS - inteface til typer
interface AuthContextProps {
  userData: UserData | null;
  setUserData: React.Dispatch<SetStateAction<UserData | null>>;
  logout: () => void;
}

// Lav en context og kald den AuthContext
export const AuthContext = createContext<AuthContextProps>(undefined!);
