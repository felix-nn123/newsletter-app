import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", m: 5 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
