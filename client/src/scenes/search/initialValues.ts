import { AdvancedSearchModel } from "@/types/types";

export const initialAdvancedSearchModel: AdvancedSearchModel = {
  protein1: "",
  protein2: "",
  pdb_id: "all",
  type: "all",
  mutate_from: "all",
  mutate_to: "all",
  experiment: "all",
  max_temp: null,
  min_temp: null,
  max_ph: null,
  min_ph: null,
  max_delta_g: null,
  min_delta_g: null,
  max_delta_delta_g: null,
  min_delta_delta_g: null,
  authors: null,
  journal: "all",
  pubmed_id: "all",
};
