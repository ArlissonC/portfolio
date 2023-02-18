import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <section className="home w-screen h-screen">
        <Header />
        <Presentation />
        <div className="divider w-full h-64"></div>
      </section>
      <Skills />
    </>
  );
};

export default Home;
