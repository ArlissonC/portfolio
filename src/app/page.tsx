"use client";
import BackgroundVideo from "@/components/BackgroundVideo";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MyExperience from "@/components/MyExperience";
import Presentation from "@/components/Presentation";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Arlisson Costa - Desenvolvedor Front-end</title>
      </Head>
      <main>
        <section className="home w-screen h-screen mb-28" id="home">
          <BackgroundVideo />
          <Header />
          <Presentation />
          <div className="divider w-full h-64"></div>
        </section>
        <div className="mx-auto max-w-7xl px-2">
          <MyExperience />
          <Projects />
          <ProfessionalExperience />
          <Contact />
        </div>
      </main>
    </>
  );
}
