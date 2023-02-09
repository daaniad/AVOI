import { useState, useEffect } from "react";

export default function Fetch(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url, { ...options });
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return { response, error };
}
