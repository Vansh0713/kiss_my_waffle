import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-slider");

      if (!hero) return;

      const heroHeight = hero.offsetHeight;

      setSticky(window.scrollY >= heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Menu",
    "About",
    "Gallery",
    "Franchise",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`
          w-full
          bg-[#FFF8EF]
          border-b
          border-orange-100
          z-50
          transition-all
          duration-300
          ${
            sticky
              ? "fixed top-0 left-0 shadow-lg"
              : "relative"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-28 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Kiss My Waffle"
                className="h-24 md:h-28 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="
                      logo-font
                      text-[22px]
                      xl:text-[24px]
                      text-[#6B3E12]
                      hover:text-orange-500
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <button
              className="
                hidden lg:block
                bg-gradient-to-r
                from-orange-500
                to-amber-600
                text-white
                px-6
                py-3
                rounded-full
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
                logo-font
                text-xl
              "
            >
              Order Now
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-4xl text-[#6B3E12]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFF8EF] shadow-xl px-6 py-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    block
                    logo-font
                    text-3xl
                    text-[#6B3E12]
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="
              mt-6
              w-full
              bg-gradient-to-r
              from-orange-500
              to-amber-600
              text-white
              py-3
              rounded-full
              logo-font
              text-xl
            "
          >
            Order Now
          </button>
        </div>
      )}
    </>
  );
}