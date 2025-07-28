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
          {/* Fields... */}
          {/* (Use same structure as before, omitted for brevity) */}
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
