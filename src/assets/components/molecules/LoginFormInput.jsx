import React from 'react';
import InputField from '../atoms/InputFiled';
import Link from '../atoms/Link';

const LoginFormInputs = ({ email, setEmail, pass, setPass, errorMessage, onForgotPassword, onKeyDown}) => {
  return (
    <>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email"
        id="login-email"
        onKeyDown={onKeyDown}
      />
      <InputField
        label="Mật Khẩu"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Nhập mật khẩu"
        id="login-password"
        onKeyDown={onKeyDown}
      />
      <div className="flex justify-between items-center mb-6">
        {errorMessage && <div className="text-xs md:text-sm text-red-500 italic">{errorMessage}</div>}
        <Link onClick={onForgotPassword}>Quên mật khẩu?</Link>
      </div>
    </>
  );
};

export default LoginFormInputs;