import { Typography } from "@mui/material";
import FlexBetween from "@/common/FlexBetween";
import StorageIcon from "@mui/icons-material/Storage";

const Logo = () => {
  return (
    <FlexBetween gap="0.75rem">
      <StorageIcon sx={{ fontSize: "25px" }} />
      <Typography variant="h4" fontSize="20px">
        PBAX
      </Typography>
    </FlexBetween>
  );
};

export default Logo;
