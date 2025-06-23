import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accountSummary } from "../mockdata/dashboardData";

const AccountSummary = () => (
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
        Account Summary
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Name: {accountSummary.name}</Typography>
      <Typography>Account #: {accountSummary.accountNumber}</Typography>
      <Typography>
        Balance:{" "}
        <span style={{ color: "#43a047", fontWeight: 700 }}>
          {accountSummary.currency} {accountSummary.balance.toLocaleString()}
        </span>
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export default AccountSummary;
