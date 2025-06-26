// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [web_id, setWebId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://octopus-app-qevgj.ondigitalocean.app/api/login/", {
        web_id,
        password,
      });

      // ✅ Save login data to localStorage
      const userData = res.data;
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={web_id}
          onChange={(e) => setWebId(e.target.value)}
          placeholder="Web ID"
          className="w-full border p-2 mb-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
