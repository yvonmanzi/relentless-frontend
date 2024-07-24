import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const register = async (username, email, password) => {
  try {
    return await axios.post(`${API_URL} register/`, {
      username,
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login/`, {
      username,
      password,
    });
    if (response.data.access) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
