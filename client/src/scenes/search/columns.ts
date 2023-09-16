import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "pdb_id",
    headerName: "PDB ID",
    hideable: false,
    flex: 0.6,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "protein1",
    headerName: "Protein 1",
    hideable: false,
    flex: 1.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "protein2",
    headerName: "Protein 2",
    hideable: false,
    flex: 1.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "mutations",
    headerName: "Mutation(s)",
    hideable: false,
    headerAlign: "center",
    align: "center",
    flex: 0.7,
  },
  {
    field: "experiment",
    headerName: "Experiment Technique",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "temperature",
    headerName: "Temperature (K)",
    flex: 0.7,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ph",
    headerName: "pH",
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delta_g",
    headerName: "ΔG (kcal/mol)",
    flex: 0.7,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delta_delta_g",
    headerName: "ΔΔG (kcal/mol)",
    flex: 0.7,
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridRenderCellParams) =>
      params.value === null ? "-" : params.value,
  },
  {
    field: "pubmed_id",
    headerName: "PubMed ID",
    headerAlign: "center",
    align: "center",
    flex: 0.6,
  },
  {
    field: "authors",
    headerName: "Author(s)",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "journal",
    headerName: "Journal",
    flex: 1,
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams) =>
      params.value === "" ? "-" : params.value,
  },
];

export default columns;
