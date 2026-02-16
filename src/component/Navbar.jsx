import { Key, LogInIcon, LucideLogIn, Menu, Target, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SolutionsList from "./SolutionsList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const NAV_ROUTES = [
    { label: "Home", to: "/" },
    { label: "Solutions", to: "/solutions" },
    { label: "OEE", to: "/solutions/oee" },
    { label: "Features", to: "/features" },
    { label: "Testimonials", to: "/testimonials" },
  ];

  let timeout;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ease-in-out duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className=" p-1 rounded-lg">
            <img className="h-8 w-8" src="digifabrixLogo.png" alt="logo" />
          </div>
          <span
            className={`text-2xl font-bold tracking-tight text-[rgb(0,86,169)] `}
          >
            Digifabrix
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ROUTES.map((item) => {
            return (
              <div key={item.label}>
                {item.label === "Solutions" ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      clearTimeout(timeout);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      timeout = setTimeout(() => setIsHovered(false), 150);
                    }}
                  >
                    <Link
                      className="text-slate-500 hover:text-blue-500 font-medium transition-colors"
                      to={item.to}
                    >
                      Solutions
                    </Link>

                    {isHovered && <SolutionsList />}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to.toLowerCase()}
                    className="text-slate-500 relative hover:text-blue-500 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="flex">
            <a
              href="https://app.digifabrix.com/"
              target="blank"
              className="bg-slate-900 cursor-pointer text-white px-6 py-2.5 rounded-[10px] font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 flex flex-col items-center space-y-4 animate-in slide-in-from-top-5">
          {NAV_ROUTES.map((item) => (
            <Link
              key={item.label}
              to={item.to.toLowerCase()}
              className="text-slate-500 relative hover:text-blue-500 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
