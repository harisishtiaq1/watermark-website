import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Plans from "./Plans";

function PricePlans() {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "600", textAlign: "center" }}
      >
        Our Price Plans
      </Typography>
      <Typography
        sx={{ color: "grey", textAlign: "center", width: "380px", mt: 2 }}
      >
        We provide complete features and certainly no less competitive with
        other video applications
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              width: "300px",
              padding: 1,
              justifyContent: "space-around",
              borderRadius: "30px",
              mt: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: "grey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                borderRadius: "30px",
                width: "150px",
                height: "50px",
                background:
                  "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%);",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Annually
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <Plans/>
    </>
  );
}

export default PricePlans;
