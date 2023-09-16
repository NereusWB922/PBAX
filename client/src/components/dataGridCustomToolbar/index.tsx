import { Search, RestartAlt } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "@/common/FlexBetween";
import { Dispatch, useState } from "react";

type Props = {
  tempSearchInput: string;
  setTempSearchInput: Dispatch<string>;
  setSearch: Dispatch<string>;
};

const DataGridCustomToolbar = ({
  tempSearchInput,
  setTempSearchInput,
  setSearch,
}: Props) => {
  const [isResetSearch, setIsResetSearch] = useState(false);

  const handleSearchAction = () => {
    if (tempSearchInput != "" || isResetSearch) {
      setSearch(tempSearchInput);
      setTempSearchInput("");
      setIsResetSearch((prevState) => !prevState);
    }
  };

  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "13rem", height: "3rem" }}
          onChange={(e) => setTempSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchAction();
            }
          }}
          value={tempSearchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchAction}>
                  {isResetSearch ? <RestartAlt /> : <Search />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
