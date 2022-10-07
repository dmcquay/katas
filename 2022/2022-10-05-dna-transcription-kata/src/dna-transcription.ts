type DnaNuc = "A" | "T" | "C" | "G";
type RnaNuc = "U" | "A" | "G" | "C";

type Peptide =
  | "Ala"
  | "Arg"
  | "Asn"
  | "Asp"
  | "Asx"
  | "Cys"
  | "Glu"
  | "Gln"
  | "Glx"
  | "Gly"
  | "His"
  | "Ile"
  | "Leu"
  | "Lys"
  | "Met"
  | "Phe"
  | "Pro"
  | "Ser"
  | "Thr"
  | "Trp"
  | "Tyr"
  | "Val";

type ShortPeptide =
  | "A"
  | "R"
  | "N"
  | "D"
  | "B"
  | "C"
  | "E"
  | "Q"
  | "Z"
  | "G"
  | "H"
  | "I"
  | "L"
  | "K"
  | "M"
  | "F"
  | "P"
  | "S"
  | "T"
  | "W"
  | "Y"
  | "V";

const peptideToShortPeptideMap: Record<Peptide, ShortPeptide> = {
  Ala: "A",
  Arg: "R",
  Asn: "N",
  Asp: "D",
  Asx: "B",
  Cys: "C",
  Glu: "E",
  Gln: "Q",
  Glx: "Z",
  Gly: "G",
  His: "H",
  Ile: "I",
  Leu: "L",
  Lys: "K",
  Met: "M",
  Phe: "F",
  Pro: "P",
  Ser: "S",
  Thr: "T",
  Trp: "W",
  Tyr: "Y",
  Val: "V",
};

const codonToPeptideMap: Record<string, Peptide | "Stop"> = {
  UUU: "Phe",
  UCU: "Ser",
  UAU: "Tyr",
  UGU: "Cys",
  UUC: "Phe",
  UCC: "Ser",
  UAC: "Tyr",
  UGC: "Cys",
  UUA: "Leu",
  UCA: "Ser",
  UAA: "Stop",
  UGA: "Stop",
  UUG: "Leu",
  UCG: "Ser",
  UAG: "Stop",
  UGG: "Trp",
  CUU: "Leu",
  CCU: "Pro",
  CAU: "His",
  CGU: "Arg",
  CUC: "Leu",
  CCC: "Pro",
  CAC: "His",
  CGC: "Arg",
  CUA: "Leu",
  CCA: "Pro",
  CAA: "Gln",
  CGA: "Arg",
  CUG: "Leu",
  CCG: "Pro",
  CAG: "Gln",
  CGG: "Arg",
  AUU: "Ile",
  ACU: "Thr",
  AAU: "Asn",
  AGU: "Ser",
  AUC: "Ile",
  ACC: "Thr",
  AAC: "Asn",
  AGC: "Ser",
  AUA: "Ile",
  ACA: "Thr",
  AAA: "Lys",
  AGA: "Arg",
  AUG: "Met",
  ACG: "Thr",
  AAG: "Lys",
  AGG: "Arg",
  GUU: "Val",
  GCU: "Ala",
  GAU: "Asp",
  GGU: "Gly",
  GUC: "Val",
  GCC: "Ala",
  GAC: "Asp",
  GGC: "Gly",
  GUA: "Val",
  GCA: "Ala",
  GAA: "Glu",
  GGA: "Gly",
  GUG: "Val",
  GCG: "Ala",
  GAG: "Glu",
  GGG: "Gly",
};

const dnaToRnaMap: Record<DnaNuc, RnaNuc> = {
  A: "U",
  T: "A",
  C: "G",
  G: "C",
};

export const toDna = (input: string): DnaNuc[] => {
  return input.split("") as DnaNuc[];
};

export const toRna = (input: string): RnaNuc[] => {
  return input.split("") as RnaNuc[];
};

const dnaToRna = (dnaSeq: DnaNuc[]): RnaNuc[] => {
  return dnaSeq.reverse().map((dnaNuc) => dnaToRnaMap[dnaNuc]);
};

const rnaToPeptides = (rnaSeq: RnaNuc[]): Peptide[] => {
  const peptides: Peptide[] = [];
  let i = 0;

  for (; i < rnaSeq.length; i++) {
    const codon = rnaSeq.slice(i, i + 3).join("");
    const maybeMet = codonToPeptideMap[codon];
    if (maybeMet === "Met") {
      peptides.push(maybeMet);
      i += 3;
      break;
    }
  }

  if (peptides.length === 0) return [];

  let stopFound = false;
  for (; i < rnaSeq.length; i += 3) {
    const codon = rnaSeq.slice(i, i + 3).join("");
    const peptide = codonToPeptideMap[codon];
    if (peptide === "Stop") {
      stopFound = true;
      break;
    }
    peptides.push(peptide);
  }

  if (!stopFound) return [];
  return peptides;
};

const peptidesToShortPeptidesString = (peptides: Peptide[]): string => {
  return peptides.map((x) => peptideToShortPeptideMap[x]).join("");
};

export const transcribeDna = (dnaStr: string): string => {
  const dna = toDna(dnaStr);
  const rna = dnaToRna(dna);
  const peps = rnaToPeptides(rna);
  const strPeps = peptidesToShortPeptidesString(peps);
  return strPeps;
};

export const _forTestingOnly = {
  peptidesToShortPeptidesString,
  rnaToPeptides,
  dnaToRna,
};
