import ProteinInteraction from "../models/ProteinInteraction.js";

const generateSort = (sort) => {
  const sortParsed = JSON.parse(sort);
  const sortFormatted = {
    [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
  };

  return sortFormatted;
};

const generateSearchConditions = (search) => {
  // Get all the fields of the ProteinInteraction model
  const allFields = Object.keys(ProteinInteraction.schema.paths);

  // Filter the array to include only string type fields
  const searchableFields = allFields.filter((field) => {
    return ProteinInteraction.schema.paths[field].instance === "String";
  });

  const searchConditions = [];

  searchableFields.forEach((field) => {
    const condition = {};
    condition[field] = { $regex: new RegExp(search, "i") };
    searchConditions.push(condition);
  });

  return searchConditions;
};

export const searchProteinInteractions = async (req, res) => {
  try {
    const { page, pageSize, sort, search } = req.query;

    const sortFormatted =
      Object.keys(sort).length === 0 ? generateSort(sort) : {};

    const searchConditions = generateSearchConditions(search);

    const proteinInteractions = await ProteinInteraction.find({
      $or: searchConditions,
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await ProteinInteraction.countDocuments({
      $or: searchConditions,
    });

    res.status(200).json({
      proteinInteractions,
      total,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
