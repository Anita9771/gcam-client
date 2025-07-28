import { useState } from "react";
import API from "../../context/api";

const Welfare = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/welfare", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Welfare Support</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Carry each other's burdens, and in this way you will fulfill the law
          of Christ." – Galatians 6:2
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {submitted ? (
          <div className="text-center text-green-300 font-medium text-lg">
            Thank you! Your welfare request has been submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label className="block mb-1">Category of Need</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 bg-[#800020] focus:ring-2 focus:ring-[#B0A8B9]"
              >
                <option value="">-- Select Category --</option>
                <option value="financial">Financial Assistance</option>
                <option value="medical">Medical Help</option>
                <option value="spiritual">Spiritual Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Welfare;
