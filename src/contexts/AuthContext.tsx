import { createContext, useContext, useState } from 'react';
import { AuthService, SignInParams } from '../services/auth';

type AuthContextType = {
  user: any;
  signin: (credentials: SignInParams, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};

export const AuthContext = createContext<AuthContextType>(
  undefined as unknown as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<any>(null);

  let signin = ({ email, password }: SignInParams, callback: VoidFunction) => {
    setUser(
      AuthService.signin({
        email,
        password,
      })
    );
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const values = useContext(AuthContext);
  if (!values) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return values;
};
