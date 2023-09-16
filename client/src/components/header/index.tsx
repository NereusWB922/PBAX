import { Typography, Box, useTheme } from "@mui/material";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const { title } = props;
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "1px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
