import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("No users found. Please register first.");
      return;
    }

    // ✅ Try to find a matching user
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      alert("Login successful!");
      // You can redirect to dashboard or set auth state here
      navigate("/dashboard"); // Change this to your desired route
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Box component={Paper} elevation={3} p={4} maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h5" mb={3}>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" mt={2}>
          Don't have an account?{" "}
          <Link href="/register" underline="hover">
            Register here
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;
