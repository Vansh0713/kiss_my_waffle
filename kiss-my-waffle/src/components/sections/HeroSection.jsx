import logo from "../../assets/images/logo.png";
import desktopBg from "../../assets/images/hero-desktop.png";
import tabletBg from "../../assets/images/hero-tablet.png";
import mobileBg from "../../assets/images/hero-mobile.png";

export default function HeroSection({ onEnter }) {
  const hour = new Date().getHours();

  let greeting = "Welcome";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Desktop Background */}
      <img
        src={desktopBg}
        alt=""
        className="hidden lg:block absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
      />

      {/* Tablet Background */}
      <img
        src={tabletBg}
        alt=""
        className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
      />

      {/* Mobile Background */}
      <img
        src={mobileBg}
        alt=""
        className="block md:hidden absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Kiss My Waffle"
          className="w-28 md:w-36 lg:w-44 mb-5"
        />

        {/* Greeting */}
        <h1 className="logo-font text-white text-5xl md:text-6xl lg:text-7xl">
          {greeting}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-white/90 text-base md:text-xl">
          Your next favourite waffle is waiting —
          crispy, golden and made with love.
        </p>

        {/* Explore Button */}
        

        {/* Starbucks Style Arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <button
            onClick={onEnter}
            className="
              w-12
              h-12
              rounded-full
              bg-white
              text-black
              text-xl
              shadow-xl
              animate-bounce
              flex
              items-center
              justify-center
            "
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}