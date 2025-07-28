import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../context/api";

const Footer = () => {
  const [email, setEmail] = useState("");

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await API.post("/api/subscribe",
  //       {
  //         email,
  //       }
  //     );
  //     alert("Subscribed successfully! Thank you.");
  //     setEmail("");
  //   } catch (error) {
  //     console.error("Subscription failed:", error);
  //     alert("Subscription failed. Please try again later.");
  //   }
  // };

  return (
    <footer className="w-full pt-12 pb-6 text-[#FFF5E1] bg-[#800020]">
      <div className="border-t border-[#FFF5E133] pt-6 max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-[#FFF5E1]">
              Glorious Christ Ambassadors Ministries
            </h3>
            <p className="mb-4 text-[#f5e4ce]">
              A welcoming family of faith dedicated to serving God and our
              community. Join us as we grow together in Christ's love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#B0A8B9] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFF5E1]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#f5e4ce]">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/live" className="hover:text-white transition">
                  Live Stream
                </Link>
              </li> */}
              <li>
                <Link
                  to="/more/departments"
                  className="hover:text-white transition"
                >
                  Ministries
                </Link>
              </li>
              {/* <li>
                <Link to="/more/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFF5E1]">
              Contact Us
            </h3>
            <address className="not-italic text-[#f5e4ce]">
              <p className="mb-2">Kaplanstrasse 2, Top 1, </p>
              <p className="mb-2">6063 Neu-Rum, Austria.</p>
              <p className="mb-2">Phone: (+43) 699 11084419</p>
              <p className="mb-2">gloriouschristambassador@gmail.com</p>
            </address>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFF5E1]">
              Service Times
            </h3>
            <ul className="space-y-2 text-[#f5e4ce]">
              <li className="flex justify-between">
                <span>Sunday Worship:</span>
                <span>9:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Bible Study:</span>
                <span>Wed 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Prayer Meeting:</span>
                <span>Fri 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mb-12 px-6 py-8 rounded-lg bg-[#FFF5E11a]">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              Stay Connected
            </h3>
            <p className="mb-4 text-[#f5e4ce]">
              Subscribe to our newsletter for weekly updates and devotionals
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-md text-[#333] focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#B0A8B9] hover:bg-[#a296aa] text-[#800020] font-semibold rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#f5e4ce]">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Glorious Christ Ambassadors Ministries.
            All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/help/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
