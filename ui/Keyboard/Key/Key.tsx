import React from "react";
import KeyText from "./KeyText";
import { KeyProps } from "./Key.types";

export default function Key({
  top,
  topDescription,
  topMode,
  bottom,
  bottomDescription,
  bottomMode,
}: KeyProps) {
  return (
    <div className="flex aspect-square w-[calc(100%/16)] cursor-pointer flex-col overflow-hidden rounded-sm bg-slate-700 transition-all duration-150 select-none sm:hover:outline-4 sm:hover:outline-white">
      <KeyText
        keyLetter={top}
        text={topDescription}
        itemsAlign="start"
        mode={topMode}
      />
      <KeyText
        keyLetter={bottom}
        text={bottomDescription}
        itemsAlign="end"
        mode={bottomMode}
      />
    </div>
  );
}
