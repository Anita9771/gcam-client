import { useState } from "react";
import API from "../../../context/api";

const NewBeliever = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    testimony: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/new-believer', formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", testimony: "" });
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome, New Believer!</h1>
        <p className="italic text-[#FFF5E1]/80 mb-4">
          "Therefore, if anyone is in Christ, he is a new creation. The old has
          passed away; behold, the new has come." – 2 Corinthians 5:17
        </p>
        <p className="max-w-2xl mx-auto text-[#FFF5E1]/90">
          We're so glad you've made the decision to follow Christ. Please fill
          out the form below so we can welcome you, support you, and help you
          grow in your walk with God.
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {submitted ? (
          <p className="text-green-300 text-center font-semibold">
            Thank you for registering! We're excited to walk this journey with
            you.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="testimony" className="block mb-1 font-medium">
                Brief Testimony or Experience
              </label>
              <textarea
                name="testimony"
                id="testimony"
                rows="4"
                value={formData.testimony}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewBeliever;
//
