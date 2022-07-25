import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      mt={2}
      sx={{
        background: "#C2C5CC",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="red">footer copyright text</Typography>
    </Box>
  );
};

export default Footer;
