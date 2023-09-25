import {
  AdvancedSearchModel,
  Option,
  handleFieldChangeProp,
} from "@/types/types";
import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { MouseEvent } from "react";
import { amino_acid_menu_items, aminoAcidMapper } from "./MenuItem";
import AutoCompleteTextField from "@/common/AutoCompleteTextField";

type Props = {
  tempAdvancedSearchModel: AdvancedSearchModel;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const ProteinInfoSection = ({
  tempAdvancedSearchModel,
  handleFieldChange,
}: Props) => {
  const theme = useTheme();
  const protein1_options: Option[] = [];
  const protein2_options: Option[] = [];
  const pbd_id_options: Option[] = [];
  return (
    <Box sx={{ mb: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.grey[800],
          mb: "1rem",
        }}
      >
        Protein Information
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0.5}
        direction="row"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography fontWeight="600" margin="0 0 -0.5rem 0">
            Protein Complex
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteTextField
            value={tempAdvancedSearchModel.protein1}
            field="protein1"
            label="Protein 1"
            options={protein1_options}
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteTextField
            value={tempAdvancedSearchModel.protein2}
            field="protein2"
            label="Protein 2"
            options={protein2_options}
            handleFieldChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteTextField
            value={tempAdvancedSearchModel.pbd_id}
            field="pbd_id"
            label="PBD ID"
            options={pbd_id_options}
            handleFieldChange={handleFieldChange}
            freeSolo={false}
          />
        </Grid>
        <Grid item xs={6}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            aria-label="Platform"
            value={tempAdvancedSearchModel.type}
            onChange={(_event: MouseEvent<HTMLElement>, value: string) => {
              const prop: handleFieldChangeProp = {
                field: "type",
                value: value,
              };
              handleFieldChange(prop);
            }}
          >
            <ToggleButton value="wild">Wild</ToggleButton>
            <ToggleButton value="mutant">Mutant</ToggleButton>
            <ToggleButton value="all">All</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {tempAdvancedSearchModel.type == "mutant" && (
          <>
            <Grid item xs={12}>
              <Typography fontWeight="600">Mutation</Typography>
            </Grid>
            <Grid item xs={6}>
              <AutoCompleteTextField
                value={aminoAcidMapper(tempAdvancedSearchModel.mutate_from)}
                field="mutate_from"
                label="Source"
                options={amino_acid_menu_items}
                handleFieldChange={handleFieldChange}
                freeSolo={false}
              />
            </Grid>
            <Grid item xs={6}>
              <AutoCompleteTextField
                value={aminoAcidMapper(tempAdvancedSearchModel.mutate_to)}
                field="mutate_to"
                label="Target"
                options={amino_acid_menu_items}
                handleFieldChange={handleFieldChange}
                freeSolo={false}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProteinInfoSection;
