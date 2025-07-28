import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../context/api";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError("Please fill in all fields");
    }

    try {
      const { data } = await API.post("/api/auth/login", formData);
      localStorage.setItem("token", data.token);
      setError("");
      navigate("/admin"); // redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-[#FFF5E1]/10 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Admin Login</h1>
        <p className="italic text-center mb-6 text-[#FFF5E1]/80">
          "The Lord is my strength and my shield; my heart trusts in Him, and He
          helps me." – Psalm 28:7
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-10 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-[#800020]"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
