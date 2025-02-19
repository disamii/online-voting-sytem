import React from 'react';
import Login from './Login.js';
import Singup from './Signup.js';

const AuthLayout: React.FC = () => {
  return (
    <div className="bg-[url('src/assets/pattern-bg.svg')]  h-screen flex items-center justify-center relative p-0 m-0">
      <div className='w-[50rem] h-[33rem] bg-[var(--Very--light--grayish--cyan)] rounded-sm flex overflow-hidden gap-2'>
      <Login/>
      <Singup/>
      </div>
    </div>
  );
};

export default AuthLayout;
