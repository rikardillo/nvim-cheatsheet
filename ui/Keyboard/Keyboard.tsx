import { KeyboardRow } from "./Key/Key.types";
import Row from "./Row/Row";

interface KeyboardProps {
  rows: KeyboardRow[];
}

export default function Keyboard({ rows }: KeyboardProps) {
  return (
    <div>
      {rows.map((row, i) => (
        <Row initialKey={row.initialKey} row={row.keys} key={i} />
      ))}
    </div>
  );
}
