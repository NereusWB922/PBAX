/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from "@mui/material";
import FlexBetween from "@/common/FlexBetween";
import Logo from "./logo";
import { navigationItem } from "./type";
import NavigationMenu from "./navigationMenu";

const Navbar = () => {
  const { palette } = useTheme();

  const navigationItems: navigationItem[] = [
    { label: "home", path: "/" },
    { label: "search", path: "/search" },
  ];

  return (
    <FlexBetween
      m="0 0.5rem 0.25rem 0.5rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <Logo />

      {/* RIGHT SIDE */}
      <NavigationMenu navigationItems={navigationItems} />
    </FlexBetween>
  );
};

export default Navbar;
