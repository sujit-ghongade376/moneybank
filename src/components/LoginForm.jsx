import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const mockUser = {
  userId: "testuser",
  password: "password123",
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const isValidUser =
      data.userId === mockUser.userId && data.password === mockUser.password;
    if (isValidUser) {
      setSnackbar({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      setTimeout(() => navigate("/dashboard"), 1200);
    } else {
      setSnackbar({
        open: true,
        message: "Invalid credentials",
        severity: "error",
      });
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh",
        //px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          mt: { xs: 14, sm: 16 },
          mb: { xs: 10, sm: 12 },
          p: { xs: 2, sm: 4 },
          width: "100%",
          maxWidth: 370,
          borderRadius: 2,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          sx={{ color: "#333", mb: 2 }}
        >
          Login to MoneyBank
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="User ID"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ background: "#fff" }}
            {...register("userId", { required: "User ID is required" })}
            error={!!errors.userId}
            helperText={errors.userId?.message}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ background: "#fff" }}
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#ff6f00",
              color: "#fff",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#e65100",
              },
              borderRadius: 2,
              py: 1.2,
              fontSize: 16,
            }}
          >
            Login
          </Button>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
              Forgot User ID?
            </Link>
            <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
              Forgot Password?
            </Link>
          </Box>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ mt: "64px" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default LoginForm;
