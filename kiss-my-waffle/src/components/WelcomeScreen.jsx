import logo from "../assets/images/logo.png";
import bg from "../assets/images/hero-desktop.png";

export default function WelcomeScreen({ onEnter }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <img
          src={logo}
          alt="Kiss My Waffle"
          className="w-32 md:w-44 mb-5"
        />

        <h1 className="logo-font text-white text-5xl md:text-7xl">
          {greeting}
        </h1>

        <p className="mt-4 text-white/90 text-lg md:text-2xl">
          Bite Into Happiness
        </p>

        <div
          onClick={onEnter}
          className="absolute bottom-10 cursor-pointer"
        >
          <div className="animate-bounce w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}