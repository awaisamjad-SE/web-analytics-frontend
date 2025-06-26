import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}
