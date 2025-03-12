import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgetPass from "./ForgetPass"; 

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); 
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  function handleSubmit() {
    if (!email) {
      setErrorMessage("Vui lòng nhập email!");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Email không hợp lệ!");
      return;
    }
    if (!pass) {
      setErrorMessage("Vui lòng nhập mật khẩu!");
      return;
    }
    if (pass.length < 6) {
      setErrorMessage("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }

    setErrorMessage("");
    navigate("/dashboard");
  }

  function handleForgotPasswordSubmit() {
    if (!email) {
      setErrorMessage("Vui lòng nhập email!");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Email không hợp lệ!");
      return;
    }
    setErrorMessage("");
    alert(`Yêu cầu đặt lại mật khẩu đã được gửi tới: ${email}`);
    setIsForgotPassword(false); // Quay lại form đăng nhập sau khi gửi
  }

  return (
    <div className="bg-white p-5 rounded-xl md:w-2/3 w-2/3 text-sm">
      <h3 className="text-2xl font-bold">
        {isForgotPassword ? "QUÊN MẬT KHẨU" : "ĐĂNG NHẬP"}
      </h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {!isForgotPassword ? (
          <>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Nhập email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mật Khẩu
              </label>
              <input
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              {errorMessage && (
                <div className="text-xs md:text-sm text-red-500 italic">
                  {errorMessage}
                </div>
              )}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsForgotPassword(true); // Chuyển sang ForgetPass
                }}
                className="text-xs md:text-sm text-blue-600 hover:underline ml-auto"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 font-bold text-sm"
            >
              Đăng nhập
            </button>
          </>
        ) : (
          <ForgetPass
            email={email}
            setEmail={setEmail}
            errorMessage={errorMessage}
            onSubmit={handleForgotPasswordSubmit}
            onBack={() => setIsForgotPassword(false)}
          />
        )}
      </form>
    </div>
  );
};

export default FormLogin;