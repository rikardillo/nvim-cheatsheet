import React from "react";

const keyRow = [
  {
    top: "Q",
    topDescription: "ex mode",
    bottom: "q",
    bottomDescription: "record macros",
  },
];

type RowProps = {
  initialKey: string;
  keys: string[];
};

export default function Row({ initialKey, keys }: RowProps) {
  return <div>Row</div>;
}
