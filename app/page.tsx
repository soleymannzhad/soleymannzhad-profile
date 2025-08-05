import HiroSection from "@/components/Hiro-section";
import Aboutme from "@/components/Aboutme";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full">
      <HiroSection />
      <Aboutme />
      <Journey />
      <Skills />
    </main>
  );
}
