import { Option } from "@/types/types";

export const amino_acid_menu_items: Option[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Alanine (Ala)",
    value: "A",
  },
  {
    label: "Arginine (Arg)",
    value: "R",
  },
  {
    label: "Asparagine (Asn)",
    value: "N",
  },
  {
    label: "Aspartic Acid (Asp)",
    value: "D",
  },
  {
    label: "Cysteine (Cys)",
    value: "C",
  },
  {
    label: "Glutamine (Gln)",
    value: "Q",
  },
  {
    label: "Glutamic Acid (Glu)",
    value: "E",
  },
  {
    label: "Glycine (Gly)",
    value: "G",
  },
  {
    label: "Histidine (His)",
    value: "H",
  },
  {
    label: "Isoleucine (Ile)",
    value: "I",
  },
  {
    label: "Leucine (Leu)",
    value: "L",
  },
  {
    label: "Lysine (Lys)",
    value: "K",
  },
  {
    label: "Methionine (Met)",
    value: "M",
  },
  {
    label: "Phenylalanine (Phe)",
    value: "F",
  },
  {
    label: "Proline (Pro)",
    value: "P",
  },
  {
    label: "Serine (Ser)",
    value: "S",
  },
  {
    label: "Threonine (Thr)",
    value: "T",
  },
  {
    label: "Tryptophan (Trp)",
    value: "W",
  },
  {
    label: "Tyrosine (Tyr)",
    value: "Y",
  },
  {
    label: "Valine (Val)",
    value: "V",
  },
];

export const aminoAcidMapper = (value: string | null): Option | null => {
  if (value == null) {
    return null;
  }
  const menuItem = amino_acid_menu_items.find((item) => item.value === value);
  return menuItem ? menuItem : null;
};
