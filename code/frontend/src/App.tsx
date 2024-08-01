import { Suspense } from 'react';
import { Landing } from './pages/Landing';
import { Login } from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import LayoutAccount from './pages/auth/Layout';
import CreateCompany from './pages/admin/CreateCompany';

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="auth" element={<LayoutAccount />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="createcompany" element={<CreateCompany />} />
        </Routes>
      </Suspense>
    </>
  );
};
