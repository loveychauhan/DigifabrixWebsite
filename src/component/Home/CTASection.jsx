import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
          Start Monitoring Your Production in Real Time
        </h2>

        {/* Subtext */}
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Get complete visibility into machines, downtime, and production
          performance with DigiFabrix — built for modern manufacturing teams.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.digifabrix.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-200 transition">
              Start Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          <a
            href="https://digifabrix.com/book-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition">
              Book a Demo
            </button>
          </a>
        </div>

        {/* Trust Line */}
        <p className="text-slate-400 text-sm mt-6">
          No credit card required • Quick onboarding • Built for real shopfloors
        </p>
      </div>
    </section>
  );
};

export default CTASection;
