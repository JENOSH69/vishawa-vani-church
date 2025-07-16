import {
  BookOpen,
  Church,
  CalendarDays,
  Users,
} from "lucide-react";

export default function ServiceTime() {
  return (
    <section className="w-full bg-gradient-to-br from-[#ECFDF5] to-[#E0F2FE] py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-xl shadow-md p-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E293B] mb-6 underline underline-offset-4">
          Service Time
        </h2>

        {/* Grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Sunday School */}
            <div className="flex items-center gap-3 flex-1 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
              <BookOpen className="text-sky-700 w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B]">Sunday School</h3>
                <p className="text-xs text-gray-600">8:00 AM – 10:00 AM</p>
              </div>
            </div>

            {/* Sunday Worship */}
            <div className="flex items-center gap-3 flex-1 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
              <Church className="text-sky-700 w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B]">Sunday Worship</h3>
                <p className="text-xs text-gray-600">10:00 AM – 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Bible Study */}
            <div className="flex items-center gap-3 flex-1 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
              <CalendarDays className="text-sky-700 w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B]">Bible Study</h3>
                <p className="text-xs text-gray-600">Wednesday – 6:00 PM</p>
              </div>
            </div>

            {/* Youth Fellowship */}
            <div className="flex items-center gap-3 flex-1 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
              <Users className="text-sky-700 w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B]">Youth Fellowship</h3>
                <p className="text-xs text-gray-600">Saturday – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
