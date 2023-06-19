import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

function FrequentlyAskedQuestions() {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Frequently asked questions
      </Typography>
      <Container>
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 01 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowUpIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                backgroundColor:"#F7F9FA",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  display:'flex',
                  alignItems:'center',justifyContent:'center'
                }}
              >
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 02 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 03 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 04 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "900px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 05 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FrequentlyAskedQuestions;
