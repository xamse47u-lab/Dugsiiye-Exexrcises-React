import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      console.error("Error fetching GitHub user:", error);
    }
  }, [error]);
  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${query.toLowerCase()}`,
      );

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Github User Search</h1>

      <input
        type="text"
        placeholder="enter your user"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "loading..." : "Search"}
      </button>

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View profile
          </a>
        </div>
      )}
    </>
  );
}

export default App;
