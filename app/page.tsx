import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      hello world
      <ModeToggle />
      <div className="flex gap-5 flex-wrap">
        <Link href="/sign-in">login</Link>
        <Link href="/email-verify">login</Link>
        <Link href="/reset-password">login</Link>
      </div>
    </main>
  );
}
