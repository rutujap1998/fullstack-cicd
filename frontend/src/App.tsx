import React, { useEffect, useState } from 'react';
import './App.css';

interface ApiResponse {
  message: string;
  environment: string;
}

function App() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/test`);
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fullstack Application</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {apiData && (
          <div>
            <p>Message: {apiData.message}</p>
            <p>Environment: {apiData.environment}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App; 