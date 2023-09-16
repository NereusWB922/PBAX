const columns = [
  {
    field: "pdb_id",
    headerName: "PDB ID",
    flex: 0.6,
  },
  {
    field: "pubmed_id",
    headerName: "PubMed ID",
    flex: 0.6,
  },
  {
    field: "protein1",
    headerName: "Protein 1",
    flex: 1.5,
  },
  {
    field: "protein2",
    headerName: "Protein 2",
    flex: 1.5,
  },
  {
    field: "mutations",
    headerName: "Mutation(s)",
    flex: 0.7,
  },
  {
    field: "experiment",
    headerName: "Experiment Technique",
    flex: 1,
  },
  {
    field: "temperature",
    headerName: "Temperature (K)",
    flex: 0.7,
  },
  {
    field: "ph",
    headerName: "pH",
    flex: 0.5,
  },
  {
    field: "delta_g",
    headerName: "ΔG (kcal/mol)",
    flex: 0.6,
  },
  {
    field: "delta_delta_g",
    headerName: "ΔΔG (kcal/mol)",
    flex: 0.6,
  },
  {
    field: "authors",
    headerName: "Author(s)",
    flex: 1,
  },
  {
    field: "journal",
    headerName: "Journal",
    flex: 1,
  },
];

export default columns;
