import { Typography } from "@mui/material";
import React from "react";

type Param = {
  children: React.ReactNode;
};

const CustomList = ({ children }: Param) => {
  return (
    <Typography
      variant="body2"
      component="ul"
      sx={{
        listStyleType: "none",
        paddingLeft: "0",
        fontSize: "0.9rem",
        margin: "0 0.8rem",
        "& li": {
          marginBottom: "0.5rem",
          display: "flex",
          alignItems: "flex-start",
        },
        "& strong": {
          minWidth: "105px",
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomList;
