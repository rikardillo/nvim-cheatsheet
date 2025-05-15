type KeyTextProps = {
  keymap: string;
  text: string;
  itemsAlign: "start" | "end";
  mode: "none" | "normal" | "visual" | "motion";
};

export default function KeyText({
  keymap,
  text,
  itemsAlign,
  mode,
}: KeyTextProps) {
  const modeColors = {
    none: "bg-nvim-mode-none",
    normal: "bg-nvim-mode-normal",
    visual: "bg-nvim-mode-visual",
    motion: "bg-nvim-mode-motion",
  } as const;

  const modeColor = modeColors[mode];

  return (
    <div
      className={`flex grow p-2 
        ${itemsAlign === "start" ? "items-start" : "items-end"}
        ${modeColor}
        `}
    >
      <div className="key text-2xl">{keymap}</div>
      <div className="text-right w-full description text-xs">{text}</div>
    </div>
  );
}
