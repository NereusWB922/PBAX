import { useFindInteractionByIdQuery } from "@/state/api";
import { Dialog, DialogContent, IconButton, useTheme } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import CustomTitle from "./CustomTitle";
import CustomList from "./CustomList";

type Param = {
  id: GridRowId;
  open: boolean;
  onClose: () => void;
};

const ProteinInteractionCard = ({ id, open, onClose }: Param) => {
  const theme = useTheme();
  const { data } = useFindInteractionByIdQuery({ id });
  const {
    pdb_id,
    mutations,
    protein1,
    protein2,
    experiment,
    temperature,
    ph,
    delta_g,
    delta_delta_g,
    authors,
    journal,
    pubmed_id,
  } = data?.entry || {};
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
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
        <CustomTitle title="Protein Information" />
        <CustomList>
          <li>
            <strong>Protein 1:</strong> {protein1}
          </li>
          <li>
            <strong>Protein 2:</strong> {protein2}
          </li>
          <li>
            <strong>PDB ID: </strong>
            {pdb_id}
          </li>
          <li>
            <strong>Mutation:</strong> {mutations?.join(", ")}
          </li>
        </CustomList>
        <CustomTitle title="Experimental Conditions" />
        <CustomList>
          <li>
            <strong>Experiment: </strong>
            {experiment}
          </li>
          <li>
            <strong>Temperature:</strong> {temperature || "-"}{" "}
            {temperature ? "K" : ""}
          </li>
          <li>
            <strong>pH:</strong> {ph || "-"}
          </li>
        </CustomList>
        <CustomTitle title="Thermodynamic Parameters" />
        <CustomList>
          <li>
            <strong>ΔG:</strong> {delta_g || "-"} {delta_g ? "kcal/mol" : ""}
          </li>
          <li>
            <strong>ΔΔG: </strong>
            {delta_delta_g || "-"} {delta_delta_g ? "kcal/mol" : ""}
          </li>
        </CustomList>
        <CustomTitle title="Literature Information" />
        <CustomList>
          <li>
            <strong>Authors:</strong> {authors || "-"}
          </li>
          <li>
            <strong>Journal:</strong> {journal || "-"}
          </li>
          <li>
            <strong>PubMed ID:</strong> {pubmed_id || "-"}
          </li>
        </CustomList>
      </DialogContent>
    </Dialog>
  );
};

export default ProteinInteractionCard;
