import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // For now, use hardcoded admin credentials, integrate with backend later
    if (
      formData.email === "admin@example.com" &&
      formData.password === "admin123"
    ) {
      navigate("/admin"); // Redirect to admin dashboard after successful login
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      {error && <p className="admin-login-error">{error}</p>}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          className="admin-login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="admin-login-input"
          required
        />
        <button type="submit" className="admin-login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
