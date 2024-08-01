import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import axios from 'axios';
import { FormEvent, useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Login function
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: 'http://localhost:3003',
    withCredentials: true,
  });
  const login = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const response = await api
        .post('/auth/login', {
          email,
          password,
        })
        .then((res) => res.data)
        .finally(() => navigate('/'));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[40%] h-full items-center pt-10">
      <div className="h-[16%] object-cover bg-center bg-cover my-6">
        <Link to="/">
          <img src={logo} alt="" className="h-full" />
        </Link>
      </div>

      <div className="flex flex-row items-center w-full mt-4 pl-8">
        <form action="" onSubmit={(e) => login(e)}>
          <p className="text-xl font-semibold mb-4">
            Welcom to <br />{' '}
            <span className="text-blue_1 text-4xl">InSource</span>
          </p>
          <p className="text-sm mb-8">
            *Welcome back, please sign in to continue
          </p>
          <input
            className="w-full p-2 border-b border-b-bg_1 focus:outline-none 
            focus:border-b-2 focus:border-b-blue_1 text-sm mb-4 text-gray_text transition-colors ease-in duration-[100ms]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full p-2 border-b border-b-bg_1 focus:outline-none 
            focus:border-b-2 focus:border-b-blue_1 text-sm mb-4 text-gray_text transition-colors ease-in duration-[100ms]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="mt-4 flex flex-row justify-start items-center">
            <button className="bg-blue_1 text-white px-4 py-2">Sign in</button>
          </div>

          <p className="text-left text-xs mt-4">
            If your have not had a account yet,{' '}
            <Link to="/auth/register" className="text-green_1 underline">
              Register here
            </Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};
