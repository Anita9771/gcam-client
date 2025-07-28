import { useState } from "react";
import API from "../../context/api";

const Request = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    requestType: "",
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
      await API.post("/api/requests", formData);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        requestType: "",
        message: "",
      });
    } catch (err) {
      console.error("Request submission failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Make a Request</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Ask, and it will be given to you; seek, and you will find; knock, and
          it will be opened to you." — Matthew 7:7
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {submitted ? (
          <div className="text-center text-lg font-semibold text-green-300">
            Thank you! Your request has been submitted.
          </div>
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
              <label className="block mb-1">Request Type</label>
              <select
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              >
                <option value="">-- Select --</option>
                <option value="prayer">Prayer Request</option>
                <option value="counseling">Counseling</option>
                <option value="financial">Financial Support</option>
                <option value="others">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
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

export default Request;
