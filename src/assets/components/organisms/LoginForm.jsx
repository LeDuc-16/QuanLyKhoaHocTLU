import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../molecules/LoginHeader';
import LoginFormInputs from '../molecules/LoginFormInput.jsx';
import ForgetPasswordForm from '../molecules/ForgetPasswordForm.jsx';
import Button from '../atoms/Button.jsx';
import { login, forgotPassword } from '../../api/authApi';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  // Kiểm tra email hợp lệ
  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Xử lý đăng nhập
  const handleLogin = async () => {
    if (!email) {
      setErrorMessage('Vui lòng nhập email!');
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage('Email không hợp lệ!');
      return;
    }
    if (!pass) {
      setErrorMessage('Vui lòng nhập mật khẩu!');
      return;
    }
    if (pass.length < 8) {
      setErrorMessage('Mật khẩu phải có ít nhất 8 ký tự!');
      return;
    }

    try {
      await login({ email, password: pass });
      setErrorMessage('');
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message || 'Đăng nhập thất bại!');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      isForgotPassword ? handleForgotPassword() : handleLogin();
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrorMessage('Vui lòng nhập email!');
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage('Email không hợp lệ!');
      return;
    }
    try {
      await forgotPassword(email);
      setErrorMessage('');
      alert(`Yêu cầu đặt lại mật khẩu đã được gửi tới: ${email}`);
      setIsForgotPassword(false);
    } catch (error) {
      setErrorMessage(error.message || 'Yêu cầu thất bại!');
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl md:w-2/3 w-2/3 text-sm">
      <LoginHeader />
      <form onSubmit={(e) => e.preventDefault()}>
        {!isForgotPassword ? (
          <>
            <LoginFormInputs
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              errorMessage={errorMessage}
              onForgotPassword={() => {
                setErrorMessage(''); 
                setIsForgotPassword(true);
              }}
              onKeyDown={handleKeyDown}
            />
            <Button onClick={handleLogin} className="bg-blue-600 text-white hover:bg-blue-700">
              Đăng nhập
            </Button>
          </>
        ) : (
          <ForgetPasswordForm
            email={email}
            setEmail={setEmail}
            errorMessage={errorMessage}
            onSubmit={handleForgotPassword}
            onBack={() => {
              setErrorMessage(''); // Xóa lỗi khi quay lại đăng nhập
              setIsForgotPassword(false);
            }}
            onKeyDown={handleKeyDown}
          />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
