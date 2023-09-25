import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import ProteinInfoSection from "./ProteinInfoSection";
import { initialAdvancedSearchModel } from "@/scenes/search/initialValues";
import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { Dispatch, useState } from "react";
import ExperimentalConditionsSection from "./ExperimentalConditionsSection";
import ThermodynamicParametersSection from "./ThermodynamicParametersSection";
import LiteratureInfoSection from "./LiteratureInfoSection";
import FlexBetween from "@/common/FlexBetween";

type Props = {
  toggleSearchForm: () => void;
  setAdvancedSearch: Dispatch<AdvancedSearchModel>;
};

const AdvancedSearchForm = ({ toggleSearchForm, setAdvancedSearch }: Props) => {
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
    setTempAdvancedSearchModel(initialAdvancedSearchModel);
    toggleSearchForm();
  };

  const onCancel = () => {
    setTempAdvancedSearchModel(initialAdvancedSearchModel);
    toggleSearchForm();
  };

  return (
    <form style={{ width: "32%" }} onSubmit={(event) => event.preventDefault()}>
      <Card
        sx={{
          width: "100%",
          padding: "2rem 2.5rem",
          backgroundColor: theme.palette.grey[100],
          maxHeight: "70vh",
          overflow: "auto",
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
        <Grid container justifyContent="flex-end">
          <FlexBetween gap="2rem">
            <Button variant="outlined" onClick={onCancel} size="large">
              Cancel
            </Button>
            <Button variant="contained" onClick={onSubmit} size="large">
              Submit
            </Button>
          </FlexBetween>
        </Grid>
      </Card>
    </form>
  );
};

export default AdvancedSearchForm;
