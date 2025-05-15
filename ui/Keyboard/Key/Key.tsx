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
    <div className="bg-slate-700 aspect-square max-w-[120px] rounded-lg flex flex-col overflow-hidden select-none sm:hover:outline-4 sm:hover:outline-white transition-all duration-150 cursor-pointer w-full">
      <KeyText
        keybutton={top}
        text={topDescription}
        itemsAlign="start"
        mode={topMode}
      />
      <KeyText
        keybutton={bottom}
        text={bottomDescription}
        itemsAlign="end"
        mode={bottomMode}
      />
    </div>
  );
}
