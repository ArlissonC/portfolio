import Header from "@/components/Header";
import Presentation from "@/components/Presentation";

const Home = () => {
  return (
    <>
      <section className="home w-screen h-screen">
        <Header />
        <Presentation />
        <div className="divider w-full h-64"></div>
      </section>
      <section className="h-[3000px]"></section>
    </>
  );
};

export default Home;
