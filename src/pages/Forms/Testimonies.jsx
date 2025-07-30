import { useState, useEffect } from "react";
import API from "../../context/api";

const Testimonies = () => {
  const [name, setName] = useState("");
  const [testimony, setTestimony] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [testimonies, setTestimonies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/testimonies", {
        fullName: name || "Anonymous",
        message: testimony,
      });
      setSubmitted(true);
      setName("");
      setTestimony("");
      fetchTestimonies();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const fetchTestimonies = async () => {
    try {
      const res = await API.get("/api/testimonies");
      setTestimonies(res.data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    fetchTestimonies();
  }, []);

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Share Your Testimony</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Come and hear, all you who fear God; let me tell you what he has done
          for me." – Psalm 66:16
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-16 bg-[#FFF5E1]/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Submit Your Testimony</h2>
        {submitted ? (
          <p className="text-green-300 font-medium">
            Thank you! Your testimony has been received.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label className="block mb-1">Testimony</label>
              <textarea
                name="testimony"
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
                placeholder="Write your testimony here..."
                required
                className="w-full h-40 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Recent Testimonies
        </h2>
        {testimonies.map((t, i) => (
          <div key={i} className="bg-[#FFF5E1]/10 p-6 rounded-lg shadow-sm">
            <p className="italic mb-2">"{t.message}"</p>
            <p className="text-sm text-right text-[#FFF5E1]/80">– {t.name || "Anonymous"}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonies;
