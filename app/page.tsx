import HiroSection from "@/components/Hiro-section";
import Projectsweb from "@/components/projects";
import Aboutme from "@/components/Aboutme";
import Journey from "@/components/Journey";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      <HiroSection />
      <Aboutme />
    <Journey/>
      <Projectsweb />
    </main>
  );
}
