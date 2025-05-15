type InitialKeyProps = {
  initialKeyWidth: number | undefined;
  initialKey: string;
};

export default function InitialKey({
  initialKeyWidth,
  initialKey,
}: InitialKeyProps) {
  const width = `w-full max-width-[calc(120px*${initialKeyWidth})]`;
  return (
    <div
      className={`h-full border-2 border-white grow rounded-lg min-h-[120px] flex items-center justify-center p-4 uppercase opacity-40 select-none ${width}`}
    >
      {initialKey}
    </div>
  );
}
