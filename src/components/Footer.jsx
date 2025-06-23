import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: "100vw", // Full viewport width
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      py: { xs: 2, sm: 2.5 },
      background:
        "linear-gradient(90deg, #ff9100 0%, #ff6f00 60%, #d84315 100%)",
      color: "#fff",
      textAlign: "center",
      fontSize: { xs: 13, sm: 15 },
      fontWeight: 500,
      letterSpacing: 0.2,
      boxShadow: "0 -2px 8px rgba(0,0,0,0.04)",
    }}
  >
    <Typography variant="body2" sx={{ color: "#fff" }}>
      © {new Date().getFullYear()} MoneyBank. All Rights Reserved.
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: "#fff", display: "block", mt: 0.5 }}
    >
      For assistance, contact support@moneybank.com
    </Typography>
  </Box>
);

export default Footer;
