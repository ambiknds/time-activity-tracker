import React, { useState } from 'react';
import Login from '../components/Login';  // Check that the path is correct
import Register from '../components/Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Go to Register' : 'Go to Login'}
      </button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default AuthPage;
