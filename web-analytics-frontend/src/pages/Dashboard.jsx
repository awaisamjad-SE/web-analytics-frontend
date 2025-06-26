// Dashboard.jsx
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUserData(parsed);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!userData) return <p className="text-center p-4">Loading dashboard...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome {userData.name}</h2>
      <p><strong>Web ID:</strong> {userData.web_id}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Domain:</strong> {userData.domain}</p>
      {/* Add graphs and stats below */}
    </div>
  );
}
