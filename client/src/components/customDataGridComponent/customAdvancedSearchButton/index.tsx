import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Typography } from "@mui/material";

type Props = {
  openSearchForm: () => void;
};

const CustomAdvancedSearchButton = ({ openSearchForm }: Props) => {
  return (
    <Button size="small" onClick={openSearchForm}>
      <FilterAltIcon />
      <Typography fontWeight="500" fontSize="0.7rem">
        ADVANCED SEARCH
      </Typography>
    </Button>
  );
};

export default CustomAdvancedSearchButton;
