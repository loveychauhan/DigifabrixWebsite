import { Helmet } from "react-helmet-async";

const Price = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Manufacturing Software Solutions</title>
        <meta
          name="description"
          content="Simple and flexible pricing for EMS, MES, OEE, and shopfloor digitization solutions."
        />
        <meta
          name="keywords"
          content="manufacturing software pricing, EMS pricing, MES cost, industrial SaaS pricing"
        />
        <link rel="canonical" href="https://yourdomain.com/pricing" />
      </Helmet>
      <div className="bg-slate-950 text-slate-200 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Pricing
            </h1>
            <p className="text-slate-400 mt-4">
              Simple and flexible pricing for manufacturing teams.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Trial */}
            <div className="border border-slate-800 p-8 rounded-lg bg-slate-900/40">
              <h2 className="text-xl font-medium text-white mb-2">
                Free Trial
              </h2>

              <p className="text-slate-400 text-sm mb-6">
                Explore core features with limited access.
              </p>

              <p className="text-3xl font-semibold text-white mb-6">₹0</p>

              <ul className="space-y-3 text-sm text-slate-400 mb-8">
                <li>Basic dashboard access</li>
                <li>Limited device integration</li>
                <li>Standard reporting</li>
                <li>Email support</li>
              </ul>

              <a
                href="https://app.digifabrix.com/"
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold block text-center bg-blue-500 text-slate-100 px-8 py-4   rounded-xl   hover:bg-blue-600 transition-all hover:shadow-xl "
              >
                Start Free Trial
              </a>
            </div>

            {/* Premium */}
            <div className="border border-slate-700 p-8 rounded-lg bg-slate-900">
              <h2 className="text-xl font-medium text-white mb-2">Premium</h2>

              <p className="text-slate-400 text-sm mb-6">
                Full access for enterprise manufacturing operations.
              </p>

              <p className="text-3xl font-semibold text-white mb-6">
                Custom Pricing
              </p>

              <ul className="space-y-3 text-sm text-slate-400 mb-8">
                <li>Unlimited devices & users</li>
                <li>Advanced analytics & insights</li>
                <li>Real-time alerts & automation</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>

              <a
                href="https://app.digifabrix.com/"
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold block text-center bg-blue-500 text-slate-100 px-8 py-4   rounded-xl   hover:bg-blue-600 transition-all hover:shadow-xl "
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
