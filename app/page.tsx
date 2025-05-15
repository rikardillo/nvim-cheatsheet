import Key from "@/ui/Keyboard/Key/Key";
import Row from "@/ui/Keyboard/Row/Row";

export default function Home() {
  return (
    <div className="">
      <h2>NeoVim Graphical Cheat Sheet</h2>
      <Key
        top="Q"
        topDescription="ex mode"
        bottom="q•"
        bottomDescription="record macros"
        topMode="none"
        bottomMode="visual"
      />
      <Row initialKey="something" keys={["Q", "W", "E", "R", "T", "Y"]} />
    </div>
  );
}
