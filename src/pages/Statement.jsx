import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { statement } from "../mockdata/dashboardData";

const Statement = () => (
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
        Recent Transactions
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: 2,
          overflowX: "auto",
          width: "100%",
        }}
      >
        <Table size="small" sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statement.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: item.type === "debit" ? "#e53935" : "#43a047",
                  }}
                >
                  {item.type === "debit" ? "-" : "+"}$
                  {Math.abs(item.amount).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AccordionDetails>
  </Accordion>
);

export default Statement;
