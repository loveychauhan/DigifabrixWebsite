import { FadeUp } from "../../Constants/Oee_constants";

const OEE_CTA = () => {
  return (
    <section className="py-28 bg-slate-950 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
          Start tracking{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            OEE
          </span>{" "}
          before your next shift.
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Replace manual reporting and guesswork with real-time production
          visibility. DigiFabrix connects directly to your machines and starts
          calculating OEE automatically from the first shift.
        </p>

        <div className="flex justify-center">
          <a
            href="https://app.digifabrix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-cyan-400 text-slate-950 font-medium text-sm tracking-wide hover:brightness-110 transition"
          >
            Claim Your One Month Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default OEE_CTA;
