const DigifabrixHomeIntro = () => {
  return (
    <section className="pb-20 ">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Digitizing Manufacturing with Real-Time OEE Monitoring
        </h2>

        <p className="text-lg text-slate-600 mb-6">
          DigiFabrix is a manufacturing intelligence platform designed to help
          factories move from manual reporting to real-time production
          visibility. Our platform combines{" "}
          <strong>OEE monitoring software</strong>,
          <strong>shopfloor digitization</strong>, and
          <strong>manufacturing execution system (MES)</strong> capabilities to
          deliver actionable insights across machines, operators, and production
          lines.
        </p>

        <p className="text-slate-600">
          Learn more about our
          <a href="/solutions/oee" className="text-blue-600 font-semibold">
            {" "}
            OEE Monitoring Software
          </a>
          ,
          <a href="/solutions/mes" className="text-blue-600 font-semibold">
            {" "}
            Manufacturing Execution System
          </a>
          ,
          <a
            href="/solutions/shopfloor-digitization"
            className="text-blue-600 font-semibold"
          >
            {" "}
            Shopfloor Digitization
          </a>
          , and
          <a href="/solutions/dojo" className="text-blue-600 font-semibold">
            {" "}
            Workforce Intelligence Platform
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default DigifabrixHomeIntro;
