import Head from "next/head";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillsSection";

export default function Home() {
  return (
    <div className="container mx-auto bg-bgColor">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeroSection />
      <SkillSection />
    </div>
  );
}
