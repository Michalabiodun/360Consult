function EventInquiry() {
  return (
    <section className="bg-soft-white py-16">
      <div className="mx-auto max-w-3xl px-4 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Public Speaking & Events
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-navy">
            Invite 360consult to speak at your event or organisation.
          </h1>
          <p className="text-sm text-slate-600">
            For conferences, retreats, townhalls, and internal events focused on clarity, resilience, and human-centred
            leadership.
          </p>
        </div>

        <form className="space-y-4 rounded-2xl bg-white border border-slate-100 shadow-sm px-4 py-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="org" className="font-medium text-slate-700">
                Organisation / Host
              </label>
              <input
                id="org"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="font-medium text-slate-700">
                Contact email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="event-type" className="font-medium text-slate-700">
              Event type
            </label>
            <input
              id="event-type"
              type="text"
              placeholder="E.g. annual conference, leadership retreat, townhall"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="date-location" className="font-medium text-slate-700">
              Proposed date & location
            </label>
            <input
              id="date-location"
              type="text"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="theme" className="font-medium text-slate-700">
              Theme & audience
            </label>
            <textarea
              id="theme"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-soft-white hover:bg-navy/90 transition-colors"
          >
            Submit speaking inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default EventInquiry;

