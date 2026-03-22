import { useMemo, useState } from "react";

const bookingSlots = [
  "8:00 AM – 9:00 AM",
  "9:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
];

const surfaceCards = [
  {
    title: "Grass Turf Surface 1",
    description:
      "A natural-style grass turf practice area designed for realistic cricket net training.",
  },
  {
    title: "Grass Turf Surface 2",
    description:
      "A similar grass turf setup that helps players build rhythm, timing, and consistency.",
  },
  {
    title: "Grass Turf Surface 3",
    description:
      "A matching grass turf lane for repeated technical training in a familiar playing condition.",
  },
];

const whatsappNumber = "918555973913";

export default function App() {
  const [booking, setBooking] = useState({
    playerName: "",
    date: "",
    slot: "",
    phone: "",
  });

  const [bookingMessage, setBookingMessage] = useState("");

  const bookingWhatsappLink = useMemo(() => {
    const text = `Hello, I would like to book the cricket net.

Player Name: ${booking.playerName || "-"}
Date: ${booking.date || "-"}
Time Slot: ${booking.slot || "-"}
Phone: ${booking.phone || "-"}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [booking]);

  function handleBookingChange(field, value) {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function submitBooking(e) {
    e.preventDefault();

    if (
      !booking.playerName.trim() ||
      !booking.date.trim() ||
      !booking.slot.trim() ||
      !booking.phone.trim()
    ) {
      setBookingMessage("Please fill in all booking details first.");
      return;
    }

    setBookingMessage("Your net booking details are ready to send on WhatsApp.");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-gradient-to-r from-slate-900 to-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-green-200 mb-4">
              Cricket Net Booking
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Book Faster. Train Better.
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl">
              A clean and modern cricket net booking website that helps players
              choose slots, understand net details, and chat directly with the
              owner on WhatsApp.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#book"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow hover:scale-[1.02] transition"
              >
                Book Net Slot
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I would like to contact the owner about cricket net bookings."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/60 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-slate-200">Active Players</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm text-slate-200">Weekly Sessions</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-3xl font-bold">1</p>
                <p className="text-sm text-slate-200">Cricket Net</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-slate-200">Grass Turf Lanes</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-xl font-bold mb-3">Easy Net Booking</h3>
            <p className="text-slate-600">
              Players can choose available morning booking slots and send their
              booking request directly through WhatsApp.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-xl font-bold mb-3">One Cricket Net</h3>
            <p className="text-slate-600">
              The facility offers one dedicated cricket net for focused batting
              and bowling practice.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-xl font-bold mb-3">Grass Turf Surface</h3>
            <p className="text-slate-600">
              Practice takes place on grass turf conditions for a more realistic
              and consistent training environment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-green-700 font-semibold mb-2">Why Choose Us</p>
              <h2 className="text-3xl font-bold mb-4">
                One cricket net with consistent grass turf conditions
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="bg-slate-50 rounded-2xl p-4">
                  One cricket net for focused training and slot-based bookings.
                </li>
                <li className="bg-slate-50 rounded-2xl p-4">
                  Three similar grass turf surface lanes for repeated practice in
                  consistent conditions.
                </li>
                <li className="bg-slate-50 rounded-2xl p-4">
                  Direct WhatsApp contact with the owner for simple and quick
                  coordination.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 shadow">
              <h3 className="text-2xl font-bold mb-4">Grass Turf Lanes</h3>
              <div className="space-y-4">
                {surfaceCards.map((surface) => (
                  <div
                    key={surface.title}
                    className="bg-white rounded-2xl p-4 border border-slate-200"
                  >
                    <p className="font-semibold">{surface.title}</p>
                    <p className="text-slate-600 text-sm">
                      {surface.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-green-700 font-semibold mb-2">Coaching Hours</p>
            <h2 className="text-3xl font-bold mb-4">Academy Coaching Timings</h2>
            <p className="text-slate-600 mb-6">
              Coaching runs separately during fixed academy hours and is not part
              of the net booking slots.
            </p>

            <div className="bg-white rounded-3xl p-6 shadow space-y-4">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Morning Coaching</span>
                <span>6:00 AM – 8:00 AM</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Evening Coaching</span>
                <span>4:00 PM – 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Booking Availability</span>
                <span>8:00 AM – 12:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-green-700 font-semibold mb-2">Net Details</p>
            <h2 className="text-3xl font-bold mb-4">Booking Information</h2>
            <p className="text-slate-600 mb-6">
              Net slot bookings are available only outside coaching timings.
            </p>

            <div className="bg-white rounded-3xl p-6 shadow space-y-4">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Practice Slot Timings</span>
                <span>8:00 AM – 12:00 PM</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Net Type</span>
                <span>1 Cricket Net</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Surface Type</span>
                <span>Grass Turf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-green-700 font-semibold mb-2">
                Net Booking
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Reserve your Net slot
              </h2>
              <p className="text-slate-600 mb-6">
                Players can fill in their slot details and send the booking
                request directly through WhatsApp.
              </p>

              <div className="bg-white rounded-3xl p-6 shadow space-y-4">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Booking Hours</span>
                  <span>8:00 AM – 12:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Net Type</span>
                  <span>1 Cricket Net</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Surface Type</span>
                  <span>Grass Turf</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={submitBooking}
              className="bg-white rounded-3xl shadow p-6 space-y-4"
            >
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                placeholder="Player Name"
                value={booking.playerName}
                onChange={(e) =>
                  handleBookingChange("playerName", e.target.value)
                }
              />

              <input
                type="date"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                value={booking.date}
                onChange={(e) => handleBookingChange("date", e.target.value)}
              />

              <select
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                value={booking.slot}
                onChange={(e) => handleBookingChange("slot", e.target.value)}
              >
                <option value="">Select Time Slot</option>
                {bookingSlots.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>

              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                placeholder="Phone Number"
                value={booking.phone}
                onChange={(e) => handleBookingChange("phone", e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Prepare Booking
              </button>

              {bookingMessage && (
                <p className="text-sm font-medium text-green-700">
                  {bookingMessage}
                </p>
              )}

              <a
                href={bookingWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full bg-slate-900 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Confirm Booking on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-green-700 to-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Chat on WhatsApp with the owner
            </h2>
            <p className="text-green-100">
              You can message the owner directly on WhatsApp for bookings,
              questions, and slot confirmations.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello, I would like to contact the owner about cricket net bookings."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Cricket Net Booking
            </h3>
            <p className="text-sm">
              Cricket net bookings and direct WhatsApp contact in one place.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#book">Net Booking</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello, I would like to contact the owner about cricket net bookings."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Owner
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm">Phone: +91 8555-973913</p>
            <p className="text-sm">Location: Hyderabad, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
