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
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { Box } from "@mui/system";

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
        const signUpMethods = await fetchSignInMethodsForEmail(
          auth,
          formData.email
        );
        if (signUpMethods.length > 0) {
          return;
        }
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        toast.success("Account created successfully");
        navigate("/")
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
        payload2: formData.fullName,
      });
    } catch (err) {
      toast.error("Email already exists.");
    }
  };

  return (
    <Box
      sx={{
        padding: "0",
        margin: "0",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/fuji-mountain-with-milky-way-night.jpg')",
        backgroundSize: "cover", // Ensures the image covers the entire background
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: "12px",

            backgroundColor: "rgba(255, 255, 255, 0.8)", //glassmorphism efffect
            backdropFilter: "blur(-30px)",
            boxShadow: "0px 4px 20px rgba(255,255,255,0.2)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {tab === 0 ? "LOGIN" : "SIGN UP"}
          </Typography>
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            centered
            sx={{ mb: 2 }}
          >
            <Tab label="LOGIN" sx={{ fontWeight: "bold", color: "#fff" }} />
            <Tab label="SIGN UP" sx={{ fontWeight: "bold", color: "#fff" }} />
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
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.8)",
                    },
                  },
                }}
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
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  },
                },
              }}
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
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  },
                },
              }}
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
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.8)",
                    },
                  },
                }}
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
    </Box>
  );
}

export default AuthPage;
