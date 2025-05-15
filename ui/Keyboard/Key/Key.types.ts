export type NeoVimModes = "none" | "visual" | "insert" | "motion";

export type KeyProps = {
  top: string;
  topDescription: string;
  topMode: NeoVimModes;
  bottom: string;
  bottomDescription: string;
  bottomMode: NeoVimModes;
};
