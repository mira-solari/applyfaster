"use client";

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          See the Difference
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Same person, same job posting. One cover letter is generic AI slop.
          The other is tailored to the role. Guess which one gets the interview.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Before: Generic */}
        <div className="relative rounded-2xl border border-red-500/30 bg-red-950/10 p-6 sm:p-8">
          <div className="absolute -top-3 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Generic ChatGPT
          </div>
          <div className="mt-4 space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>Dear Hiring Manager,</p>
            <p>
              I am writing to express my interest in the Software Engineer
              position at Stripe. I am a passionate and driven professional with
              experience in software development. I believe my skills and
              enthusiasm make me a strong candidate for this role.
            </p>
            <p>
              In my current position, I have gained valuable experience working
              with various technologies and have developed strong
              problem-solving skills. I am a team player who thrives in
              collaborative environments.
            </p>
            <p>
              I am excited about the opportunity to contribute to Stripe&apos;s
              mission and am confident I would be a valuable addition to your
              team.
            </p>
            <p className="text-gray-500">Sincerely, Alex Chen</p>
          </div>
          <div className="mt-6 pt-4 border-t border-red-500/20">
            <ul className="space-y-2 text-xs text-red-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✗</span>
                <span>No connection to Stripe&apos;s actual work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✗</span>
                <span>Zero specific accomplishments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✗</span>
                <span>Could be sent to literally any company</span>
              </li>
            </ul>
          </div>
        </div>

        {/* After: Tailored */}
        <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-6 sm:p-8">
          <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Tailored with ApplyFaster
          </div>
          <div className="mt-4 space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>Dear Stripe Hiring Team,</p>
            <p>
              Your team&apos;s work on the Payment Intents API changed how I
              think about transaction architecture. When I integrated it at
              Meridian to process $2M in daily payments, I experienced firsthand
              how thoughtful API design eliminates entire categories of edge
              cases — and I want to help build that for Stripe&apos;s next
              generation of financial infrastructure.
            </p>
            <p>
              At Meridian, I designed the payment orchestration layer that
              reduced failed transaction rates from 4.2% to 0.8% across 14
              payment providers. The system processes 180K daily transactions
              with 99.97% uptime, built in Go with PostgreSQL — the same stack
              your Backend Engineer posting mentions.
            </p>
            <p>
              What draws me specifically to Stripe is the scope: not just
              processing payments, but building the financial infrastructure
              layer that other companies build on. I want to contribute to that
              foundation.
            </p>
            <p className="text-gray-500">Best, Alex Chen</p>
          </div>
          <div className="mt-6 pt-4 border-t border-emerald-500/20">
            <ul className="space-y-2 text-xs text-emerald-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>
                  References Stripe&apos;s actual product (Payment Intents API)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Quantified results ($2M/day, 4.2% → 0.8%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Matches their tech stack (Go, PostgreSQL)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        Same resume. Same job posting. 30 seconds apart. The only difference is
        tailoring.
      </p>
    </section>
  );
}
