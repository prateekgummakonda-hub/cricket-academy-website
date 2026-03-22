const trainingPrograms = [
  {
    title: "Junior Development",
    description: "For young players building strong basics in batting, bowling, fitness, and coordination.",
  },
  {
    title: "Performance Training",
    description: "Structured sessions for serious players focused on advanced drills, match awareness, and consistency.",
  },
  {
    title: "1-to-1 Coaching",
    description: "Personalized sessions for batting, bowling, wicketkeeping, and skill-specific improvement.",
  },
];

const bookingSlots = [
  "6:00 AM – 7:00 AM",
  "7:00 AM – 8:00 AM",
  "8:00 AM – 9:00 AM",
  "5:00 PM – 6:00 PM",
  "6:00 PM – 7:00 PM",
  "7:00 PM – 8:00 PM",
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-green-400 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-green-200">
              Cricket Academy Website
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
              Train Better. Register Faster. Book Nets Online.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              A clean and modern cricket academy website designed to help players and parents register for coaching,
              explore programs, and book cricket nets with ease.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#register"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-soft transition hover:-translate-y-0.5"
              >
                Join the Academy
              </a>
              <a
                href="#book"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Book Nets
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">200+</p>
                <p className="mt-1 text-sm text-slate-200">Players</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">6</p>
                <p className="mt-1 text-sm text-slate-200">Practice Nets</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">20+</p>
                <p className="mt-1 text-sm text-slate-200">Sessions/Week</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">1:1</p>
                <p className="mt-1 text-sm text-slate-200">Coaching</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur">
            <div className="rounded-[24px] bg-white p-5 text-slate-900 md:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                    Quick Overview
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">Academy Dashboard</h2>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Open
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Registrations</p>
                  <p className="mt-1 text-2xl font-bold">32 New Players</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Today’s Net Bookings</p>
                  <p className="mt-1 text-2xl font-bold">18 Slots Booked</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Top Programs</p>
                  <p className="mt-1 text-base font-semibold">Performance Training • 1-to-1 Coaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">What this website helps with</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple systems for academy growth</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            This website can help the academy manage player registrations, showcase coaching programs, and simplify
            cricket net bookings in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Online Registration"
            text="Parents and players can sign up through a clean digital form instead of manual calls and messages."
          />
          <FeatureCard
            title="Net Booking"
            text="Players can choose preferred practice dates and time slots for batting, bowling, or match preparation."
          />
          <FeatureCard
            title="WhatsApp Contact"
            text="A direct WhatsApp call-to-action makes it easy for families to ask questions and confirm bookings."
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Why choose this academy</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Professional coaching with a smoother booking experience</h2>

            <div className="mt-8 space-y-4">
              <InfoBox text="Structured coaching programs for different age groups and skill levels." />
              <InfoBox text="Dedicated cricket nets for focused technical practice and match simulation." />
              <InfoBox text="A modern website that improves academy visibility and saves time for staff, players, and parents." />
            </div>
          </div>

          <div className="rounded-[28px] bg-slate-50 p-6 shadow-soft">
            <h3 className="text-2xl font-bold">Training Programs</h3>
            <div className="mt-6 space-y-4">
              {trainingPrograms.map((program) => (
                <div key={program.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-lg font-semibold">{program.title}</p>
                  <p className="mt-2 text-slate-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Academy Registration</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Register for coaching</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              This section lets players or parents submit key details to join the academy. It can later be connected to
              Google Forms, email, or a full database.
            </p>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">What parents can submit</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Player name and age</li>
                <li>• Parent or guardian contact details</li>
                <li>• Skill level and playing goals</li>
                <li>• Preferred training program</li>
              </ul>
            </div>
          </div>

          <form className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-4">
              <Input placeholder="Player Name" />
              <Input placeholder="Parent / Guardian Name" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Email Address" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Age" />
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600">
                  <option>Skill Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600">
                <option>Preferred Program</option>
                <option>Junior Development</option>
                <option>Performance Training</option>
                <option>1-to-1 Coaching</option>
              </select>
              <textarea
                className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
                placeholder="Goals / Additional Details"
              />
              <button
                type="button"
                className="mt-2 rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="book" className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Cricket Net Booking</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Reserve your practice slot</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Players can book a net by choosing a date, preferred time slot, and session type. This can later connect
              to WhatsApp, Google Sheets, or a booking backend.
            </p>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">Available slot windows</h3>
              <div className="mt-5 space-y-3 text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span>Morning Practice</span>
                  <span className="font-semibold text-slate-900">6:00 AM – 10:00 AM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span>Evening Practice</span>
                  <span className="font-semibold text-slate-900">5:00 PM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span>Session Types</span>
                  <span className="font-semibold text-slate-900">Batting • Bowling • Match Practice</span>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-4">
              <Input placeholder="Player Name" />
              <Input type="date" />
              <div className="grid gap-4 sm:grid-cols-2">
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600">
                  <option>Select Time Slot</option>
                  {bookingSlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>

                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600">
                  <option>Session Type</option>
                  <option>Batting Practice</option>
                  <option>Bowling Practice</option>
                  <option>Match Simulation</option>
                </select>
              </div>

              <Input placeholder="Phone Number" />

              <button
                type="button"
                className="mt-2 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6 rounded-[32px] bg-gradient-to-r from-green-700 to-slate-900 p-8 text-white shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-100">Quick Contact</p>
            <h2 className="mt-3 text-3xl font-bold">Want a quick demo or booking?</h2>
            <p className="mt-3 max-w-2xl text-green-100">
              Add the academy WhatsApp number here so parents and players can connect instantly for registrations,
              schedule questions, and slot confirmations.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">Cricket Academy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Professional coaching, academy registrations, and easy net bookings in one place.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#register" className="transition hover:text-white">
                  Academy Registration
                </a>
              </li>
              <li>
                <a href="#book" className="transition hover:text-white">
                  Net Booking
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Email: academy@email.com</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div className="mb-4 h-12 w-12 rounded-2xl bg-green-100"></div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}

function InfoBox({ text }) {
  return <div className="rounded-2xl bg-slate-50 p-4 text-slate-700">{text}</div>;
}

function Input({ type = "text", placeholder = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
    />
  );
}
