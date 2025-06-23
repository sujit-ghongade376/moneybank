import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const DashboardPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      minWidth: "100vw",
      background: "#f5f6fa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      pt: { xs: 14, sm: 16 },
      pb: { xs: 10, sm: 12 },
    }}
  >
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, sm: 5 },
        maxWidth: 500,
        width: "100%",
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={700} color="#ff6f00" gutterBottom>
        Welcome to MoneyBank!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is your dashboard. You can add your banking features here.
      </Typography>
    </Paper>
  </Box>
);

export default DashboardPage;
