import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    // ✅ Check for @gmail.com domain
    if (!formData.email.endsWith("@gmail.com")) {
      alert("Only @gmail.com emails are allowed");
      return;
    }

    // ✅ Check password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check if user with same email already exists
    const userExists = existingUsers.some(
      (user) => user.email === formData.email
    );
    if (userExists) {
      alert("A user with this email already exists!");
      return;
    }

    // ✅ Add new user to array
    const newUser = {
      email: formData.email,
      password: formData.password,
    };
    existingUsers.push(newUser);

    // ✅ Save updated users list back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful! Redirecting to login...");
    navigate("/");
  };

  return (
    <Box component={Paper} elevation={3} p={4} maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h5" mb={3}>
        Register
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

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
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
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
