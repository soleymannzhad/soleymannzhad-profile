import HiroSection from "@/components/Hiro-section";
import Aboutme from "@/components/Aboutme";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="w-full">
      <HiroSection />
      <Aboutme />
      <Journey />
      <Skills />
      <Work />
    </main>
  );
}
