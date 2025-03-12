import React from "react";

const ForgetPass = ({ email, setEmail, errorMessage, onSubmit, onBack }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
      {errorMessage && (
        <div className="text-xs md:text-sm text-red-500 italic mb-4">
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col gap-3">
        <button
          onClick={onSubmit}
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 font-bold text-sm"
        >
          Gửi yêu cầu
        </button>
        <button
          onClick={onBack}
          type="button"
          className="w-full border border-blue-600 text-blue-600 p-2 rounded-md hover:bg-blue-100 transition duration-200 font-bold text-sm"
        >
          Quay lại
        </button>
      </div>
    </>
  );
};

export default ForgetPass;