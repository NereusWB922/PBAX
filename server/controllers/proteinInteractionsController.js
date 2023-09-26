import ProteinInteraction from "../models/ProteinInteraction.js";

const generateSort = (sort) => {
  const sortParsed = JSON.parse(sort)[0];

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
    searchConditions.push(getMatchWordCondition(field, search));
  });

  searchConditions.push(getMatchWordCondition("mutations", search));

  return searchConditions;
};

const getMatchWordCondition = (field, target) => {
  const condition = {};
  condition[field] = { $regex: new RegExp(target, "i") };
  return condition;
};

const getEqualCondition = (field, target) => {
  const condition = {};
  condition[field] = target;
  return condition;
};

const getRangeCondition = (field, max, min) => {
  const condition = {};
  const range = {};
  if (min != null) range["$gte"] = min;
  if (max != null) range["$lte"] = max;
  condition[field] = range;

  return condition;
};

const getMutantCondition = (mutate_from, mutate_to) => {
  let pattern = "";
  if (mutate_from !== null && mutate_from != "all") {
    pattern += `^${mutate_from}`;
  }
  pattern += ".*";

  if (mutate_to !== null && mutate_to != "all") {
    pattern += `${mutate_to}$`;
  }

  const condition = {};
  condition["mutations"] = { $regex: new RegExp(pattern) };
  return condition;
};

const generateAdvancedSearchCondition = (advancedSearchModel) => {
  const {
    protein1,
    protein2,
    pdb_id,
    type,
    mutate_from,
    mutate_to,
    experiment,
    max_temp,
    min_temp,
    max_ph,
    min_ph,
    max_delta_g,
    min_delta_g,
    max_delta_delta_g,
    min_delta_delta_g,
    authors,
    journal,
    pubmed_id,
  } = advancedSearchModel;
  const advancedSearchCondition = [];

  //protein1
  if (protein1 != null && protein1 != "all") {
    advancedSearchCondition.push(getMatchWordCondition("protein1", protein1));
  }
  //protein2
  if (protein2 != null && protein2 != "all") {
    advancedSearchCondition.push(getMatchWordCondition("protein2", protein2));
  }
  //pdb_id
  if (pdb_id != null && pdb_id != "all") {
    advancedSearchCondition.push(getEqualCondition("pdb_id", pdb_id));
  }
  //type + mutate_from + mutate_to
  if (type == "wild") {
    advancedSearchCondition.push(getMatchWordCondition("mutations", "wild"));
  } else if (type == "mutant") {
    if (
      (mutate_from !== null && mutate_from != "all") ||
      (mutate_to !== null && mutate_to != "all")
    ) {
      advancedSearchCondition.push(getMutantCondition(mutate_from, mutate_to));
    }
  }
  //experiment
  if (experiment != null && experiment != "all") {
    advancedSearchCondition.push(getEqualCondition("experiment", experiment));
  }
  //temperature
  if (max_temp !== null || min_temp !== null) {
    advancedSearchCondition.push(
      getRangeCondition("temperature", max_temp, min_temp)
    );
  }
  //ph
  if (max_ph !== null || min_ph !== null) {
    advancedSearchCondition.push(getRangeCondition("ph", max_ph, min_ph));
  }
  //delta_g
  if (max_delta_g !== null || min_delta_g !== null) {
    advancedSearchCondition.push(
      getRangeCondition("delta_g", max_delta_g, min_delta_g)
    );
  }
  //delta_delta_g
  if (max_delta_delta_g !== null || min_delta_delta_g !== null) {
    advancedSearchCondition.push(
      getRangeCondition("delta_delta_g", max_delta_delta_g, min_delta_delta_g)
    );
  }
  //authors
  if (authors != null) {
    advancedSearchCondition.push(getMatchWordCondition("authors", authors));
  }
  //journal
  if (journal != null && journal != "all") {
    advancedSearchCondition.push(getEqualCondition("journal", journal));
  }
  //pubmed_id
  if (pubmed_id != null && pubmed_id != "all") {
    advancedSearchCondition.push(getEqualCondition("pubmed_id", pubmed_id));
  }

  return advancedSearchCondition;
};

export const searchProteinInteractions = async (req, res) => {
  try {
    const { paginationModel, sort, search, advancedSearch } = req.query;

    const { page, pageSize } = JSON.parse(paginationModel);

    const sortFormatted = sort === "[]" ? {} : generateSort(sort);

    const searchConditions = generateSearchConditions(search);

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
