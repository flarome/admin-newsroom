import { createContext, useContext, type ReactNode } from "react";
import { Browser} from "@shopify/browser";


// Création du contexte React avec une instance par défaut vide
export const UserAgentContext = createContext<Browser>(
  new Browser({ userAgent: "" })
);


interface UserAgentProviderProps {
  userAgent: string;
  supported?: boolean;
  children: ReactNode;
}

export function UserAgentProvider({
  userAgent,
  supported,
  children,
}: UserAgentProviderProps) {
  const value = new Browser({ userAgent, supported: supported });

  return (
    <UserAgentContext.Provider value={value}>
      {children}
    </UserAgentContext.Provider>
  );
}



export function useUserAgent() {
  return useContext(UserAgentContext);
}