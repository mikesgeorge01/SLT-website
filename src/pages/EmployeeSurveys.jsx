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

export default function EmployeeSurveys() {
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
              to="/stories/organisational-performance"
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
          Employee Surveys — Valuable Insight or Just a Token Gesture?
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          6 March 2026 • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 text-lg text-slate-600">
          Most organisations run employee surveys. Engagement surveys. Culture
          surveys. Pulse checks. Annual questionnaires. I’ve completed countless
          surveys over the years, with mostly positive experiences.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          But here’s the question worth debating:
        </p>

        <p className="mt-4 text-lg font-semibold text-slate-800">
          Are they genuinely useful, or just a corporate tick-box exercise?
        </p>

        <p className="mt-4 text-lg text-slate-600">
          I’ve seen first-hand how employee surveys can be incredibly powerful,
          but only when they are treated as the starting point, not the end
          product.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          The survey itself has very little value. What you do with the results
          is where the value lives.
        </p>

        <div className="mt-10 space-y-5">
          <SectionCard title="1️⃣ When employee surveys are done properly">
            <p className="text-slate-600">
              They can become a genuine source of organisational insight.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Bring real issues to the surface</Bullet>
              <Bullet>Highlight leadership blind spots</Bullet>
              <Bullet>Reveal cultural issues</Bullet>
              <Bullet>Identify capability gaps</Bullet>
              <Bullet>Give employees a voice</Bullet>
              <Bullet>Strengthen communication strategy</Bullet>
              <Bullet>Help establish cross-functional teams at all levels</Bullet>
              <Bullet>Guide targeted improvement actions</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="2️⃣ When surveys are handled badly">
            <p className="text-slate-600">
              They quickly become a token gesture — and employees know it.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Survey launched with big fanfare</Bullet>
              <Bullet>Results disappear into a slide deck</Bullet>
              <Bullet>No visible actions follow</Bullet>
              <Bullet>The same issues appear again next year</Bullet>
              <Bullet>Employee trust drops even further</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="3️⃣ Why poor follow-through is worse than no survey at all">
            <p className="text-slate-600">
              In some ways, a badly handled survey does more damage than not
              running one at all.
            </p>
            <p className="mt-4 text-slate-600">
              It sends a very clear message:
            </p>
            <p className="mt-4 text-slate-700 font-semibold italic">
              “We asked, but we weren’t really listening.”
            </p>
          </SectionCard>

          <SectionCard title="4️⃣ Principles that matter if you’re going to run one">
            <p className="text-slate-600">
              If employee surveys are going to create real value, a few things
              have to happen afterwards.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Share the results openly and honestly</Bullet>
              <Bullet>Convert findings into specific actions</Bullet>
              <Bullet>Implement a change cohort</Bullet>
              <Bullet>Set clear timelines and owners</Bullet>
              <Bullet>Keep communicating progress</Bullet>
              <Bullet>Close the feedback loop</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="5️⃣ The uncomfortable leadership truth">
            <p className="text-slate-600">
              If leadership isn’t prepared to hear difficult feedback, don’t run
              the survey.
            </p>
            <p className="mt-4 text-slate-600">
              Surveys are not about creating a nice-looking dashboard. They are
              about listening, responding, and improving.
            </p>
          </SectionCard>

          <SectionCard title="6️⃣ My view">
            <p className="text-slate-600">
              For me, employee surveys are absolutely worth it — but only when
              they lead to visible change.
            </p>
            <p className="mt-4 text-slate-600">
              Otherwise, they are just noise.
            </p>
            <p className="mt-4 text-slate-700 font-semibold">
              The survey is not the outcome. Action is the outcome.
            </p>
          </SectionCard>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold tracking-tight">My summary</h2>
            <p className="mt-3 text-slate-700">
              Employee surveys only create value when employees can see that
              their voice led to action. Without follow-through, trust erodes
              and the exercise becomes performative.
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

            <p className="mt-4 text-slate-700 font-semibold">
              What’s your view and experience?
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