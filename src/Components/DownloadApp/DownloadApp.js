import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import phone from "../../Assets/1 61929 2.png";
import playstore from "../../Assets/playstore.jpg";
import apple from "../../Assets/Vector (1).png";

function DownloadApp() {
  return (
    <Box
      sx={{
        backgroundColor: " #212933",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",
          height: "300px",
          width: "1000px",
          borderRadius: "0px 80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box width={300} height={500} component="img" src={phone} />
        <Stack>
          <Typography
            variant="h4"
            component="h4"
            sx={{ color: "white", width: 370, fontWeight: "600" }}
          >
            Download the Free Add to watermark App
          </Typography>
          <Typography sx={{ color: "white" }}>
            for faster,easer booking and exlcusive deals
          </Typography>
          <Stack direction="row">
            <Paper
              sx={{
                width: "150px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Box width={30} height={30} component="img" src={apple} />
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Download on the
                </Typography>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  App Store
                </Typography>
              </Stack>
            </Paper>
            <Paper
              sx={{
                width: "150px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
                ml: 2,
              }}
            >
              <Box width={30} height={30} component="img" src={playstore} />
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  GET it on
                </Typography>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Google Play
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default DownloadApp;
