import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const web_id = localStorage.getItem("web_id");

  useEffect(() => {
    fetch(`https://octopus-app-qevgj.ondigitalocean.app/api/dashboard-data/?web_id=${web_id}`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error loading dashboard:", err));
  }, [web_id]);

  if (!web_id) return <p>Please log in</p>;
  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard for {web_id}</h2>
      <p>Total Visits: {data.total_visits}</p>
      <p>Average Time on Page: {data.avg_time}s</p>
      <p>Top Page: {data.top_page}</p>
      {/* Add more stats later */}
    </div>
  );
}
