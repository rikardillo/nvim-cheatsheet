import React from "react";
import Key from "../Key/Key";
import { KeyProps } from "../Key/Key.types";

type RowProps = {
  initialKey?: string;
  row: any;
};

export default function Row({ row }: RowProps) {
  return (
    <div className="flex gap-2">
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
