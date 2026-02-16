import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Ready to Transform Your Factory?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join 500+ manufacturers already seeing measurable improvements in
          efficiency, quality, and profitability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.digifabrix.com/" target="blank">
            <button className="group flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Start Free Trial (30 days){" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <a href="https:digifabrix.com/book-demo" target="blank">
            <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-4 rounded-xl font-bold transition-all">
              Schedule a Demo
            </button>
          </a>
        </div>

        <p className="text-blue-100 text-sm mt-8">
          No credit card required. Full access to all features.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
