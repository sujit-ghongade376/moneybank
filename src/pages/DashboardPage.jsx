import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import AccountSummary from "./AccountSummary";
import Statement from "./Statement";
import Expenses from "./Expenses";

const DashboardPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      width: "100vw",
      background: "#f5f6fa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      pt: { xs: 4, sm: 6, md: 8 },
      pb: { xs: 2, sm: 4, md: 6 },
      overflowX: "hidden",
    }}
  >
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        maxWidth: { xs: "100%", sm: 500, md: 600 },
        borderRadius: 3,
        textAlign: "center",
        mb: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography variant="h5" fontWeight={700} color="#ff6f00" gutterBottom>
        Welcome to MoneyBank!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is your dashboard. Manage your accounts, view statements, and track
        your finances.
      </Typography>
    </Paper>
    <Container
      disableGutters
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 600, md: 800, lg: 1000 },
        px: { xs: 0.5, sm: 2 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto", // center horizontally
      }}
    >
      <AccountSummary />
      <Expenses />
      <Statement />
    </Container>
  </Box>
);

export default DashboardPage;
