import { useEffect, useState } from "react";

export default function Teaching() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/96e11256-5a41-4efc-a5aa-a4632486a7c3")
      .then((res) => res.json())
      .then((data) => {
        const reversed = data.reverse();
        setMessages(reversed);
        setFilteredMessages(reversed);
        setMonths(getMonthOptions(reversed));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setLoading(false);
      });
  }, []);

  const getMonthOptions = (data) => {
    const monthSet = new Set();
    data.forEach((msg) => {
      const dateStr = msg["Date of Sunday Worship"];
      if (dateStr) {
        const date = new Date(dateStr);
        if (!isNaN(date)) {
          const monthYear = date.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          monthSet.add(monthYear);
        }
      }
    });
    return ["All", ...Array.from(monthSet)];
  };

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedMonth(selected);

    if (selected === "All") {
      setFilteredMessages(messages);
    } else {
      const filtered = messages.filter((msg) => {
        const dateStr = msg["Date of Sunday Worship"];
        const date = new Date(dateStr);
        const monthYear = date.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        return monthYear === selected;
      });
      setFilteredMessages(filtered);
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-[#1E293B] mb-8">
        Sunday Fellowship Teachings
      </h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-10">
        <select
          className="px-4 py-2 border border-sky-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-800 bg-white"
          value={selectedMonth}
          onChange={handleFilterChange}
        >
          {months.map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading messages...</p>
      ) : filteredMessages.length === 0 ? (
        <p className="text-center text-gray-500">
          No teachings available for {selectedMonth}.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredMessages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-sky-400 p-6 rounded-xl shadow hover:shadow-md transition duration-200"
            >
              <div className="text-sm text-gray-500 mb-1">
                <span className="font-semibold text-[#1E293B]">
                  🗓️ {msg["Date of Sunday Worship"] || "Unknown Date"}
                </span>
              </div>

              <div className="text-md text-gray-700">
                <strong>✝️ Lead By:/ Message By:</strong>{" "}
                <span className="text-gray-800">{msg["Lead By / Message By "]}</span>
              </div>

              <div className="mt-2 text-gray-700">
                <strong>📖 New Testament:</strong>{" "}
                <span className="text-gray-800">{msg["New Testament "]}</span>
              </div>

              <div className="text-gray-700">
                <strong>📜 Old Testament:</strong>{" "}
                <span className="text-gray-800">{msg["Old Testament "]}</span>
              </div>

              <div className="mt-4">
                <strong className="text-[#1E293B]">🕊️ Message of the Day:</strong>
                <p className="mt-2 text-gray-800 leading-relaxed whitespace-pre-line">
                  {msg["Message of the Day"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
