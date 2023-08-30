import { useState } from "react";
// import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  //   const { token, setToken } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch({
        method: "POST",
        body: json.stringify({ username, password }),
      });
      // login tokens
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h1>Welcome Back!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username or Email: <br />
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password: <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br/>
        </label>
        <br />
        <Link to="/AllPosts" type="Button">
          <button type="button">Login</button>
        </Link>
      </form>
    </>
  );
}
