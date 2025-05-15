import React from "react";
import KeyText from "./KeyText";

type NeoVimModes = "none" | "visual" | "normal" | "motion";

type KeyProps = {
  top: string;
  topDescription: string;
  topMode: NeoVimModes;
  bottom: string;
  bottomDescription: string;
  bottomMode: NeoVimModes;
};

export default function Key({
  top,
  topDescription,
  topMode,
  bottom,
  bottomDescription,
  bottomMode,
}: KeyProps) {
  return (
    <div className="bg-slate-700 aspect-square max-w-[120px] rounded-lg flex flex-col overflow-hidden select-none sm:hover:outline-4 sm:hover:outline-white transition-all duration-150 cursor-pointer ">
      <KeyText
        keymap={top}
        text={topDescription}
        itemsAlign="start"
        mode={topMode}
      />
      <KeyText
        keymap={bottom}
        text={bottomDescription}
        itemsAlign="end"
        mode={bottomMode}
      />
    </div>
  );
}
