import Daikin from "../../assets/BrandsLogo/Daikin.png";
import dhoot from "../../assets/BrandsLogo/dhoot.png";
import samsung from "../../assets/BrandsLogo/samsung.png";
import jbm from "../../assets/BrandsLogo/jbm.png";
import JTEKT from "../../assets/BrandsLogo/JTEKT.png";
import Kaga_Electronics_logo from "../../assets/BrandsLogo/Kaga_Electronics_logo.svg";
import MANN_HUMMEL from "../../assets/BrandsLogo/MANN+HUMMEL.png";
import Syrma_SGS from "../../assets/BrandsLogo/Syrma SGS.png";
import TDK from "../../assets/BrandsLogo/TDK.png";
import yazaki from "../../assets/BrandsLogo/yazaki.png";

const brands = [
  Daikin,
  dhoot,
  samsung,
  jbm,
  JTEKT,
  Kaga_Electronics_logo,
  MANN_HUMMEL,
  Syrma_SGS,
  TDK,
  yazaki,
];

const LogoCard = ({ src }) => {
  return (
    <div
      className="
      flex items-center justify-center
      w-40 h-20
      p-2
      border border-slate-100
      rounded-xl
      shadow-sm
      bg-slate-200
      mx-6
      transition-all
      hover:shadow-md
    "
    >
      <img
        src={src}
        alt="Manufacturing partner"
        className="
        h-8
        object-contain
        grayscale
        opacity-70
        transition
        hover:grayscale-0
        hover:opacity-100
      "
      />
    </div>
  );
};

const LogoMarquee = () => {
  return (
    <section
      id="marquee"
      className="cursor-pointer overflow-hidden max-w-[5xl] mx-auto w-[90vw] mb-12"
    >
      <a
        href="#marquee"
        className="text-center block text-sm tracking-widest text-slate-500 mb-12 uppercase"
      >
        Trusted by Manufacturing Teams
      </a>
      <div className="relative w-full">
        {/* edge gradients */}
        <div className="absolute left-0 top-0 h-full w-32 2xl:w-64 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 2xl:w-64 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

        {/* row 1 */}
        <div className="marquee-left mb-8">
          {[...brands, ...brands].map((logo, i) => (
            <LogoCard key={i} src={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
