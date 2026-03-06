import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

function Bullet({ children }) {
  return (
    <li className="flex gap-2 text-slate-600">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
      <span>{children}</span>
    </li>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function BenchmarkYourTenders() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo1.png" alt="SLT logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/stories/procurement-as-value"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              ← Back
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Do You Benchmark Your Tenders?
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          6 March 2026 • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 text-lg text-slate-600">
          For me, benchmarking is one of the foundations of any high-performing
          procurement function because it tests true competitiveness.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Throughout my procurement career, one practice that feels obvious, yet
          is still underplayed and under-executed, is benchmarking tenders to
          support tender awards.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Running a compliant tender is paramount. Comparing bids is necessary.
          But neither, on its own, proves competitiveness.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Benchmarking is what tells you whether your tender result is genuinely
          market-aligned.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Too often, teams choose a winner based purely on relative bid
          comparison. The better question for me is:
        </p>

        <p className="mt-4 text-lg font-semibold text-slate-800">
          How does this result stand up against the wider market and real cost
          drivers?
        </p>

        <div className="mt-10 space-y-5">
          <SectionCard title="1️⃣ Benchmark Against Previous Tenders">
            <p className="text-slate-600">
              Compare against historical awards, prior rate cards, and earlier
              bid spreads.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Expose pricing trends over time</Bullet>
              <Bullet>Understand supplier positioning</Bullet>
              <Bullet>Identify inflation effects</Bullet>
              <Bullet>Spot scope drift</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              Patterns over time are often more revealing than a single tender
              result.
            </p>
          </SectionCard>

          <SectionCard title="2️⃣ Benchmark Against Industry Norms">
            <p className="text-slate-600">
              Use category intelligence, sector benchmarks, and known market
              ranges where available.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Validate whether pricing is realistic</Bullet>
              <Bullet>Test whether risk premiums are inflated</Bullet>
              <Bullet>Challenge whether outliers are justified</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              This moves the discussion from opinion to evidence.
            </p>
          </SectionCard>

          <SectionCard title="3️⃣ Benchmark Against Economic Drivers">
            <p className="text-slate-600">
              Sense-check bids against the underlying drivers that should be
              influencing price.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Commodities</Bullet>
              <Bullet>Labour rates</Bullet>
              <Bullet>Logistics costs</Bullet>
              <Bullet>Currency movement</Bullet>
              <Bullet>Inflation indices</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              If input drivers are stable but prices are rising sharply, that
              deserves challenge and explanation.
            </p>
          </SectionCard>

          <SectionCard title="4️⃣ What Good Benchmarking Strengthens">
            <p className="text-slate-600">
              When done properly, benchmarking improves both decision quality and
              governance confidence.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Negotiation leverage</Bullet>
              <Bullet>Governance confidence</Bullet>
              <Bullet>Audit defensibility</Bullet>
              <Bullet>Stakeholder trust</Bullet>
              <Bullet>Value-for-money assurance</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="5️⃣ From Process to Commercial Validation">
            <p className="text-slate-600">
              Benchmarking moves procurement from:
            </p>

            <p className="mt-4 text-slate-700 font-semibold">
              “We ran the process”
            </p>

            <p className="mt-4 text-slate-600">to:</p>

            <p className="mt-4 text-slate-700 font-semibold">
              “We validated competitiveness.”
            </p>
          </SectionCard>

          <SectionCard title="6️⃣ An Important Caveat">
            <p className="text-slate-600">
              Benchmarking is not about beating suppliers down to the lowest
              number.
            </p>

            <p className="mt-4 text-slate-600">
              It is about informed commercial outcomes, context, and evidence.
            </p>

            <p className="mt-4 text-slate-700 font-semibold">
              A tender outcome without benchmarking is an opinion.
              <br />
              A tender outcome with benchmarking is a sound commercial decision.
            </p>
          </SectionCard>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold tracking-tight">My summary</h2>

            <p className="mt-3 text-slate-700">
              Running a compliant process matters, but compliance alone does not
              prove competitiveness. Benchmarking is what gives procurement the
              evidence to support a confident tender award.
            </p>

            <p className="mt-5 text-slate-700">
              <span className="font-semibold">
                Scars, Lessons and Triumphs (SLT) ⭐️
              </span>
              <br />
              A series of reflections from the procurement trenches.
            </p>

            <p className="mt-4 text-slate-700">
              👉🏽 Follow me for insights drawn from 25 years in procurement and
              over 38 years across global industry
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Procurement",
                "SupplyChain",
                "StrategicSourcing",
                "ValueCreation",
                "BusinessPartnering",
                "Leadership",
                "Innovation",
                "Sustainability",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back to SLT
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              Discuss on LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}