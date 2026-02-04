import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function HowGreatLeadersTalk() {
  const published = "04 Feb 2026"; // adjust if needed

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

          <div className="flex items-center gap-3">
            <Link
              to="/stories/leadership-that-inspires"
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
          How Great Leaders Talk
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 6 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-slate-600 leading-relaxed">
          After nearly four decades in leadership environments, this is what I’ve
          learned about how great leaders talk.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          As a leader, your words matter. How you say things shapes behaviour,
          confidence, and outcomes. Having listened to and observed some
          exceptional leaders, I’ve learned that the language you choose can
          either:
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">It can:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>✅ build trust</li>
              <li>✅ create clarity</li>
              <li>✅ drive accountability</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Or it can:</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>❌ switch people off</li>
              <li>❌ create confusion</li>
              <li>❌ limit performance</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-slate-600 leading-relaxed">
          Here are 15 real examples of how great leaders I’ve worked with talk.
        </p>

        {/* 1 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          1) Don’t create doubt
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Does that
            make sense?”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “What part
            should I explain better?” / “What questions do you have?”
          </li>
        </ul>

        {/* 2 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">2) Don’t blame</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “You’re
            wrong.” / “I think you’re wrong.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Help me
            understand your thinking.” / “What led you to that conclusion?”
          </li>
        </ul>

        {/* 3 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          3) Use committed language
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “I think we
            can…” / “I think I can…”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “We can.” /
            “I will.” / “Here’s the plan.”
          </li>
        </ul>

        {/* 4 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          4) Create certainty
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “It should
            be available by…”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “It will be
            ready by Thursday 3pm — and if that changes, you’ll know by tomorrow
            10am.”
          </li>
        </ul>

        {/* 5 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          5) Be humble, lean on the experts
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “I’m not an
            expert on this but…”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “You know
            this better than me, talk me through it.”
          </li>
        </ul>

        {/* 6 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          6) Make things happen
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “I’ll do
            what I can.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “I’ll take
            ownership of this. Here’s what I’ll do next.”
          </li>
        </ul>

        {/* 7 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          7) “But” implies they’re wrong
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Yes, but…”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Yes, and…”
            / “That’s a good point, let’s build on it.”
          </li>
        </ul>

        {/* 8 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          8) Create a discussion
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> Closed
            questions: “Did you do it?” “Is it done?”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> Open
            questions: “What’s the status?” “What’s blocking progress?”
          </li>
        </ul>

        {/* 9 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          9) Be inquisitive
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Elaborate.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Can you
            give me an example?” / “What does that look like in practice?”
          </li>
        </ul>

        {/* 10 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          10) Be supportive
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Why isn’t
            this done yet?”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “What’s
            getting in the way and how can I help remove it?”
          </li>
        </ul>

        {/* 11 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          11) Shape progress early
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Bring me
            the final version.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Show me the
            first draft and we’ll shape it together.”
          </li>
        </ul>

        {/* 12 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          12) Don’t look for a scapegoat
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Who’s
            responsible for this?”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “What
            happened, what did we learn, and what do we change?”
          </li>
        </ul>

        {/* 13 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          13) Raise the standard without making people wrong
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “This isn’t
            good enough.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Here’s the
            standard we need and here’s how we’ll get there.”
          </li>
        </ul>

        {/* 14 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          14) Don’t degrade “urgent”
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “This is
            urgent!”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “This is
            high priority. Let’s agree actions, owners, and timescales.”
          </li>
        </ul>

        {/* 15 */}
        <h2 className="mt-10 text-xl font-bold text-slate-900">
          15) Create trust
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">❌</span> “Keep me
            copied on everything.”
          </li>
          <li>
            <span className="font-semibold text-slate-900">✅</span> “Keep me
            updated on risks, decisions, and anything that needs escalation.”
          </li>
        </ul>

        <p className="mt-10 text-slate-600 leading-relaxed">
          I’ve found that great leaders use language that encourages and creates
          momentum.
        </p>

        <p className="mt-6 font-semibold text-slate-900 leading-relaxed">
          Which one have you heard most often… and which one do you wish more
          leaders would use?
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">
            Scars, Lessons &amp; Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽 Follow me for insights from 25 years in procurement and 38 years
            across global industry.
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
      </main>
    </div>
  );
}
