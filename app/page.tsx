import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Note to Shelf</Link>
            </div>
          </div>
        </nav>
        <div className="">
          <h1 className="text-4xl font-bold">{"Note to Shelf"}</h1>
          <p className="text-lg">
            {"Reflect on your life and save your thoughts to your shelf."}
          </p>
          <Button className="mt-4">
            <Link href="/journals"
            >{"Get Started"}
            </Link>
          </Button>
          </div>
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
