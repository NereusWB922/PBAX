import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import FlexBetween from "@/common/FlexBetween";

type Params = {
  linkHoverColor: string;
};

export function getColumns({ linkHoverColor }: Params): GridColDef[] {
  return [
    {
      field: "pdb_id",
      headerName: "PDB ID",
      hideable: false,
      flex: 0.6,
      headerAlign: "center",
      align: "center",
      minWidth: 130,
      renderCell: (params: GridRenderCellParams) => (
        <Link
          to={`https://www.rcsb.org/structure/${params.value}`}
          target="_blank"
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <FlexBetween
            gap="0.5rem"
            sx={{
              "&:hover": {
                color: `${linkHoverColor}} !important`,
              },
            }}
          >
            <Typography>{params.value}</Typography>
            <LaunchIcon />
          </FlexBetween>
        </Link>
      ),
    },
    {
      field: "protein1",
      headerName: "Protein 1",
      hideable: false,
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      minWidth: 200,
    },
    {
      field: "protein2",
      headerName: "Protein 2",
      hideable: false,
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      minWidth: 200,
    },
    {
      field: "mutations",
      headerName: "Mutation(s)",
      hideable: false,
      headerAlign: "center",
      align: "center",
      flex: 0.7,
      valueFormatter: ({ value }) => value.join(", "),
      minWidth: 100,
    },
    {
      field: "experiment",
      headerName: "Experiment Technique",
      headerAlign: "center",
      align: "center",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "temperature",
      headerName: "Temperature (K)",
      flex: 0.7,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
    },
    {
      field: "ph",
      headerName: "pH",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
      minWidth: 100,
    },
    {
      field: "delta_g",
      headerName: "ΔG (kcal/mol)",
      flex: 0.7,
      headerAlign: "center",
      align: "center",
      minWidth: 130,
    },
    {
      field: "delta_delta_g",
      headerName: "ΔΔG (kcal/mol)",
      flex: 0.7,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) =>
        params.value === null ? "-" : params.value,
    },
    {
      field: "pubmed_id",
      headerName: "PubMed ID",
      headerAlign: "center",
      align: "center",
      flex: 0.6,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Link
          to={`https://pubmed.ncbi.nlm.nih.gov/${params.value}`}
          target="_blank"
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <FlexBetween
            gap="0.5rem"
            sx={{
              "&:hover": { color: `${linkHoverColor}} !important` },
            }}
          >
            <Typography>{params.value}</Typography>
            <LaunchIcon />
          </FlexBetween>
        </Link>
      ),
    },
    {
      field: "authors",
      headerName: "Author(s)",
      flex: 1,
      headerAlign: "center",
      minWidth: 150,
    },
    {
      field: "journal",
      headerName: "Journal",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => params.value || "-",
    },
  ];
}
