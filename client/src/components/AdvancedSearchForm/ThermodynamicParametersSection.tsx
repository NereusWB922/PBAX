import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CustomSlider from "@/common/CustomSlider";
import { useGetRangeQuery } from "@/state/api";

type Props = {
  tempAdvancedSearchModel: AdvancedSearchModel;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const ThermodynamicParametersSection = ({
  tempAdvancedSearchModel,
  handleFieldChange,
}: Props) => {
  const theme = useTheme();
  const { data: deltaGRange } = useGetRangeQuery({ field: "delta_g" });
  const { data: deltaDeltaGRange } = useGetRangeQuery({
    field: "delta_delta_g",
  });
  const minDeltaG = deltaGRange?.min || -20;
  const maxDeltaG = deltaGRange?.max || 50;
  const minDeltaDeltaG = deltaDeltaGRange?.min || -20;
  const maxDeltaDeltaG = deltaDeltaGRange?.max || 50;
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
            step={1}
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
              step={1}
              handleFieldChange={handleFieldChange}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ThermodynamicParametersSection;
