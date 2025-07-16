// src/pages/Events.jsx
import event1 from "../assets/slide1.jpeg";
import event2 from "../assets/slide2.jpeg";
import event3 from "../assets/slide3.jpeg";

const events = [
  {
    id: 1,
    date: "Dec 25",
    time: "4:00 PM",
    title: "Christmas",
    image: event1,
    description: "An evening of music, fun, and spiritual growth for the youth of our community.",
  },
  {
    id: 2,
    date: "Jul 21",
    time: "10:00 AM",
    title: "Sunday Worship",
    image: event2,
    description: "Join us every Sunday for a powerful worship service and life-giving message.",
  },
  {
    id: 3,
    date: "Jul 24",
    time: "6:00 PM",
    title: "Bible Study",
    image: event3,
    description: "Come study the Word with us and deepen your spiritual walk.",
  },

    {
    id: 4,
    date: "Jul 24",
    time: "6:00 PM",
    title: "Bible Study",
    image: event3,
    description: "Come study the Word with us and deepen your spiritual walk.",
  },
];

export default function Events() {
  return (
    <section className="bg-white text-[#1E293B] py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-2">Events</h2>
        <div className="w-24 h-1 bg-[#1E293B] mx-auto rounded"></div>
      </div>

      {/* Timeline Events */}
      <div className="relative border-l-2 border-gray-300 pl-10">
        {events.map((event, index) => (
          <div key={event.id} className="mb-16 relative">
            {/* Date Bubble */}
            <div className="absolute -left-[3.1rem] top-2 text-center">
              <div className="bg-[#1E293B] text-white w-16 h-16 rounded-full flex flex-col items-center justify-center font-semibold text-sm shadow-md">
                {event.date.split(" ")[0]}
                <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
              </div>
            </div>

            {/* Event Content */}
            <div className="ml-4 md:ml-6 flex flex-col md:flex-row items-start gap-6">
              {/* Image with Time Tag */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-72 h-44 object-cover  shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-[#1E293B] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {event.time}
                </span>
              </div>

              {/* Text Info */}
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfNYWPAgYQ7g-HgUSvoBe4J3p18N9dzCKWQ5_XowVOJiX3biw/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-5 py-2 text-sm font-semibold bg-[#1E293B] text-white rounded-full hover:bg-[#334155] transition"
>
  Register
</a>


            {/* Divider */}
            {index < events.length - 1 && (
              <div className="mt-8 w-full h-px bg-gray-300"></div>
            )}

            
          </div>
        ))}
      </div>
    </section>
  );
}
