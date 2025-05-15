import React from "react";
import Key from "../Key/Key";
import { KeyProps } from "../Key/Key.types";
import InitialKey from "../Key/InitialKey";

type RowProps = {
  initialKey?: {
    button: string;
    width: number | undefined;
  };
  row: any;
};

export default function Row({ row, initialKey }: RowProps) {
  return (
    <div className="flex gap-[.4%]">
      {initialKey && (
        <InitialKey
          initialKey={initialKey.button}
          initialKeyWidth={initialKey.width}
        />
      )}

      {row.map((key: KeyProps, i: number) => (
        <Key
          key={i}
          top={key.top}
          topDescription={key.topDescription}
          topMode={key.topMode}
          bottom={key.bottom}
          bottomDescription={key.bottomDescription}
          bottomMode={key.bottomMode}
        />
      ))}
    </div>
  );
}
