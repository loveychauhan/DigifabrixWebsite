import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SolutionsList from "./SolutionsList";
import favicon from "/favicon.ico";
import { useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const NAV_ROUTES = [
    { label: "Solutions", to: "/solutions" },
    { label: "OEE", to: "/solutions/oee" },
    { label: "Features", to: "/features" },
    { label: "Testimonials", to: "/testimonials" },
  ];

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all text-sm ease-in-out duration-300 py-2 ${scrolled ? "backdrop-blur-xl shadow-md " : "bg-transparent "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className=" p-1 rounded-lg">
              <img
                className="h-8 w-8"
                src={favicon}
                alt="DigiFabrix digital manufacturing platform logo"
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight text-[rgb(0,86,169)] `}
            >
              Digifabrix
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ROUTES.map((item) => {
            return (
              <div key={item.label}>
                {item.label === "Solutions" ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      clearTimeout(timeoutRef.current);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(
                        () => setIsHovered(false),
                        150,
                      );
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
                    className="text-slate-500 relative text-sm hover:text-blue-500 font-medium transition-colors"
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
              className="bg-black cursor-pointer text-white px-6 py-2.5 rounded-[10px] font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
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
              to={item.to}
              className="text-slate-500 text-sm relative hover:text-blue-500 font-medium transition-colors"
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
