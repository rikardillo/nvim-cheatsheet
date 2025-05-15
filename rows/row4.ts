import { KeyboardRow } from "../ui/Keyboard/Key/Key.types";

const row4: KeyboardRow = {
  initialKey: {
    button: "shift",
    width: 2.5,
  },
  keys: [
    {
      top: "Z",
      topDescription: "ex mode",
      topMode: "insert",
      bottom: "z",
      bottomDescription: "record macros",
      bottomMode: "insert",
    },
    {
      top: "X",
      topDescription: "next WORD",
      topMode: "motion",
      bottom: "x",
      bottomDescription: "next word",
      bottomMode: "motion",
    },
    {
      top: "C",
      topDescription: "end WORD",
      topMode: "motion",
      bottom: "c",
      bottomDescription: "end word",
      bottomMode: "motion",
    },
    {
      top: "V",
      topDescription: "replace mode",
      topMode: "insert",
      bottom: "v",
      bottomDescription: "replace character",
      bottomMode: "insert",
    },
    {
      top: "B",
      topDescription: "back 'till",
      topMode: "motion",
      bottom: "b",
      bottomDescription: "'til",
      bottomMode: "motion",
    },
    {
      top: "N",
      topDescription: "yank line",
      topMode: "insert",
      bottom: "n",
      bottomDescription: "yank",
      bottomMode: "visual",
    },
    {
      top: "M",
      topDescription: "undo line",
      topMode: "insert",
      bottom: "m",
      bottomDescription: "undo",
      bottomMode: "insert",
    },
    {
      top: "<",
      topDescription: "insert at beginning",
      topMode: "insert",
      bottom: ",",
      bottomDescription: "insert mode",
      bottomMode: "insert",
    },
    {
      top: ">",
      topDescription: "open above",
      topMode: "insert",
      bottom: ".",
      bottomDescription: "open below",
      bottomMode: "insert",
    },
    {
      top: "?",
      topDescription: "paste before",
      topMode: "insert",
      bottom: "/",
      bottomDescription: "paste after",
      bottomMode: "insert",
    },
  ],
};

export default row4;
