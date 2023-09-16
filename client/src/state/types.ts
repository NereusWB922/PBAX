export interface SearchProtienInteractionsResponse {
  proteinInteractions: ProtienInteraction[];
  total: number;
}

export interface ProtienInteraction {
  pdb_id: string;
  mutations: string;
  protein1: string;
  protein2: string;
  experiment: string;
  temperature: number;
  ph: number;
  delta_g: number;
  delta_delta_g: number;
  authors: string;
  journal: string;
  pubmed_id: string;
  __v: number;
  _id: number;
}

export interface SearchProtienInteractionsParam {
  paginationModel: string;
  sort: string;
  search: string;
}

export interface sortModel {
  field: string;
  sort: "asc" | "desc";
}
