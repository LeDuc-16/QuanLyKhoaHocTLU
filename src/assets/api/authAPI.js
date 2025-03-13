import axios from 'axios';

const API_URL = 'https://scigateapi.thanglele08.id.vn';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/Login`, {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi khi đăng nhập');
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/forgetpassword`, { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi khi gửi yêu cầu');
  }
};