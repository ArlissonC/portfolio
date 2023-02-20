import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main>
      <section className="home w-screen h-screen">
        <Header />
        <Presentation />
        <div className="divider w-full h-64"></div>
      </section>
      <div className="mx-auto max-w-7xl">
        <Skills />
        <Projects />
        <ProfessionalExperience />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
