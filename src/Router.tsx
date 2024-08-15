import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import localforage from 'localforage';

interface ProtectedRoutesProps {
  redirectTo: string;
}

const verifiedToken = async () => {
  const token = await localforage.getItem<string>('@jusCashToken');
  return token;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ redirectTo }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const fetchedToken = await verifiedToken();
        setToken(fetchedToken as string | null);
      } catch (error) {
        setToken(null);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

const NotProtectedRoutes: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const fetchedToken = await verifiedToken();
        setToken(fetchedToken as string | null);
      } catch (error) {
        setToken(null);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return token ? <Navigate to="/home" /> : <Outlet />;
};

export default function MyRoutes() {
  return (
    <Routes>
      <Route element={<NotProtectedRoutes />} >
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
      <Route element={<ProtectedRoutes redirectTo='/' />} >
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}
