import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BankLogo = () => (
  <Box
    component="span"
    sx={{
      display: "flex",
      alignItems: "center",
      mr: 1.5,
    }}
  >
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <circle cx="24" cy="24" r="24" fill="#fff3e0" />
      <rect x="12" y="20" width="24" height="14" rx="2" fill="#ff6f00" />
      <rect x="18" y="26" width="4" height="8" rx="1" fill="#fff" />
      <rect x="26" y="26" width="4" height="8" rx="1" fill="#fff" />
      <polygon points="24,10 10,20 38,20" fill="#ff6f00" />
    </svg>
  </Box>
);

const Header = () => (
  <AppBar
    position="fixed"
    sx={{
      background:
        "linear-gradient(90deg, #ff9100 0%, #ff6f00 60%, #d84315 100%)",
      boxShadow: "none",
      minHeight: 64,
      justifyContent: "center",
    }}
  >
    <Toolbar>
      <BankLogo />
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: 1,
          color: "#fff",
        }}
      >
        MoneyBank
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
