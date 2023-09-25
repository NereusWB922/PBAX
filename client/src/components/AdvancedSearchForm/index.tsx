import { Card, Typography, useTheme } from "@mui/material";
import ProteinInfoSection from "./ProteinInfoSection";
import { initialAdvancedSearchModel } from "@/scenes/search/initialValues";
import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { useState } from "react";
import ExperimentalConditionsSection from "./ExperimentalConditionsSection";

const AdvancedSearchForm = () => {
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

  console.log(tempAdvancedSearchModel);

  return (
    <form style={{ width: "30%" }}>
      <Card
        sx={{
          width: "100%",
          padding: "1rem 1rem",
          backgroundColor: theme.palette.grey[100],
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
        {/* <Typography variant="h2">Experimental Conditions</Typography>
        <Typography variant="h2">Thermodynamic Parameters</Typography>
        <Typography variant="h2">Literature Information</Typography> */}
      </Card>
    </form>
  );
};

export default AdvancedSearchForm;
