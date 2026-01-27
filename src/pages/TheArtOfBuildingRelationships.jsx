import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function TheArtOfBuildingRelationships() {
  const published = "27 Jan 2026"; // change if you want

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
              to="/stories/personal-development"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← Back
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
            >
              Connect
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6">
          <p className="text-sm text-slate-500">Published: {published}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            The Art of Building Relationships
          </h1>
        </div>

        <article className="prose prose-slate max-w-none">
          <p><strong>After nearly four decades in industry, one lesson stands above all others:</strong></p>

          <p>👉 Results follow relationships.</p>

          <p>
            The best leaders I’ve worked with don’t lead with authority, they lead by
            building relationships.
          </p>

          <p>
            Over the years, I’ve seen firsthand that relationships and success are
            inextricably linked.
          </p>

          <p>Here’s what I’ve learned about building strong relationships, it’s about:</p>

          <ul>
            <li>Listening more than speaking</li>
            <li>Doing what you say you’ll do</li>
            <li>Having the difficult conversations early and respectfully</li>
            <li>Giving credit freely and taking accountability personally</li>
            <li>Being curious, not judgemental</li>
            <li>Respecting different perspectives</li>
            <li>Being clear, honest, and kind</li>
            <li>
              Standing by people when decisions are hard, not just when they’re popular
            </li>
            <li>Following through long after the meeting ends</li>
            <li>
              Treating relationships as long-term, not just when you need something today
            </li>
          </ul>

          <p>
            In high-pressure environments, contracts, KPIs, and governance matter, but when
            things get really tough, it’s relationships that get you through.
          </p>

          <p>
            People always remember how you made them feel and whether they could rely on you.
          </p>

          <p>
            Scars, Lessons and Triumphs (SLT) ⭐️<br />
            A series of reflections from the procurement trenches.
          </p>

          <p>
            👉🏽Follow me for insights drawn from 25 years in procurement and over 38 years across global industry
          </p>

          <p><strong>Let’s continue the conversation.</strong></p>

          <p>
            hashtag#Procurement hashtag#SupplyChain hashtag#StrategicSourcing hashtag#ValueCreation
            hashtag#BusinessPartnering hashtag#Sustainability hashtag#Innovation hashtag#Leadership
          </p>
        </article>
      </main>
    </div>
  );
}
