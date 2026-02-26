function MentorshipBooking() {
  return (
    <section className="bg-soft-white py-16">
      <div className="mx-auto max-w-3xl px-4 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Mentorship Booking
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-navy">
            Book a discovery call for personal or family mentorship.
          </h1>
          <p className="text-sm text-slate-600">
            Share a bit about your current season. We&apos;ll use this to match you with the right 360consult mentor and
            recommend a starting path.
          </p>
        </div>

        <form className="space-y-4 rounded-2xl bg-white border border-slate-100 shadow-sm px-4 py-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="font-medium text-slate-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="focus-area" className="font-medium text-slate-700">
              Focus area
            </label>
            <select
              id="focus-area"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/70"
            >
              <option>Marriage / Relationship</option>
              <option>Parenting / Family Culture</option>
              <option>Career Clarity</option>
              <option>Personal Capacity & Burnout</option>
            </select>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="timeframe" className="font-medium text-slate-700">
              Preferred timeframe
            </label>
            <input
              id="timeframe"
              type="text"
              placeholder="E.g. Weekday evenings, within the next 2 weeks"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="context" className="font-medium text-slate-700">
              Brief context (optional)
            </label>
            <textarea
              id="context"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/70"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-soft-white hover:bg-navy/90 transition-colors"
          >
            Submit request & receive calendar link
          </button>
        </form>
      </div>
    </section>
  );
}

export default MentorshipBooking;

