import { useState } from "react";
import  API from "../../../context/api"; // Adjust the import path as necessary

const ChurchMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await API.post("/api/church-member", formData);
    console.log("Submitted Church Member Form:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Church Member Registration</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Now you are the body of Christ, and each one of you is a part of it."
          – 1 Corinthians 12:27
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg shadow-md mb-20">
        {submitted ? (
          <p className="text-green-300 text-center text-lg">
            Thank you for registering as a church member!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
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
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>

            <div>
              <label htmlFor="department" className="block mb-1">
                Preferred Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g. Choir, Ushering, Technical..."
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1">
                Home Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChurchMember;
