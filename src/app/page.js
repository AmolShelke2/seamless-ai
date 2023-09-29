import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="h-full w-full max-w-[1400px] mx-auto bg-white">
      <Header />
      <HeroSection />
    </main>
  );
}
