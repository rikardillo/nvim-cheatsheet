type InitialKeyProps = {
  initialKeyWidth: number | undefined;
  initialKey: string;
};

export default function InitialKey({
  initialKeyWidth,
  initialKey,
}: InitialKeyProps) {
  const width = `w-full max-width-[calc(120px*${initialKeyWidth})]`;
  return <div className="h-full border-2 border-white">{initialKey}</div>;
}
