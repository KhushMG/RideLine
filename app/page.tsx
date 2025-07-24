import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
        <div> 
          Landing Page
        </div>
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <ThemeSwitcher />
        </footer>
    </main>
  );
}
