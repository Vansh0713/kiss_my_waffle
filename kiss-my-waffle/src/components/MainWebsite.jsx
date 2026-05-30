import HeroSlider from "./sections/HeroSlider";
import Navbar from "./layout/Navbar";

export default function MainWebsite() {
  return (
    <>
      <HeroSlider />

      <Navbar />

      <section
        id="menu"
        className="min-h-screen bg-[#FFF8EF]"
      >
        Menu Section
      </section>

      <section
        id="about"
        className="min-h-screen bg-white"
      >
        About Section
      </section>
    </>
  );
}