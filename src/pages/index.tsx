import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import bg from "@/assets/images/bg-home.jpg";
import Head from "next/head";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfólio | Arlisson Costa - Desenvolvedor Front-end</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Desenvolvedor com foco em Front-end utilizando React e Next.js."
        />
        <meta
          name="keywords"
          content="sites, sistemas web, desenvolvimento, frontend, arlisson costa, programador, arlisson, front-end, freelancer, freela, website, portfolio"
        />
        <meta name="author" content="Arlisson Costa" />
      </Head>
      <main>
        <section
          style={{ backgroundImage: `url(${bg.src})` }}
          className="home w-screen h-screen mb-28"
          id="home"
        >
          <Header />
          <Presentation />
          <div className="divider w-full h-64"></div>
        </section>
        <div className="mx-auto max-w-7xl px-2">
          <AboutMe />
          <Skills />
          <Projects />
          <ProfessionalExperience />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
