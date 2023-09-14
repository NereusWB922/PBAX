/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/common/FlexBetween";
import StorageIcon from '@mui/icons-material/Storage';

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("home");
  
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <StorageIcon sx={{ fontSize: "25px"}}/>
        <Typography variant="h4" fontSize="20px">
          BioDB
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{"&:hover": { color: palette.primary[100]}}}>
          <Link 
            to="/"
            onClick={() => setSelected("home")}
            style={{
              color: selected === "home" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            home
          </Link>
        </Box>
        <Box>
          <Link 
            to="/search"
            onClick={() => setSelected("search")}
            style={{
              color: selected === "search" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            search
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar