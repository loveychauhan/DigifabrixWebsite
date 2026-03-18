"use client";

import { Users, Target, Lightbulb, Zap } from "lucide-react";
// import carrerHeroImage from "../assets/featuresAssets/carrerHeroImage.jpeg";
import carrerHeroImage from "/digifabrixLogo.svg";
import digifabrixTeam from "../assets/digifabrixTeam.jpg";

const values = [
  {
    title: "Ownership",
    desc: "We trust people to take responsibility and drive meaningful outcomes.",
    icon: Target,
  },
  {
    title: "Curiosity",
    desc: "We encourage asking questions, learning fast, and exploring new ideas.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    desc: "Our work improves how real factories operate and make decisions.",
    icon: Zap,
  },
  {
    title: "Teamwork",
    desc: "Great products are built through collaboration and shared goals.",
    icon: Users,
  },
];

const perks = [
  "Work on real industrial problems",
  "Modern tech stack (React, Node, Cloud)",
  "Direct exposure to manufacturing technology",
  "Opportunity to grow with a fast-moving startup",
  "Ownership and freedom to experiment",
];

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="border border-slate-200 rounded-xl p-6 bg-white">
    <Icon className="h-6 w-6 text-blue-600 mb-3" />
    <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
    <p className="text-slate-600 mt-2">{desc}</p>
  </div>
);

export default function CareerPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#0d1019] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Join Our Team
            </h1>

            <p className="mt-5 text-slate-300 text-lg">
              At DigiFabrix we are building technology that helps factories
              become smarter, more efficient, and more connected. If you enjoy
              solving real-world engineering problems, you’ll feel at home here.
            </p>

            <div className="my-10 font-medium  cursor-pointer">
              <a
                href="https://www.linkedin.com/company/digifabrix-technologies-private-limited"
                target="blank"
                rel="noopener noreferrer"
                className=" bg-slate-100 text-slate-700 border-1 border-slate-700 px-6 py-3 rounded-[10px] "
              >
                See Open Positions
              </a>
            </div>
          </div>

          <img
            src={carrerHeroImage}
            alt="DigiFabrix team"
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Building the Future of Smart Manufacturing
        </h2>

        <p className="text-lg text-slate-600">
          DigiFabrix helps manufacturers move from manual processes to
          data-driven operations. Our platform brings visibility to machines,
          production lines, and factory operations so teams can make better
          decisions in real time.
        </p>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Values
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <ul className="space-y-4 text-lg text-slate-700">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LIFE AT DIGIFABRIX */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={digifabrixTeam}
          alt="Life at DigiFabrix"
          className="rounded-lg object-cover"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Life at DigiFabrix
          </h2>

          <p className="text-slate-600 mb-4">
            We are a small but passionate team working at the intersection of
            manufacturing, data, and software engineering.
          </p>

          <p className="text-slate-600">
            Our work environment encourages ownership, experimentation, and
            collaboration. Everyone contributes ideas, and everyone has the
            opportunity to grow.
          </p>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Apply</h2>

        <p className="text-slate-600 mb-6">
          If you're passionate about building technology for the manufacturing
          industry, we'd love to hear from you.
        </p>

        <p className="text-slate-600 mb-6">
          Send your resume and a short note about yourself to:
        </p>

        <p className="text-lg font-semibold text-blue-600">
          careers@digifabrix.com
        </p>

        <p className="text-sm text-slate-500 mt-4">
          You can also follow us on LinkedIn for future opportunities.
        </p>
      </section>
    </main>
  );
}
