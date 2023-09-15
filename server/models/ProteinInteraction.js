import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProteinInteractionSchema = new Schema(
  {
    pdb_id: String,
    mutations: String,
    protein1: String,
    protein2: String,
    experiment: String,
    temperature: Number,
    ph: Number,
    delta_g: Number,
    delta_delta_g: Number,
    authors: String,
    journal: String,
    pubmed_id: String
  }
);

const ProteinInteraction = mongoose.model("ProteinInteraction", ProteinInteractionSchema, "protein_interactions")

export default ProteinInteraction