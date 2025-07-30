import { useState } from "react";
import API from "../../context/api";

const ChildDedication = () => {
  const [form, setForm] = useState({
    childName: "",
    dateOfBirth: "",
    parentsNames: "",
    contactEmail: "",
    phone: "",
    dedicationDate: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/api/dedications", form);
      alert("Child Dedication Submitted Successfully");
      setForm({
        childName: "",
        dateOfBirth: "",
        parentsNames: "",
        contactEmail: "",
        phone: "",
        dedicationDate: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Child Dedication</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Children are a heritage from the LORD, offspring a reward from him."
          – Psalm 127:3
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Child's Full Name</label>
            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Child's Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Parents' Names</label>
            <input
              type="text"
              name="parentsNames"
              value={form.parentsNames}
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
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Dedication Date</label>
            <input
              type="date"
              name="dedicationDate"
              value={form.dedicationDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Special Message (optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Dedication Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChildDedication;
