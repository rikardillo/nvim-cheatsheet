type InitialKeyProps = {
  initialKeyWidth: number | undefined;
  initialKey?: string;
};

export default function InitialKey({
  initialKeyWidth,
  initialKey,
}: InitialKeyProps) {
  const width = `max-w-[calc((100%/16)*${initialKeyWidth})]`;

  console.log(initialKeyWidth, width);
  return (
    <div
      className={`flex grow items-center justify-center truncate rounded-lg p-4 uppercase opacity-40 select-none`}
      style={{
        maxWidth: `calc(100%/16*${initialKeyWidth})`,
      }}
    ></div>
  );
}
