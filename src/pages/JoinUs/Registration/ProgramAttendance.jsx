import { useState } from "react";
import API from "../../../context/api";

const ProgramAttendance = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "Innsbruck City Praise",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/api/program-attendance", formData);
    setSubmitted(true);
    setFormData({ fullName: "", email: "", phone: "", program: "Innsbruck City Praise" });
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Attend Our Program</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          “I was glad when they said unto me, Let us go into the house of the Lord.” – Psalm 122:1
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register Your Attendance</h2>
        {submitted ? (
          <p className="text-green-300 text-center">
            Thank you for indicating interest. We look forward to seeing you!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="program" className="block mb-1">Select Program</label>
              <select
                name="program"
                id="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2"
              >
                <option>Innsbruck City Praise</option>
                <option>Innsbruck Spiritual Awakening</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Submit Attendance
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProgramAttendance;
