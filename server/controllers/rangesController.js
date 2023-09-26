import ProteinInteraction from "../models/ProteinInteraction.js";

export const getTemperatureRange = async (req, res) => {
  try {
    const range = await ProteinInteraction.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$temperature" },
          min: { $min: "$temperature" },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    res.status(200).json({
      max: range[0].max,
      min: range[0].min,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPHRange = async (req, res) => {
  try {
    const range = await ProteinInteraction.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$ph" },
          min: { $min: "$ph" },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    res.status(200).json({
      max: range[0].max,
      min: range[0].min,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDeltaGRange = async (req, res) => {
  try {
    const range = await ProteinInteraction.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$delta_g" },
          min: { $min: "$delta_g" },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    res.status(200).json({
      max: range[0].max,
      min: range[0].min,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDeltaDeltaGRange = async (req, res) => {
  try {
    const range = await ProteinInteraction.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$delta_delta_g" },
          min: { $min: "$delta_delta_g" },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    res.status(200).json({
      max: range[0].max,
      min: range[0].min,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
