import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ProteinInfoSection from "./ProteinInfoSection";
import { initialAdvancedSearchModel } from "@/scenes/search/initialValues";
import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { Dispatch, useState } from "react";
import ExperimentalConditionsSection from "./ExperimentalConditionsSection";
import ThermodynamicParametersSection from "./ThermodynamicParametersSection";
import LiteratureInfoSection from "./LiteratureInfoSection";
import FlexBetween from "@/common/FlexBetween";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  closeSearchForm: () => void;
  setAdvancedSearch: Dispatch<AdvancedSearchModel>;
  advancedSearchModel: AdvancedSearchModel;
  showSearchForm: boolean;
};

const AdvancedSearchForm = ({
  closeSearchForm,
  setAdvancedSearch,
  advancedSearchModel,
  showSearchForm,
}: Props) => {
  const theme = useTheme();

  const [tempAdvancedSearchModel, setTempAdvancedSearchModel] =
    useState<AdvancedSearchModel>(initialAdvancedSearchModel);

  const handleFieldChange = ({ field, value }: handleFieldChangeProp) => {
    setTempAdvancedSearchModel((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const onSubmit = () => {
    setAdvancedSearch(tempAdvancedSearchModel);
    closeSearchForm();
  };

  const onClear = () => {
    setTempAdvancedSearchModel(initialAdvancedSearchModel);
    setAdvancedSearch(initialAdvancedSearchModel);
  };

  const onClose = () => {
    setTempAdvancedSearchModel(advancedSearchModel);
    closeSearchForm();
  };

  return (
    <form style={{ width: "34%" }} onSubmit={(event) => event.preventDefault()}>
      <Dialog
        onClose={onClose}
        open={showSearchForm}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            height: "70vh",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            "&::-webkit-scrollbar": {
              width: "0.5em",
              overflow: "auto",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.grey[800],
            },
            "&::-webkit-scrollbar-thumb": {
              background: theme.palette.primary[400],
              borderRadius: "20px",
              backgroundClip: "content-box",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: theme.palette.primary[600],
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.grey[900],
              fontWeight: "600",
              mb: "1rem",
            }}
          >
            Advanced Search
          </Typography>
          <ProteinInfoSection
            tempAdvancedSearchModel={tempAdvancedSearchModel}
            handleFieldChange={handleFieldChange}
          />
          <ExperimentalConditionsSection
            tempAdvancedSearchModel={tempAdvancedSearchModel}
            handleFieldChange={handleFieldChange}
          />
          <ThermodynamicParametersSection
            tempAdvancedSearchModel={tempAdvancedSearchModel}
            handleFieldChange={handleFieldChange}
          />
          <LiteratureInfoSection
            tempAdvancedSearchModel={tempAdvancedSearchModel}
            handleFieldChange={handleFieldChange}
          />
          <Grid container justifyContent="center" sx={{ mt: "2rem" }}>
            <FlexBetween gap="1rem">
              <Button variant="outlined" onClick={onClose} size="large">
                Close
              </Button>
              <Button
                variant="outlined"
                onClick={onClear}
                size="large"
                color="error"
              >
                Clear
              </Button>
              <Button variant="contained" onClick={onSubmit} size="large">
                Submit
              </Button>
            </FlexBetween>
          </Grid>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default AdvancedSearchForm;
