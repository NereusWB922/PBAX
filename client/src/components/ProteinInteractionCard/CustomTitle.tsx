import { Box, Typography, useTheme } from "@mui/material";

type Param = {
  title: string;
};

const CustomTitle = ({ title }: Param) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: palette.primary[200],
        padding: "0.5rem 1rem",
        m: "1rem 0 0.7rem 0",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: palette.grey[900],
          fontWeight: "600",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
