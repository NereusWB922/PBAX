import { Search } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "@/common/FlexBetween";
import { Dispatch, useState } from "react";
import CustomAdvancedSearchButton from "@/components/customDataGridComponent/customAdvancedSearchButton";

type Props = {
  tempSearchInput: string;
  setTempSearchInput: Dispatch<string>;
  setSearch: Dispatch<string>;
  openSearchForm: () => void;
};

const DataGridCustomToolbar = ({
  tempSearchInput,
  setTempSearchInput,
  setSearch,
  openSearchForm,
}: Props) => {
  const [showRemoveInput, setShowRemoveInput] = useState(false);

  const handleSearchAction = () => {
    setSearch(tempSearchInput);
  };

  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
          <CustomAdvancedSearchButton openSearchForm={openSearchForm} />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "13rem", height: "3rem" }}
          onChange={(e) => {
            if (e.target.value !== "") {
              setShowRemoveInput(true);
            } else {
              setShowRemoveInput(false);
            }
            setTempSearchInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchAction();
            }
          }}
          value={tempSearchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    if (showRemoveInput) {
                      setTempSearchInput("");
                      setSearch("");
                      setShowRemoveInput(false);
                    } else {
                      handleSearchAction;
                    }
                  }}
                >
                  {showRemoveInput ? <ClearIcon /> : <Search />}
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
