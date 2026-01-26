import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function FiveSDisciplineOperationalExcellence() {
  const published = "26 Jan 2026"; // change if needed

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="SLT logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/stories/organisational-performance"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Back to Stories
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-6">
          <p className="text-sm font-semibold text-amber-600">
            Organisational Performance
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            5S: The Discipline Behind Operational Excellence
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Published: {published}
          </p>
        </div>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            5S is often misunderstood as a “housekeeping exercise”. It isn’t.
          </p>

          <p>
            Originating in Japan, 5S is far more than workplace organisation.
            It’s a discipline that drives efficiency, quality, and safety by
            eliminating waste and creating order and is part of Lean and Kaizen.
          </p>

          <p>
            One of the strongest examples I’ve seen was during my time at URENCO.
          </p>

          <p>
            In a safety-critical nuclear environment, 5S wasn’t just a tidy-up
            exercise. It was a foundational way of working. Visual control, clear
            standards, disciplined execution, and personal ownership were
            non-negotiable. And it wasn’t “implemented” and forgotten. It was
            sustained.
          </p>

          <h2>The Five Pillars of 5S</h2>

          <h3>Sort (Seiri)</h3>
          <p>
            Separate what is necessary from what is not. If it doesn’t add value,
            it’s waste. Clutter hides problems and slows decision-making.
          </p>

          <h3>Set in Order (Seiton)</h3>
          <p>
            Arrange what’s needed so it’s easy to find and easy to return. A
            place for everything, and everything in its place. Time spent
            searching is time stolen from value creation.
          </p>

          <h3>Shine (Seiso)</h3>
          <p>
            Clean regularly—not to impress, but to inspect. A clean environment
            exposes defects early and builds pride in ownership.
          </p>

          <h3>Standardize (Seiketsu)</h3>
          <p>
            Create clear standards, routines, and visual controls. Consistency
            beats heroics. Standards enable scale, quality, and trust.
          </p>

          <h3>Sustain (Shitsuke)</h3>
          <p>
            The hardest S. This is about discipline and leadership. 5S only
            sticks when leaders role-model behaviours, reinforce standards, and
            never walk past a problem.
          </p>

          <h2>The Real Benefits of 5S</h2>

          <p>Done properly, 5S delivers far more than a tidy workspace:</p>

          <ul>
            <li>Reduced waste (time, inventory, motion)</li>
            <li>Improved safety and fewer accidents</li>
            <li>Increased productivity and flow</li>
            <li>Higher employee morale and ownership</li>
            <li>Better quality and reduced downtime</li>
          </ul>

          <p>
            5S is a cultural commitment to doing the basics exceptionally well,
            every day.
          </p>

          <hr />

          <p>
            <strong>Scars, Lessons and Triumphs (SLT) ⭐️</strong>
            <br />
            A series of reflections from the procurement trenches.
          </p>

          <p>
            👉🏽 Follow me for insights drawn from 25 years in procurement and
            over 38 years across global industry.
          </p>

          <p>
            Let’s continue the conversation.
            <br />
            <span className="text-slate-500">
              #Procurement #SupplyChain #StrategicSourcing #ValueCreation
              #BusinessPartnering #Sustainability #Innovation #Leadership
            </span>
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/stories/organisational-performance"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
          >
            ← Back to Organisational Performance
          </Link>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
          >
            Follow on LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
