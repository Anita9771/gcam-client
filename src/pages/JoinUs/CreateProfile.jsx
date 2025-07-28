import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import API from "../../context/api";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    // image: null,
    country: "",
    memberType: "",
    referral: "",
    localPastor: "",
    gender: "",
    dob: "",
    maritalStatus: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleImageChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      }

      // ✅ Ensure correct endpoint path
      await API.post("/api/profiles/register", data);

      navigate("/join-us/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Submission failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Create Your Profile</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "I praise you because I am fearfully and wonderfully made." – Psalm
          139:14
        </p>
      </section>

      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {error && <p className="text-red-300 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Country</label>
            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 bg-[#800020] focus:ring-2 focus:ring-[#B0A8B9]"
            >
              <option value="">Select your country</option>
              <option value="Austria">Austria</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Liberia">Liberia</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 bg-[#800020] focus:ring-2 focus:ring-[#B0A8B9]"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 bg-[#800020] focus:ring-2 focus:ring-[#B0A8B9]"
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Membership Type</label>
            <select
              name="memberType"
              value={formData.memberType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 bg-[#800020] focus:ring-2 focus:ring-[#B0A8B9]"
            >
              <option value="">Select one</option>
              <option value="Physical">Physical Member</option>
              <option value="Online">Online Member</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">How did you hear about us?</label>
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="e.g. Friend, Social Media"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div>
            <label className="block mb-1">Local Pastor</label>
            <input
              type="text"
              name="localPastor"
              value={formData.localPastor}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          {/* <div>
            <label className="block mb-1">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-2 py-1 rounded-md bg-[#800020] text-gray-900"
            />
          </div> */}

          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
              />
              <button
                type="button"
                className="absolute top-2 right-3 text-[#800020]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] w-full"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
