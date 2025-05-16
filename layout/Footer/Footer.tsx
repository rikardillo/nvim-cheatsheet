import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 text-center text-xs">
      Visit my GitHub Page:{" "}
      <Link href={"https://github.com/rikardillo"}>rikardillo</Link>
    </footer>
  );
}
