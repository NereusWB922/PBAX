import ProteinInteraction from "../models/ProteinInteraction.js";
import {
  generateAdvancedSearchCondition,
  generateSearchConditions,
  generateSortConditions,
  escapeRegExp,
} from "../utils/searchConditionsUtils.js";

export const findProteinInteractionById = async (req, res) => {
  const id = req.params.id;

  try {
    const interaction = await ProteinInteraction.findById(id);

    if (!interaction) {
      // If no interaction is found, return a 404 response
      return res.status(404).json({ message: "Interaction not found" });
    }
    res.status(200).json({ entry: interaction });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const searchProteinInteractions = async (req, res) => {
  try {
    const { paginationModel, sort, search, advancedSearch } = req.query;

    const { page, pageSize } = JSON.parse(paginationModel);

    const sortFormatted = sort === "[]" ? {} : generateSortConditions(sort);

    const searchConditions = generateSearchConditions(escapeRegExp(search));

    const advancedSearchConditions = generateAdvancedSearchCondition(
      JSON.parse(advancedSearch)
    );

    const proteinInteractions = await ProteinInteraction.find({
      $and: [{ $and: advancedSearchConditions }, { $or: searchConditions }],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await ProteinInteraction.countDocuments({
      $and: [{ $and: advancedSearchConditions }, { $or: searchConditions }],
    });

    res.status(200).json({
      proteinInteractions,
      total,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
