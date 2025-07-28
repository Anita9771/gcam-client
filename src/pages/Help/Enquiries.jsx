import { useState } from "react";
import API from "../../context/api";

const Enquiries = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
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
      await API.post("/api/enquiries", formData);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Enquiries</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "If you need wisdom, ask our generous God, and He will give it to
          you." – James 1:5
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {submitted ? (
          <p className="text-green-300 font-semibold text-center">
            Thank you! Your enquiry has been received.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
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
              <label className="block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label className="block mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 resize-none focus:ring-2 focus:ring-[#B0A8B9]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Enquiries;
