export default function fetchData({
  url,
  method = "GET",
  host = import.meta.env.VITE_API_HOST,
}) {
  return fetch(`${host}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const jsonResponse = await res.json();
    if (res.ok) return jsonResponse;
    throw new Error(JSON.stringify(jsonResponse));
  });
}
