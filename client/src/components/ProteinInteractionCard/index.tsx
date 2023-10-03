import { useFindInteractionByIdQuery } from "@/state/api";
import { Dialog, DialogContent, IconButton, useTheme } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import CustomTitle from "./CustomTitle";
import CustomList from "./CustomList";
import { Link } from "react-router-dom";
import FlexBetween from "@/common/FlexBetween";
import SkeletonCard from "./SkeletonCard";

type Param = {
  id: GridRowId;
  open: boolean;
  onClose: () => void;
};

const ProteinInteractionCard = ({ id, open, onClose }: Param) => {
  const theme = useTheme();
  const { data, isLoading, isFetching } = useFindInteractionByIdQuery({ id });
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
        {!isLoading && !isFetching ? (
          <>
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
                <Link
                  to={`https://www.rcsb.org/structure/${pdb_id}`}
                  target="_blank"
                >
                  <FlexBetween gap="0.3rem" sx={{ color: "inherit" }}>
                    {pdb_id}
                    <LaunchIcon />
                  </FlexBetween>
                </Link>
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
                <strong>ΔG:</strong> {delta_g || "-"}{" "}
                {delta_g ? "kcal/mol" : ""}
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
                <strong>PubMed ID:</strong>
                <Link
                  to={`https://pubmed.ncbi.nlm.nih.gov/2014261//${pubmed_id}`}
                  target="_blank"
                >
                  <FlexBetween gap="0.3rem" sx={{ color: "inherit" }}>
                    {pubmed_id}
                    <LaunchIcon />
                  </FlexBetween>
                </Link>
              </li>
            </CustomList>
          </>
        ) : (
          <SkeletonCard />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProteinInteractionCard;
