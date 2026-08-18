import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };
  const handleLogOut = () => {
    setUsername("");
    setPassword("");
    setIsLoggedIn(false);
  };
  if (isLoggedIn) {
    return (
      <div>
        <h1>welcome,{username}!</h1>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <h1>Login</h1>
        <label htmlFor="username">
          username
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
            value={username}
          />
        </label>
        <br />

        <label htmlFor="password">
          password
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
        </label>

        <br />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
