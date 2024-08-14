import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

interface ProtectedRoutesProps {
  redirectTo: string;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ redirectTo }) => {
  const token = ''; 
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

const NotProtectedRoutes: React.FC = () => {
  const token = ''; 
  return token ? <Navigate to="/main" /> : <Outlet />;
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