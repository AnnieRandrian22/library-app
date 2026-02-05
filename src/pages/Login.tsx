import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * SIMULATION DE LA RÉPONSE SERVEUR
     */
    if (
      formData.email === "admin@test.com" &&
      formData.password === "admin123"
    ) {
      // FAKE TOKEN
      localStorage.setItem("token", "FAKE_ADMIN_TOKEN");
      localStorage.setItem("userRole", "admin");

      //navigate("/admin/dashboard");
      navigate("/adminLayout")
      return;
    }

    if (
      formData.email === "reader@test.com" &&
      formData.password === "reader123"
    ) {
      localStorage.setItem("token", "FAKE_READER_TOKEN");
      localStorage.setItem("userRole", "reader");

      //navigate("/reader/profile");
      navigate("/reader")
      return;
    }

    setError("Email ou mot de passe incorrect");
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login Fake
      </h2>

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded-lg">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            placeholder="admin@test.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg
                     font-semibold hover:bg-indigo-700 transition"
        >
          Se connecter
        </button>
      </form>

      {/* <p className="mt-4 text-sm text-gray-500 text-center">
        Admin : admin@test.com / admin123  
        <br />
        Reader : reader@test.com / reader123
      </p> */}
    </div>
  </div>
);

};

export default Login;

