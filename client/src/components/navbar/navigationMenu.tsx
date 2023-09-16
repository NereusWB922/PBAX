import { Link, useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import FlexBetween from "@/common/FlexBetween";
import { navigationItem } from "./type";

type Props = {
  navigationItems: navigationItem[];
};

const NavigationMenu = ({ navigationItems }: Props) => {
  const { palette } = useTheme();
  const location = useLocation();

  return (
    <FlexBetween gap="2rem">
      {navigationItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            "&:hover": { color: `${palette.primary[100]} !important` },
          }}
        >
          <Link
            to={item.path}
            style={{
              color:
                location.pathname === item.path ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            {item.label}
          </Link>
        </Box>
      ))}
    </FlexBetween>
  );
};

export default NavigationMenu;
