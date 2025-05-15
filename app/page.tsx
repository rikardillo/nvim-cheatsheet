import Row from "@/ui/Keyboard/Row/Row";
import row1 from "@/rows/row1";
import row2 from "@/rows/row2";
import row3 from "@/rows/row3";
import row4 from "@/rows/row4";

const rows = [row1, row2, row3, row4];

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <h2>NeoVim Graphical Cheat Sheet</h2>
      {/* <Row initialKey="something" keys={["Q", "W", "E", "R", "T", "Y"]} /> */}
      {rows.map((row, i) => (
        <Row initialKey="" row={row} key={i} />
      ))}
    </div>
  );
}
