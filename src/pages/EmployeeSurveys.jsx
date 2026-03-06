import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

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

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-amber-600 hover:text-amber-700"
          >
            Follow on LinkedIn
          </a>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Employee Surveys — Valuable Insight or Just a Token Gesture?
        </h1>

        <p className="text-lg text-slate-700 mb-6">
          Most organisations run employee surveys. Engagement surveys. Culture
          surveys. Pulse checks. Annual questionnaires.
        </p>

        <p className="text-lg text-slate-700 mb-6">
          I’ve completed countless surveys over the years, and in many cases the
          experience has been positive.
        </p>

        <p className="text-lg text-slate-700 mb-10">
          But here’s the real question for debate:
        </p>

        <p className="text-xl font-semibold mb-10">
          Are employee surveys genuinely useful, or just another corporate
          tick-box exercise?
        </p>

        <p className="text-lg text-slate-700 mb-6">
          I’ve seen first-hand how powerful employee surveys can be, but only
          when they are treated as the beginning of the conversation, not the
          end product.
        </p>

        <p className="text-lg text-slate-700 mb-10">
          The survey itself has very little value.
          <br />
          <span className="font-semibold">
            What you do with the results is where the real value lives.
          </span>
        </p>

        {/* Positive list */}

        <h2 className="text-2xl font-semibold mb-6">
          When handled properly, employee surveys can:
        </h2>

        <ul className="space-y-3 mb-12 text-lg text-slate-700">
          <li>✅ Bring real issues to the surface</li>
          <li>✅ Highlight leadership blind spots</li>
          <li>✅ Reveal cultural challenges</li>
          <li>✅ Identify capability gaps</li>
          <li>✅ Give employees a genuine voice</li>
          <li>✅ Strengthen organisational communication</li>
          <li>✅ Enable cross-functional collaboration</li>
          <li>✅ Guide targeted improvement actions</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">
          But when handled poorly, they quickly become a token gesture.
        </h2>

        <p className="text-lg text-slate-700 mb-6">
          Most employees have seen the pattern before:
        </p>

        {/* Negative list */}

        <ul className="space-y-3 mb-12 text-lg text-slate-700">
          <li>❌ Survey launched with big fanfare</li>
          <li>❌ Results disappear into a slide deck</li>
          <li>❌ No visible actions follow</li>
          <li>❌ The same issues reappear the following year</li>
          <li>❌ Employee trust drops further</li>
        </ul>

        <p className="text-lg text-slate-700 mb-10">
          In some ways, that’s worse than not running a survey at all.
        </p>

        <p className="text-lg text-slate-700 mb-10 italic">
          Because it sends the message:
          <br />
          “We asked, but we weren’t really listening.”
        </p>

        {/* Principles */}

        <h2 className="text-2xl font-semibold mb-6">
          If you’re going to run an employee survey, a few principles matter:
        </h2>

        <ul className="space-y-3 mb-12 text-lg text-slate-700">
          <li>🔍 Share the results openly and honestly</li>
          <li>🛠️ Convert findings into specific improvement actions</li>
          <li>👫 Establish cross-functional change cohorts</li>
          <li>📅 Set clear timelines and accountable owners</li>
          <li>🗣️ Communicate progress regularly</li>
          <li>🔁 Close the feedback loop</li>
        </ul>

        <p className="text-lg text-slate-700 mb-10">
          And there’s one more uncomfortable truth.
        </p>

        <p className="text-xl font-semibold mb-12">
          If leadership isn’t prepared to hear difficult feedback, don’t run the
          survey.
        </p>

        <p className="text-lg text-slate-700 mb-12">
          For me, employee surveys are worth it — but only when they lead to
          visible change. Otherwise, they’re just noise.
        </p>

        <p className="text-lg font-medium mb-16">
          What’s your experience?
        </p>

        {/* SLT Signature */}

        <div className="border-t pt-8">
          <p className="font-semibold text-lg mb-2">
            Scars, Lessons & Triumphs (SLT) ⭐️
          </p>

          <p className="text-slate-600 mb-4">
            A series of reflections from the procurement trenches.
          </p>

          <p className="text-slate-600">
            Follow me for insights from 38 years across global industry and 25+
            years in procurement leadership.
          </p>

          <a
            href="https://scarslessonstriumphs.com"
            className="text-amber-600 font-medium hover:text-amber-700 block mt-4"
          >
            View more SLT articles →
          </a>
        </div>
      </main>
    </div>
  );
}