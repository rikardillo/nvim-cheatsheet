import Row from "@/ui/Keyboard/Row/Row";
import row1 from "@/rows/row1";
import row2 from "@/rows/row2";
import row3 from "@/rows/row3";
import row4 from "@/rows/row4";
import Keyboard from "@/ui/Keyboard/Keyboard";

const rows = [row1, row2, row3, row4];

export default function Home() {
  return (
    <div className="flex flex-col gap-2 grow">
      <h2 className="p-2 text-4xl font-bold tracking-tight">
        NeoVim Graphical Cheat Sheet
      </h2>
      <section className="flex grow items-center justify-center h-full ">
        <Keyboard rows={rows} />
      </section>
    </div>
  );
}
