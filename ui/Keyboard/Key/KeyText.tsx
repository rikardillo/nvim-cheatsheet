import { NeoVimModes } from "./Key.types";

type KeyTextProps = {
  keyLetter: string;
  text: string | undefined;
  itemsAlign: "start" | "end";
  mode: NeoVimModes;
};

export default function KeyText({
  keyLetter,
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
      className={`vim-cmds-text flex h-1/2 gap-2 overflow-hidden md:p-0.5 lg:p-1 ${itemsAlign === "start" ? "items-start" : "items-end"} ${modeColor} `}
    >
      <p className="key md:text-md font-bold transition-all duration-150 sm:text-sm lg:text-lg">
        {keyLetter}
      </p>
      <p className="description w-full grow text-right text-[4px] leading-[8px] text-white/50 transition-all duration-150 md:text-[6px] lg:text-[8px] lg:leading-[14px] xl:text-[12px]">
        {text}
      </p>
    </div>
  );
}
