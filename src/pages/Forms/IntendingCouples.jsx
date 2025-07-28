import { useState } from "react";
import API from "../../context/api";

const IntendingCouples = () => {
  const [formData, setFormData] = useState({
    partner1Name: "",
    partner2Name: "",
    email: "",
    phone: "",
    weddingDate: "",
    address: "",
    churchAffiliation: "",
    pastor: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
       await API.post("/api/couples", formData);
      setSuccess("Form submitted successfully!");
      setFormData({
        partner1Name: "",
        partner2Name: "",
        email: "",
        phone: "",
        weddingDate: "",
        address: "",
        churchAffiliation: "",
        pastor: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred while submitting."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Intending Couples Registration
        </h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Though one may be overpowered, two can defend themselves. A cord of
          three strands is not quickly broken." – Ecclesiastes 4:12
        </p>
      </section>

      <div className="max-w-xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {success && (
          <p className="text-green-300 text-center mb-4">{success}</p>
        )}
        {error && <p className="text-red-300 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Partner 1 Full Name", name: "partner1Name" },
            { label: "Partner 2 Full Name", name: "partner2Name" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
            {
              label: "Proposed Wedding Date",
              name: "weddingDate",
              type: "date",
            },
            { label: "Residential Address", name: "address" },
            { label: "Church Affiliation", name: "churchAffiliation" },
            { label: "Local Pastor's Name", name: "pastor" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={name !== "churchAffiliation" && name !== "pastor"}
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default IntendingCouples;
