import { About } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-slate-50 shadow-lg sticky top-0 py-2">
        <Header />
      </div>
      <div className="w-full max-w-[1400px] mx-auto">
        <HeroSection />
        <About />
      </div>
    </>
  );
}
