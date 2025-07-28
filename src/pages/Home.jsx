import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Mgo from '../images/mgo.jpeg';
import Dgo from '../images/dgo.jpeg';
import Choir from '../images/choir.jpeg';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    Mgo,
    Dgo,
    Choir
  ];

  const headshot = [
    '../images/papa-headshot.jpeg',
    '../images/mama-headshot.jpeg',
    '../images/asst-headshot.jpeg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="text-[#FFF5E1] bg-[#800020">
      {/* Hero Carousel */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute w-full h-100 object-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Glorious Christ Ambassadors Ministries</h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">“For where two or three gather in my name, there am I with them.” — Matthew 18:20</p>
          <Link to="/join-us/create-profile" className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition">Join Us</Link>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="mb-6">To raise a generation rooted in the love of Christ, dedicated to kingdom impact and faithful service.</p>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p>To preach the gospel, nurture disciples, and serve the community with compassion and integrity.</p>
      </section>

      {/* Upcoming Event */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto flex ">
        <div>
            <h3 className="text-2xl font-bold mb-2">Upcoming: Innsbruck Spiritual Awakening</h3>
            <p className="mb-4">Date: Sep 13th, 2025 | Time: 9:00 AM - 4:00 PM</p>
            <p className="mb-4">Join us for a powerful time in God's presence featuring worship, word, and wonders. “If my people, who are called by my name...” — 2 Chronicles 7:14</p>
            <Link to="/join-us/register/program-attendance" className="bg-[#B0A8B9] text-[#800020] font-semibold px-4 py-2 rounded-md hover:bg-[#a296aa] transition">Register Now</Link>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Upcoming: Innsbruck City Praise</h3>
            <p className="mb-4">Date: Oct 25th, 2025 | Time: 9:00 AM - 4:00 PM</p>
            <p className="mb-4">Dancing in God's presence has never failed. “...Paul and Silas were praying and singing hymns...” — Acts 16:25</p>
            <Link to="/join-us/register/program-attendance" className="bg-[#B0A8B9] text-[#800020] font-semibold px-4 py-2 rounded-md hover:bg-[#a296aa] transition">Register Now</Link>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16 px-6 bg-[#70001c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonies</h2>
          <div className="grid mb-6 md:grid-cols-3 gap-6">
            <div className="bg-[#FFF5E1] text-[#800020] p-6 rounded-lg shadow">
              <p>“God restored my marriage after years of separation. All glory to Him!”</p>
              <p className="mt-2 font-semibold">— Sister Jane</p>
            </div>
            <div className="bg-[#FFF5E1] text-[#800020] p-6 rounded-lg shadow">
              <p>“I got healed during a prayer service. Jesus is real in this house!”</p>
              <p className="mt-2 font-semibold">— Brother Paul</p>
            </div>
            <div className="bg-[#FFF5E1] text-[#800020] p-6 rounded-lg shadow">
              <p>“Through the teachings here, I found my purpose and calling.”</p>
              <p className="mt-2 font-semibold">— Sister Mercy</p>
            </div>
          </div>
          <Link to="/forms/testimonies" className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-3 rounded-md hover:bg-[#a296aa] transition">Share a Testimony</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cta.jpg)' }}>
        <div className="bg-[#800020aa] rounded-lg p-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Come Experience God with Us</h2>
          <p className="mb-6">“Taste and see that the Lord is good.” — Psalm 34:8</p>
          <Link to="https://web.facebook.com/profile.php?id=61576995746428&sk=videos" className="bg-[#B0A8B9] text-[#800020] px-6 py-2 font-semibold rounded-md hover:bg-[#a296aa] transition">Watch Live</Link>
         </div>
          </section>

      {/* Ministers Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Ministers</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {headshot.map(num => (
              <div key={num} className="bg-[#FFF5E1] text-[#800020] rounded-lg p-4">
                <img src={`/images/min${num}.jpg`} alt={`Minister ${num}`} className="w-full h-48 object-cover rounded mb-4" />
                <h4 className="text-lg font-semibold">Minister Name {num}</h4>
                <p className="text-sm">Lead Pastor</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-16 px-6 bg-[#70001c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Recent Messages</h2>
          <p className="mb-6">Listen to the Word and be transformed. “Faith comes by hearing...” — Romans 10:17</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-[#FFF5E1] text-[#800020] p-4 rounded shadow">
                <img src={`/images/message${i}.jpg`} alt="Message" className="w-full h-40 object-cover rounded mb-2" />
                <h4 className="font-bold">Sermon Title {i}</h4>
                <Link to="/downloads/mp3" className="text-sm text-[#800020] underline">Watch / Listen</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(n => (
              <div key={n} className="bg-[#FFF5E1] text-[#800020] p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">Church Announcement {n}</h4>
                <p className="text-sm mb-2">Stay up to date with what's happening in our community.</p>
                <Link to="/more/blog" className="text-sm text-[#800020] underline">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
