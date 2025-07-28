import { useState } from "react";
import API from "../../context/api"

const PartnershipPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can replace this with a real API call
    await API.post('/api/partnership', formData);
    console.log("Submitted data:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "" });
  };

  

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Partner with Us</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Give, and it will be given to you..." – Luke 6:38
        </p>
      </section>

      <div className="bg-[#FFF5E1]/10 p-8 rounded-lg max-w-3xl mx-auto mb-20">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Become a Partner Today
        </h3>
        {submitted ? (
          <p className="text-green-300 text-center">
            Thank you for partnering with us!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Submit Partnership
            </button>
          </form>
        )}
      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <img
          src="/images/partnership-impact.jpg"
          alt="Partnership Impact"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Partner with Us?</h2>
          <p className="mb-4 text-[#FFF5E1]/90">
            Your partnership helps us fulfill the Great Commission—reaching the
            lost, equipping the saints, and serving our community. Through your
            support, we're able to spread the gospel across Austria and beyond.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#FFF5E1]/90">
            <li>Support local and global outreach</li>
            <li>Fund community welfare programs</li>
            <li>Enable church expansion and media ministry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
