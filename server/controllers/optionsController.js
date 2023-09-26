import ProteinInteraction from "../models/ProteinInteraction.js";

const allOption = {
  label: "All",
  value: "all",
};

export const getProtein1Options = async (req, res) => {
  try {
    const values = await ProteinInteraction.distinct("protein1");

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProtein2Options = async (req, res) => {
  try {
    const protein1Value = req.query.protein1;

    if (!protein1Value) {
      return res.status(200).json({ options: [allOption] });
    }

    const values = await ProteinInteraction.distinct("protein2", {
      protein1: protein1Value,
    });

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPDBIdOptions = async (req, res) => {
  try {
    const values = await ProteinInteraction.distinct("pdb_id", {
      pdb_id: { $ne: null },
    });

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getExperimentOptions = async (req, res) => {
  try {
    const values = await ProteinInteraction.distinct("experiment", {
      experiment: { $ne: null },
    });

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPubMedIdOptions = async (req, res) => {
  try {
    const values = await ProteinInteraction.distinct("pubmed_id", {
      pubmed_id: { $ne: null },
    });

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getJournalOptions = async (req, res) => {
  try {
    const values = await ProteinInteraction.distinct("journal", {
      journal: { $ne: null },
    });

    const options = values.map((value) => ({
      label: value,
      value: value,
    }));

    options.unshift(allOption);

    res.status(200).json({
      options,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
