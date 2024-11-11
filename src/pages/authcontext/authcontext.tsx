import { createContext, useState, useEffect, FC, ReactNode } from 'react';

interface AuthContextProps {
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
  favoriteCount: number;
}

export const AuthContext = createContext<AuthContextProps>({
  isLogin: false,
  login: () => {},
  logout: () => {},
  favoriteCount: 0,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    setFavoriteCount(favorites ? JSON.parse(favorites).length : 0);
  }, []);

  const login = (token: string) => {
    setIsLogin(true);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, favoriteCount }}>
      {children}
    </AuthContext.Provider>
  );
};
