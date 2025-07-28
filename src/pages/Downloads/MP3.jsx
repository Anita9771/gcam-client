import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const mp3s = [
  {
    title: "The Power of Faith",
    preacher: "Pastor John Doe",
    date: "June 2, 2025",
    url: "/downloads/mp3s/power-of-faith.mp3",
  },
  {
    title: "Walking in Grace",
    preacher: "Pastor Mary Smith",
    date: "June 9, 2025",
    url: "/downloads/mp3s/walking-in-grace.mp3",
  },
  {
    title: "Victory Through Prayer",
    preacher: "Pastor Luke Adams",
    date: "June 16, 2025",
    url: "/downloads/mp3s/victory-through-prayer.mp3",
  },
];

const MP3 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMp3s = mp3s.filter((mp3) =>
    mp3.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">MP3 Downloads</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "So faith comes from hearing, and hearing through the word of Christ."
          – Romans 10:17
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
        />
      </div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {filteredMp3s.map((mp3, index) => (
          <div
            key={index}
            className="bg-[#FFF5E1]/10 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{mp3.title}</h2>
              <p className="text-sm text-[#FFF5E1]/70">
                {mp3.preacher} • {mp3.date}
              </p>
            </div>
            <a
              href={mp3.url}
              download
              className="mt-4 sm:mt-0 px-4 py-2 flex items-center gap-2 bg-[#B0A8B9] text-[#800020] font-semibold rounded-md hover:bg-[#a095a6] transition-colors"
            >
              <FaDownload /> Download
            </a>
          </div>
        ))}

        {filteredMp3s.length === 0 && (
          <p className="text-center text-[#FFF5E1]/70">
            No messages found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default MP3;
