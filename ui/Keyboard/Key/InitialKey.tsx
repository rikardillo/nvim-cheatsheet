type InitialKeyProps = {
  initialKeyWidth: number | undefined;
  initialKey: string;
};

export default function InitialKey({
  initialKeyWidth,
  initialKey,
}: InitialKeyProps) {
  const width = `max-w-[calc((100%/16)*${initialKeyWidth})]`;

  console.log(initialKeyWidth, width);
  return (
    <div
      className={`border-2 border-white rounded-lg grow flex items-center justify-center p-4 uppercase opacity-40 select-none truncate `}
      style={{
        maxWidth: `calc(100%/16*${initialKeyWidth})`,
      }}
    >
      {initialKey}
    </div>
  );
}
