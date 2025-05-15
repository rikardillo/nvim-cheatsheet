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
      className={`flex h-1/2 lg:p-2 lg:gap-[6px] md:gap-[4px] md:p-1 gap-[2px]
        ${itemsAlign === "start" ? "items-start" : "items-end"}
        ${modeColor}
        `}
    >
      <p className="key lg:text-xl md:text-lg sm:text-lg transition-all duration-150">
        {keybutton}
      </p>
      <p className="text-right w-full description xl:text-[12px] lg:text-[10px] md:text-[8px] text-[8px] leading-tight transition-all duration-150 grow">
        {text}
      </p>
    </div>
  );
}
