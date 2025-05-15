import { KeyProps } from "../ui/Keyboard/Key/Key.types";

const row2: {
  initialKey?: {
    button: string;
    width: number | undefined;
  };
  keys: KeyProps[];
} = {
  initialKey: {
    button: "tab",
    width: 1.5,
  },
  keys: [
    {
      top: "Q",
      topDescription: "ex mode",
      topMode: "insert",
      bottom: "q",
      bottomDescription: "record macros",
      bottomMode: "insert",
    },
    {
      top: "W",
      topDescription: "next WORD",
      topMode: "motion",
      bottom: "w",
      bottomDescription: "next word",
      bottomMode: "motion",
    },
    {
      top: "E",
      topDescription: "end WORD",
      topMode: "motion",
      bottom: "e",
      bottomDescription: "end word",
      bottomMode: "motion",
    },
    {
      top: "R",
      topDescription: "replace mode",
      topMode: "insert",
      bottom: "r",
      bottomDescription: "replace character",
      bottomMode: "insert",
    },
    {
      top: "T",
      topDescription: "back 'till",
      topMode: "motion",
      bottom: "t",
      bottomDescription: "'til",
      bottomMode: "motion",
    },
    {
      top: "Y",
      topDescription: "yank line",
      topMode: "insert",
      bottom: "y",
      bottomDescription: "yank",
      bottomMode: "visual",
    },
    {
      top: "U",
      topDescription: "undo line",
      topMode: "insert",
      bottom: "u",
      bottomDescription: "undo",
      bottomMode: "insert",
    },
    {
      top: "I",
      topDescription: "insert at beginning",
      topMode: "insert",
      bottom: "i",
      bottomDescription: "insert mode",
      bottomMode: "insert",
    },
    {
      top: "O",
      topDescription: "open above",
      topMode: "insert",
      bottom: "o",
      bottomDescription: "open below",
      bottomMode: "insert",
    },
    {
      top: "P",
      topDescription: "paste before",
      topMode: "insert",
      bottom: "p",
      bottomDescription: "paste after",
      bottomMode: "insert",
    },
    {
      top: "{",
      topDescription: "begin paragraph",
      topMode: "motion",
      bottom: "[•",
      bottomDescription: "misc",
      bottomMode: "motion",
    },
    {
      top: "}",
      topDescription: "end paragraph",
      topMode: "motion",
      bottom: "]•",
      bottomDescription: "misc",
      bottomMode: "motion",
    },
    {
      top: "|",
      topDescription: "begin at line / goto column",
      topMode: "motion",
      bottom: "•",
      bottomDescription: "unused",
      bottomMode: "none",
    },
  ],
};

export default row2;
