import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
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
      <Skills />
      <Projects />
    </main>
  );
};

export default Home;
