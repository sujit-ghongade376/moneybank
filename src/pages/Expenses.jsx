import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { expensesSummary } from "../mockdata/dashboardData";

const Expenses = () => (
  <Accordion
    sx={{
      mb: { xs: 2, sm: 3 },
      width: "100%",
      borderRadius: 3,
      boxShadow: 1,
      maxWidth: "100%", // Let parent container control max width
    }}
    defaultExpanded
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6" fontWeight={600}>
        Expenses & Income Summary
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#e8f5e9",
                textAlign: "center",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Typography color="text.secondary">Total Income</Typography>
              <Typography fontWeight={700} color="#43a047" variant="h6">
                ${expensesSummary.totalIncome.toLocaleString()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#ffebee",
                textAlign: "center",
              }}
            >
              <Typography color="text.secondary">Total Expenses</Typography>
              <Typography fontWeight={700} color="#e53935" variant="h6">
                ${expensesSummary.totalExpenses.toLocaleString()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#e3f2fd",
                textAlign: "center",
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Typography color="text.secondary">Incoming</Typography>
              <Typography fontWeight={700} color="#1976d2" variant="h6">
                ${expensesSummary.incoming.toLocaleString()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#fff3e0",
                textAlign: "center",
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Typography color="text.secondary">Outgoing</Typography>
              <Typography fontWeight={700} color="#ff6f00" variant="h6">
                ${expensesSummary.outgoing.toLocaleString()}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AccordionDetails>
  </Accordion>
);

export default Expenses;
