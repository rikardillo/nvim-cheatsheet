import { KeyboardRow } from "../ui/Keyboard/Key/Key.types";

const row4: KeyboardRow = {
  initialKey: {
    button: "shift",
    width: 2.5,
  },
  keys: [
    {
      top: "Z•",
      topDescription: "quit",
      topMode: "none",
      bottom: "z•",
      bottomDescription: "extra cmds",
      bottomMode: "none",
    },
    {
      top: "X",
      topDescription: "back-space",
      topMode: "insert",
      bottom: "x",
      bottomDescription: "delete char.",
      bottomMode: "insert",
    },
    {
      top: "C",
      topDescription: "change to column",
      topMode: "insert",
      bottom: "c",
      bottomDescription: "change",
      bottomMode: "visual",
    },
    {
      top: "V",
      topDescription: "search backwards",
      topMode: "insert",
      bottom: "v",
      bottomDescription: "visual mode",
      bottomMode: "insert",
    },
    {
      top: "B",
      topDescription: "prev. WORD",
      topMode: "motion",
      bottom: "b",
      bottomDescription: "prev. word",
      bottomMode: "motion",
    },
    {
      top: "N",
      topDescription: "find prev.",
      topMode: "motion",
      bottom: "n",
      bottomDescription: "find next",
      bottomMode: "motion",
    },
    {
      top: "M",
      topDescription: "screen middle",
      topMode: "motion",
      bottom: "m",
      bottomDescription: "set mark",
      bottomMode: "insert",
    },
    {
      top: "<",
      topDescription: "un-indent",
      topMode: "visual",
      bottom: ",",
      bottomDescription: "reverse (t/T/f/F)",
      bottomMode: "motion",
    },
    {
      top: ">",
      topDescription: "indent",
      topMode: "visual",
      bottom: ".",
      bottomDescription: "repeat cmd",
      bottomMode: "insert",
    },
    {
      top: "?",
      topDescription: "find (reverse)",
      topMode: "motion",
      bottom: "/",
      bottomDescription: "find",
      bottomMode: "motion",
    },
  ],
};

export default row4;
