import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dgo,
  Mgo,
  Choir,
  LibP,
  Papa,
  Mama,
  Asst,
  PapaA,
  AsstP,
  Together1,
  Together2,
  Together3,
  Papa2,
  Mama2,
  Asst3,
  RecordsHN,
  NigPN
} from "../images";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    Dgo,
    Mgo,
    Together2,
    Choir,
    Together3,
    PapaA,
    AsstP,
    Together1,
  ];
  const headshots = [
    {
      img: Papa,
      name: "Rev. Austin Ugoh Nwaka",
      role: "General Overseer",
    },
    {
      img: Mama,
      name: "Prophetess Onyinye Blessing Nwaka",
      role: "Mama",
    },
    {
      img: Asst,
      name: "Pastor Michael Atane",
      role: "Assistant Pastor",
    },
    {
      img: RecordsHN,
      name: "Pastor Mrs Betty Atane",
      role: "Asst Mama",
    },
    {
      img: LibP,
      name: "Pastor Kayode Olanitola",
      role: "Head Pastor (Liberia)",
    },
    {
      img: NigPN,
      name: "Pastor Egwuonwu Chukwunulu Christopher",
      role: "Head Pastor (Nigeria)",
    },
    // Add more if needed
  ];

  const messages = [
    {
      img: Papa2,
      title: "Walking by Faith",
      link: "https://web.facebook.com/share/v/1GLzHcEmww/",
    },
    {
      img: Mama2,
      title: "Victory in the Spirit",
      link: "https://web.facebook.com/share/r/1CDEdEZYY8/",
    },
    {
      img: Asst3,
      title: "The Power of Prayer",
      link: "https://web.facebook.com/share/v/19RbcnsQsW/",
    },
    // Add more sermons as needed
  ];

  const announcements = [
    {
      title: "Power Packed Revival",
      excerpt:
        "Experience a powerful revival with us from the 13th to 15th of February. Let's encounter God together.",
    },
    {
      title: "Children's Anniversary",
      excerpt:
        "Celebrate with us as we mark our children's anniversary on the 15th of March. Fun, fellowship and God's presence await.",
    },
    {
      title:" Easter Feast Celebration",
      excerpt:
        "Join us for a joyous Easter feast celebration on the 3rd - 5th of April. Let's celebrate the resurrection of our Lord together.",
    },
    {
      title: "Women's Conference",
      excerpt: "On the 16th and 17th of May, all women are invited to a powerful conference filled with worship, word and fellowship.",
    },
    {
      title: "Choir Night of Kingdom Praise",
      excerpt:
        "Experience a night of powerful worship and praise with our choir on the 29th to 31st of May. Let's lift our voices together.",
    },
    {
      title: "Ministers' Conference",
      excerpt:
        "All ministers are invited to a transformative conference on the 17th to 19th of June. Let's grow in the knowledge of God together.",
    },
    {
      title: "Mid Year Fasting and Prayer",
      excerpt:
        "Join us for our mid-year fasting and prayer sessions from the 1st to 12th of July. Let's seek God's face together.",
    },
    {
      title: "Men's Anniversary",
      excerpt: "Celebrating the gift of men on the 17th to 19th of July. Join us for a powerful time of fellowship and God's presence.",
    },
    {
      title: "Couple's Praise Night",
      excerpt: "Couples, join us for a night of praise and worship on the 14th of September. Let's celebrate love and God's faithfulness together.",
    },
    {
      title: "Innsbruck City Praise 2026",
      excerpt: "Join us for a powerful time of worship and praise in the city of Innsbruck on the 17th of October. Let's lift our voices together.",
    },
    {
      title: "Summer Go Fishing",
      excerpt: "Join us for our street outreach on every Saturday in Summer. Let's go fishing for souls together.",
    },
    {
      title: "Last Revival of the Year",
      excerpt: "Experience a powerful revival with us from the 15th to 27th of November. Let's encounter God together.",
    },
    {
      title: "Annual Thanksgiving",
      excerpt: "Join us for our annual thanksgiving service on the 20th of December. Let's give thanks to God together.",
    },
    {
      title: "Love Feast",
      excerpt: "Celebrate the love of God with us on the 25th of December. Join us for a joyous feast and fellowship.",
    },
    {
      title: "Cross Over Service",
      excerpt: "Join us for a powerful cross over service on the 31st of December. Let's welcome the new year with God's presence.",
    }
    // Add more announcements as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="text-[#FFF5E1] bg-[#800020]">
      {/* Hero Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Glorious Christ Ambassadors Ministries
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            “For where two or three gather in my name, there am I with them.” —
            Matthew 18:20
          </p>
          <Link
            to="/join-us/create-profile"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="mb-6">
          To raise purposeful leaders through the transformative power of God's
          word, prayer, and the ministry of the Holy Spirit—fulfilling
          destinies, advancing global missions and charity, and ultimately
          leading souls to heaven to the glory of God.
        </p>

        <h2 className="text-3xl font-bold mb-4">Our Motto</h2>
        <p>Salvation, Restoration, Manifestation and Power</p>

        <div className="download_btn pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.open("/assets/forms/GCAM_Complete_Booklet_Styled.pdf", "_blank")}
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition"
          >
            Read our Booklet in English
          </button>
          <button
            onClick={() => window.open("/assets/forms/Glorious_Christ_Ambassadors_DE_Full.pdf", "_blank")}
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition"
          >
            Read our Booklet in German
          </button>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Upcoming: Innsbruck Spiritual Awakening
            </h3>
            <p className="mb-4">
              Date: Sep 13th, 2025 | Time: 9:00 AM - 4:00 PM
            </p>
            <p className="mb-4">
              Join us for a powerful time in God's presence featuring worship,
              word, and wonders.
            </p>
            <Link
              to="/join-us/register/program-attendance"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-4 py-2 rounded-md hover:bg-[#a296aa] transition"
            >
              Register Now
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Upcoming: Innsbruck City Praise
            </h3>
            <p className="mb-4">
              Date: Oct 25th, 2025 | Time: 9:00 AM - 4:00 PM
            </p>
            <p className="mb-4">Dancing in God's presence has never failed.</p>
            <Link
              to="/join-us/register/program-attendance"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-4 py-2 rounded-md hover:bg-[#a296aa] transition"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16 px-6 bg-[#70001c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonies</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[ "Deacon Charles Maduka", "Deaconess Jennifer Tabe Upan", "Deacon Manly Ali"].map((name, i) => (
              <div
                key={i}
                className="bg-[#FFF5E1] text-[#800020] p-6 rounded-lg shadow"
              >
                <p>
                  {
                    [
                      `“God's faithfulness shown in my life”`,
                      `“I am thanking God for the life of my son”`,
                      `“Court case received God's intervention”`,
                    ][i]
                  }
                </p>
                <p className="mt-2 font-semibold">— {name}</p>
              </div>
            ))}
          </div>
          <Link
            to="/forms/testimonies"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition"
          >
            Share a Testimony
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cta.jpg)" }}
      >
        <div className="bg-[#800020aa] rounded-lg p-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Come Experience God with Us
          </h2>
          <p className="mb-6">
            “Taste and see that the Lord is good.” — Psalm 34:8
          </p>
          <Link
            to="https://web.facebook.com/profile.php?id=61576995746428&sk=videos"
            className="bg-[#B0A8B9] text-[#800020] px-6 py-2 font-semibold rounded-md hover:bg-[#a296aa] transition"
          >
            Watch Live
          </Link>
        </div>
      </section>

      {/* Ministers Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Ministers</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {headshots.map((minister, i) => (
              <div
                key={i}
                className="bg-[#FFF5E1] text-[#800020] rounded-lg p-4 text-center"
              >
                <img
                  src={minister.img}
                  alt={minister.name}
                  className="w-80 h-80 object-contain rounded mb-4 transition-transform hover:scale-105 duration-300 ease-in-out"
                />
                <h4 className="text-lg font-semibold">{minister.name}</h4>
                <p className="text-sm">{minister.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-16 px-6 bg-[#70001c] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Recent Messages</h2>
          <p className="mb-6">
            Listen to the Word and be transformed. “Faith comes by hearing...” —
            Romans 10:17
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="text-[#FFF5E1] p-4 rounded shadow text-left hover:shadow-lg transition-transform hover:scale-105"
              >
                <Link
                  to={msg.link}
                  className="block relative overflow-hidden rounded mb-2 group"
                >
                  <img
                    src={msg.img}
                    alt={msg.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </Link>
                <h4 className="font-bold mb-1">{msg.title}</h4>
                <Link
                  to={msg.link}
                  className="text-sm text-[#FFF5E1] underline"
                >
                  Watch / Listen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {announcements.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF5E1] text-[#800020] p-4 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm mb-2">{item.excerpt}</p>
                {/* <Link to={item.link} className="text-sm text-[#800020] underline">
            Read More
          </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;