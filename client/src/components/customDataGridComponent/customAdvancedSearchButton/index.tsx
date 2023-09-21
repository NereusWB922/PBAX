import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Typography } from "@mui/material";

type Props = {
  toggleSearchForm: () => void;
};

const CustomAdvancedSearchButton = ({ toggleSearchForm }: Props) => {
  return (
    <Button size="small" onClick={toggleSearchForm}>
      <FilterAltIcon />
      <Typography fontWeight="500" fontSize="0.7rem">
        ADVANCED SEARCH
      </Typography>
    </Button>
  );
};

export default CustomAdvancedSearchButton;
