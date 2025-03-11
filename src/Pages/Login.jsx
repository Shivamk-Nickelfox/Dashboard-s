import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { auth } from "../Components/Firebase";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function AuthPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (tab === 1 && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      if (tab === 1) {
        // Signup logic
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        toast.success("Account created successfully");
        console.log("User signed up:", formData.email);
      } else {
        // Login logic
        try {
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          toast.success("Login Successfully");
          navigate("/");
          console.log("User logged in:", formData.email);
        } catch (error) {
          toast.error("wrong credentials");
        }
      }
      dispatch({
        type: "login",
        payload: formData.email,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 5,
          textAlign: "center",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          {tab === 0 ? "Login" : "Sign Up"}
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
          sx={{ mb: 2 }}
        >
          <Tab label="Login" sx={{ fontWeight: "bold" }} />
          <Tab label="Sign Up" sx={{ fontWeight: "bold" }} />
        </Tabs>

        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
          {tab === 1 && (
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          )}
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: "6px" }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: "6px" }}
          />
          {tab === 1 && (
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              margin="normal"
              variant="outlined"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              sx={{ backgroundColor: "white", borderRadius: "6px" }}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              p: 1.5,
              borderRadius: "8px",
              backgroundColor: "#1976d2",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            {tab === 0 ? "Login" : "Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AuthPage;
