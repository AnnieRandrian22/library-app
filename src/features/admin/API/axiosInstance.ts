import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor pour ajouter le token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    if (token && config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor pour gérer les réponses
axiosInstance.interceptors.response.use(
  (response) => response, // laisse passer les réponses OK
  (error) => {
    if (error.response?.status === 401) {
      // si 401, supprime le token et redirige
      localStorage.removeItem("token");
      window.location.href = "/"; // redirige vers la page login
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
