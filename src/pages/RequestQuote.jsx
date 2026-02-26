function RequestQuote() {
  return (
    <section className="bg-soft-white py-16">
      <div className="mx-auto max-w-3xl px-4 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Design & CRM Projects
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-navy">
            Request a quote for Graphic Design, Funnels, or CRM.
          </h1>
          <p className="text-sm text-slate-600">
            Tell us about your brand, goals, and systems. We&apos;ll respond with a recommended approach and investment
            range.
          </p>
        </div>

        <form className="space-y-4 rounded-2xl bg-white border border-slate-100 shadow-sm px-4 py-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="company" className="font-medium text-slate-700">
                Name / Company
              </label>
              <input
                id="company"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="font-medium text-slate-700">
                Work email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="service-type" className="font-medium text-slate-700">
              What do you need help with?
            </label>
            <select
              id="service-type"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/70"
            >
              <option>Brand & marketing design</option>
              <option>Lead generation funnel</option>
              <option>Customer journey & CRM setup</option>
              <option>Combination of the above</option>
            </select>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="budget" className="font-medium text-slate-700">
              Approximate budget (optional)
            </label>
            <input
              id="budget"
              type="text"
              placeholder="E.g. ₦500k–₦1.5m or $2,000–$5,000"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="project-details" className="font-medium text-slate-700">
              Project details
            </label>
            <textarea
              id="project-details"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-soft-white hover:bg-navy/90 transition-colors"
          >
            Submit request for quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default RequestQuote;

