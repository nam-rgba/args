import { Suspense } from 'react';
import { Landing } from './pages/Landing';
// import { Login } from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import CreateCompany from './pages/admin/CreateCompany';
import { Detail } from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="createcompany" element={<CreateCompany />} />
          <Route path="company">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
