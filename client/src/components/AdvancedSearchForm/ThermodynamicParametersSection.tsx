import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CustomSlider from "@/common/CustomSlider";

type Props = {
  tempAdvancedSearchModel: AdvancedSearchModel;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const ThermodynamicParametersSection = ({
  tempAdvancedSearchModel,
  handleFieldChange,
}: Props) => {
  const theme = useTheme();
  // Todo: currently hardcoded range
  const minDeltaG = -100;
  const maxDeltaG = 200;
  const minDeltaDeltaG = -100;
  const maxDeltaDeltaG = 200;
  return (
    <Box sx={{ mb: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.grey[800],
          mb: "1rem",
        }}
      >
        Thermodynamic Parameters
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0.5}
        direction="row"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <CustomSlider
            title="ΔG (kcal/mol)"
            value={[
              tempAdvancedSearchModel.min_delta_g,
              tempAdvancedSearchModel.max_delta_g,
            ]}
            min_value={minDeltaG}
            max_value={maxDeltaG}
            min_field="min_delta_g"
            max_field="max_delta_g"
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        {tempAdvancedSearchModel.type === "mutant" && (
          <Grid item xs={12}>
            <CustomSlider
              title="ΔΔG (kcal/mol)"
              value={[
                tempAdvancedSearchModel.min_delta_delta_g,
                tempAdvancedSearchModel.max_delta_delta_g,
              ]}
              min_value={minDeltaDeltaG}
              max_value={maxDeltaDeltaG}
              min_field="min_delta_delta_g"
              max_field="max_delta_delta_g"
              handleFieldChange={handleFieldChange}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ThermodynamicParametersSection;
