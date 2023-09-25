import {
  AdvancedSearchModel,
  Option,
  handleFieldChangeProp,
} from "@/types/types";
import { Box, Grid, TextField, Typography, useTheme } from "@mui/material";
import AutoCompleteTextField from "@/common/AutoCompleteTextField";

type Props = {
  tempAdvancedSearchModel: AdvancedSearchModel;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const LiteratureInfoSection = ({
  tempAdvancedSearchModel,
  handleFieldChange,
}: Props) => {
  const theme = useTheme();
  // Todo: currently hardcoded range
  const pubMedIDOptions: Option[] = [];
  const journalOptions: Option[] = [];
  return (
    <Box sx={{ mb: "2.5rem" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.grey[800],
          mb: "1rem",
        }}
      >
        Literature Information
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
            value={tempAdvancedSearchModel.pubmed_id}
            field="pubmed_id"
            label="PubMed ID"
            options={pubMedIDOptions}
            handleFieldChange={handleFieldChange}
            freeSolo={false}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            inputProps={{
              autoComplete: "off",
            }}
            value={
              tempAdvancedSearchModel.authors
                ? tempAdvancedSearchModel.authors
                : ""
            }
            label="Author"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFieldChange({
                field: "authors",
                value: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteTextField
            value={tempAdvancedSearchModel.journal}
            field="journal"
            label="Journal"
            options={journalOptions}
            handleFieldChange={handleFieldChange}
            freeSolo={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiteratureInfoSection;
