import { useState } from "react";
import API from "../../context/api";

const BabyNaming = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    babyName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    pastor: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/api/baby-naming", formData);
      console.log("Baby Naming Submission Successful:", res.data);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        babyName: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        address: "",
        pastor: "",
      });
    } catch (err) {
      console.error("Submission failed:", err.response?.data || err.message);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Baby Naming Registration</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Before I formed you in the womb I knew you, before you were born I set you apart." – Jeremiah 1:5
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Parent's Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Baby's Full Name</label>
            <input
              type="text"
              name="babyName"
              value={formData.babyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Baby's Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
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
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
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
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Residential Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Local Pastor's Name</label>
            <input
              type="text"
              name="pastor"
              value={formData.pastor}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
          >
            {loading ? "Submitting..." : "Submit Baby Naming Form"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BabyNaming;
