import Head from "next/head";
import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import SkillSection from "../components/SkillsSection";

export default function Home() {
  let clickRef = useRef();
  const scrollToView = (ref) => {
    if (ref?.current) clickRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container xl:px-20 mx-auto bg-bgColor">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeroSection onClick={() => scrollToView(clickRef)} />
      <SkillSection clickRef={clickRef} />
      <Projects />
    </div>
  );
}
