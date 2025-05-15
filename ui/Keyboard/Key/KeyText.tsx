import { NeoVimModes } from "./Key.types";

type KeyTextProps = {
  keybutton: string;
  text: string;
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
      className={`flex grow p-2 gap-4
        ${itemsAlign === "start" ? "items-start" : "items-end"}
        ${modeColor}
        `}
    >
      <p className="key text-2xl">{keybutton}</p>
      <p className="text-right w-full description text-xs">{text}</p>
    </div>
  );
}
