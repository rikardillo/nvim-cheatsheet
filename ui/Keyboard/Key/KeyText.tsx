import { NeoVimModes } from "./Key.types";

type KeyTextProps = {
  keybutton: string;
  text: string | undefined;
  itemsAlign: "start" | "end";
  mode: NeoVimModes;
};

export default function KeyText({
  keybutton,
  text,
  itemsAlign,
  mode,
}: KeyTextProps) {
  const modeColors = {
    none: "bg-nvim-mode-none",
    insert: "bg-nvim-mode-normal",
    visual: "bg-nvim-mode-visual",
    motion: "bg-nvim-mode-motion",
  } as const;

  const modeColor = modeColors[mode];

  return (
    <div
      className={`flex h-1/2 p-2 lg:gap-4 md:gap-2 
        ${itemsAlign === "start" ? "items-start" : "items-end"}
        ${modeColor}
        `}
    >
      <p className="key lg:text-2xl md:text-xl sm:text-lg transition-all duration-150">{keybutton}</p>
      <p className="text-right w-full description xl:text-[12px] lg:text-[10px] md:text-[8px] text-[8px] leading-tight transition-all duration-150">{text}</p>
    </div>
  );
}
