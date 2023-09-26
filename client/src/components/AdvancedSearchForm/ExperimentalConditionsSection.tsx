import { AdvancedSearchModel, handleFieldChangeProp } from "@/types/types";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import AutoCompleteTextField from "@/common/AutoCompleteTextField";
import CustomSlider from "@/common/CustomSlider";
import { useGetOptionsQuery } from "@/state/api";

type Props = {
  tempAdvancedSearchModel: AdvancedSearchModel;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const ExperimentalConditionsSection = ({
  tempAdvancedSearchModel,
  handleFieldChange,
}: Props) => {
  const theme = useTheme();
  const { data: experiment_data } = useGetOptionsQuery({ field: "experiment" });
  const minTemp: number = 0;
  const maxTemp: number = 400;
  const minPH: number = 0;
  const maxPH: number = 14;

  return (
    <Box sx={{ mb: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.grey[800],
          mb: "1rem",
        }}
      >
        Experimental Conditions
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0.5}
        direction="row"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <AutoCompleteTextField
            value={tempAdvancedSearchModel.experiment}
            field="experiment"
            label="Experimental Technique"
            options={experiment_data?.options || []}
            handleFieldChange={handleFieldChange}
            freeSolo={false}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomSlider
            title="Temperature (K)"
            value={[
              tempAdvancedSearchModel.min_temp,
              tempAdvancedSearchModel.max_temp,
            ]}
            min_value={minTemp}
            max_value={maxTemp}
            min_field="min_temp"
            max_field="max_temp"
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomSlider
            title="pH"
            value={[
              tempAdvancedSearchModel.min_ph,
              tempAdvancedSearchModel.max_ph,
            ]}
            min_value={minPH}
            max_value={maxPH}
            min_field="min_ph"
            max_field="max_ph"
            handleFieldChange={handleFieldChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperimentalConditionsSection;
