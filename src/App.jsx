import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formSubmitStatus, setFormSubmitStatus] = useState({
    isSubmitted: false,
    submitResult: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    if (
      formData.get("username") === "user" &&
      formData.get("password") === "password"
    ) {
      setFormSubmitStatus({
        isSubmitted: true,
        submitResult: "Welcome, user!",
      });
    } else {
      setFormSubmitStatus({
        isSubmitted: false,
        submitResult: "Invalid username or password",
      });
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      {formSubmitStatus.isSubmitted === false &&
        formSubmitStatus.submitResult.length !== 0 && (
          <>
            <p>{formSubmitStatus.submitResult}</p>
          </>
        )}
      {!formSubmitStatus.isSubmitted === true ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                value={formData.username}
                name="username"
                id="username"
                placeholder="username"
                required
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <input
                type="password"
                value={formData.password}
                name="password"
                id="password"
                placeholder="password"
                required
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <p>{formSubmitStatus.submitResult}</p>
        </>
      )}
    </>
  );
}

export default App;
