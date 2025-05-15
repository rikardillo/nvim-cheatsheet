import React from "react";
import Key from "../Key/Key";
import { KeyProps } from "../Key/Key.types";
import InitialKey from "../Key/InitialKey";

type RowProps = {
  initialKey?: string;
  initialKeyWidth?: number;
  row: any;
};

export default function Row({ row, initialKey, initialKeyWidth }: RowProps) {
  return (
    <div className="flex gap-2">
      {initialKey && (
        <InitialKey initialKey={initialKey} initialKeyWidth={initialKeyWidth} />
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
