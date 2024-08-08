import { Suspense } from 'react';
import { Landing } from './pages/Landing';
import { Login } from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import LayoutAccount from './pages/auth/Layout';
import CreateCompany from './pages/admin/CreateCompany';
import { Detail } from './pages/Detail';

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
          <Route path="company">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
