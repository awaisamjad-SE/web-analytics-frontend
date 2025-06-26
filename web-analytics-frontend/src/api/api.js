// src/api/api.js
export async function loginUser(web_id, password) {
  const res = await fetch("https://octopus-app-qevgj.ondigitalocean.app/api/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ web_id, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Login failed");
  return data;
}
