import Header from "@/components/Header";
import Light from "@/components/Light";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <>
      <section className="home w-screen h-screen">
        <Header />
        <Presentation />
      </section>
      <section className="h-[3000px]"></section>
    </>
  );
}
