import { KeyProps } from "../ui/Keyboard/Key/Key.types";

const row1: {
  initialKey?: {
    button: string;
    width: number | undefined;
  };
  keys: KeyProps[];
} = {
  keys: [
    {
      top: "~",
      topDescription: "toggle case",
      topMode: "insert",
      bottom: "`",
      bottomDescription: "jump to mark",
      bottomMode: "motion",
    },
    {
      top: "!",
      topDescription: "external filter",
      topMode: "visual",
      bottom: "1",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "@",
      topDescription: "play macro",
      topMode: "motion",
      bottom: "2",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "#",
      topDescription: "search backwards",
      topMode: "motion",
      bottom: "3",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "$",
      topDescription: "end of line",
      topMode: "motion",
      bottom: "4",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "%",
      topDescription: "match (bracket)",
      topMode: "motion",
      bottom: "5",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "^",
      topDescription: `"soft" begin of line`,
      topMode: "insert",
      bottom: "6",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "&",
      topDescription: "repeat :s",
      topMode: "motion",
      bottom: "7",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "*",
      topDescription: "search forward",
      topMode: "motion",
      bottom: "8",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: "(",
      topDescription: "begin sequence",
      topMode: "motion",
      bottom: "9",
      bottomDescription: undefined,
      bottomMode: "none",
    },
    {
      top: ")",
      topDescription: "end sequence",
      topMode: "motion",
      bottom: "0",
      bottomDescription: `"hard" begin of line`,
      bottomMode: "motion",
    },
    {
      top: "_",
      topDescription: `"soft" begin of line down`,
      topMode: "motion",
      bottom: "-",
      bottomDescription: "prev. line",
      bottomMode: "motion",
    },
    {
      top: "+",
      topDescription: "next line",
      topMode: "motion",
      bottom: "=",
      bottomDescription: "auto format",
      bottomMode: "visual",
    },
  ],
};

export default row1;
