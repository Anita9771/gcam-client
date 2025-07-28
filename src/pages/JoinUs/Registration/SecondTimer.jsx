import { useState } from "react";
import API from "../../../context/api";

const SecondTimer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    previousVisitDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/api/second-timer", formData);
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      previousVisitDate: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Let us not neglect our meeting together..." – Hebrews 10:25
        </p>
      </section>

      <div className="max-w-3xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Second Timer Registration
        </h2>
        {submitted ? (
          <p className="text-green-300 text-center">
            Thank you for returning! We're excited to have you again.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="previousVisitDate" className="block mb-1">
                Date of Last Visit
              </label>
              <input
                type="date"
                id="previousVisitDate"
                name="previousVisitDate"
                required
                value={formData.previousVisitDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Any Message?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#B0A8B9] text-[#800020] font-semibold py-2 rounded-md hover:bg-[#a095a6] transition-colors"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SecondTimer;
