import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "2026 Canny Alternative for Indie Hackers — Feature Voting Guide",
  description:
    "Canny costs $79/mo for solo founders. Compare feature voting tools for indie SaaS: Canny, UserJot, Feature Upvote. Find a $9.9/mo flat-rate alternative with unlimited voters.",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        2026 Canny Alternative for Indie Hackers: Feature Voting &amp; Roadmap Guide
      </h1>
      <p className="text-muted not-prose mb-8">Updated June 2026 · 12 min read</p>

      <p>
        You shipped an MVP. Users start emailing feature requests. Someone asks for dark mode on Twitter, another wants webhooks in your Discord. You paste ideas into a Notion doc, lose track of duplicates, and have no idea what to build next.
      </p>
      <p>
        Feature voting boards solve this: users submit ideas, upvote what matters, and you publish a public roadmap so everyone knows what&apos;s planned, in progress, and shipped. The problem? Enterprise tools like Canny charge $79/month and cap your free tier at 25 tracked users.
      </p>
      <p>
        On Indie Hackers, founders repeatedly ask: &ldquo;Canny wants $50/mo for their starter plan — just ain&apos;t gonna happen.&rdquo; Another wrote: &ldquo;I&apos;m in the very earliest stage with a handful of people providing feedback and cannot justify the cost.&rdquo; Sound familiar?
      </p>
      <p>
        This guide compares 2026 feature voting tools for solo founders, what actually matters at indie scale, and how to pick a board that won&apos;t surprise you with per-user fees when your product gains traction.
      </p>

      <h2>Why indie hackers need a feature voting board</h2>
      <p>
        A public feedback board does three things a Google Form cannot:
      </p>
      <ul>
        <li><strong>Surfaces signal</strong> — upvotes reveal what many users want, not just the loudest voice</li>
        <li><strong>Reduces support load</strong> — &ldquo;Is dark mode coming?&rdquo; → link to the board</li>
        <li><strong>Builds trust</strong> — users see you ship what they asked for</li>
      </ul>
      <p>
        The classic indie stack: create a board, embed a widget on your docs or changelog, share the public URL. Users submit ideas without creating an account. You drag ideas through Planned → In Progress → Shipped columns. Voters get notified when their idea ships.
      </p>
      <p>
        At 50–500 users, you don&apos;t need enterprise SSO, custom domains on every plan, or AI-powered duplicate detection that costs extra credits. You need: unlimited voters, a clean public page, and flat pricing.
      </p>

      <h2>2026 feature voting tools compared</h2>

      <h3>Canny — $79+/mo</h3>
      <p>
        The market leader. Beautiful UI, mature integrations, changelog add-on. Free tier caps at 25 tracked users — you hit that ceiling fast. Paid plans scale with tracked users; competitor roundups cite $400+/mo at scale. Annual contracts on higher tiers. Great for funded startups, painful for bootstrapped solo devs.
      </p>

      <h3>UserJot — free tier / paid upgrades</h3>
      <p>
        Generous free forever plan with unlimited users, feature voting, and integrated changelog. Modern UI. Worth evaluating if free tier covers your needs. Custom branding and extra boards require paid plans.
      </p>

      <h3>Feature Upvote — $49/board/mo</h3>
      <p>
        Simple, focused voting boards. No free tier. Per-board pricing adds up if you run multiple products or want separate boards for bugs vs features.
      </p>

      <h3>Feedbask / UseFeed — $10–33/mo</h3>
      <p>
        Newer affordable alternatives with flat pricing, public roadmaps, and embed widgets. Feature sets vary — some focus on bug reports, others on product ideas.
      </p>

      <h3>Feature Vote — $9.9/mo flat</h3>
      <p>
        Built for indie hackers who want Canny-style voting without per-user pricing. Unlimited boards, unlimited voters, public roadmap columns, embed widget.{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          5 free boards to try
        </Link>
        , then $9.9/mo flat. No annual lock-in.
      </p>

      <h2>What to look for in a feature voting tool</h2>
      <p>
        Before comparing prices, decide what you actually need:
      </p>
      <ol>
        <li><strong>Guest voting</strong> — can users upvote without creating an account? Friction kills participation.</li>
        <li><strong>Public roadmap</strong> — Planned / In Progress / Shipped columns that update automatically.</li>
        <li><strong>Embed widget</strong> — drop a script on your docs or app, don&apos;t force users to leave your site.</li>
        <li><strong>Voter notifications</strong> — email when an idea they voted on ships. Closes the feedback loop.</li>
        <li><strong>Flat pricing</strong> — no per-user or per-board fees that punish growth.</li>
      </ol>
      <p>
        Skip enterprise features you won&apos;t use in year one: SSO, custom domains on every tier, AI duplicate clustering that bills per credit.
      </p>

      <h2>How to launch your first feedback board in 10 minutes</h2>
      <p>
        The fastest path for a solo founder:
      </p>
      <ol>
        <li>Create a board named after your product</li>
        <li>Add 3–5 ideas you already know users want (seed the board so it&apos;s not empty)</li>
        <li>Share the public link in your changelog, docs footer, and next support reply</li>
        <li>Review top-voted ideas weekly; move winners to Planned</li>
        <li>When you ship, update status to Shipped — voters get notified</li>
      </ol>
      <p>
        With{" "}
        <Link href="/boards" className="text-brand-500 hover:underline">
          Feature Vote
        </Link>
        , step one takes under a minute. No credit card for your first 5 boards.
      </p>

      <h2>SEO and distribution for your feedback board</h2>
      <p>
        Your public board URL can rank for long-tail queries like &ldquo;[your product] feature requests&rdquo; or &ldquo;[your product] roadmap&rdquo;. Link it from your footer, changelog, and status page. Submit your sitemap to Google Search Console.
      </p>
      <p>
        For launch distribution, post on Product Hunt, Hacker News Show HN, Reddit r/SideProject, and Indie Hackers. Frame it as: &ldquo;We listen — vote on what we build next.&rdquo; Transparency builds community faster than a silent roadmap.
      </p>

      <h2>Bottom line</h2>
      <p>
        Canny is excellent software priced for teams, not solo founders shipping their first paid product. If you need unlimited voters, a public roadmap, and flat $9.9/mo pricing,{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          try Feature Vote free
        </Link>
        . Five boards, no credit card. Ship what your users actually want.
      </p>

      <div className="not-prose mt-12 rounded-xl border border-brand-600/30 bg-brand-600/10 p-6 text-center">
        <p className="font-semibold text-foreground">Ready to collect feature requests?</p>
        <p className="mt-2 text-sm text-muted">5 free boards · unlimited voters after subscribe</p>
        <Link
          href="/boards"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Create your first board
        </Link>
      </div>
    </article>
  );
}
