import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import API from "../../context/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });

  const [error, setError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSubmitted, setForgotSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await API.post("/api/profiles/login", formData);
      if (res.data?.token) {
        localStorage.setItem("userProfile", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate(`/profile/${res.data.user._id}`);
      }
       else {
        setError(res.data?.message || "Login failed.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during login."
      );
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail || !newPassword || !confirmPassword) return;
    console.log("Password reset for:", forgotEmail);
    setForgotSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Login to Your Profile</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "The Lord is my strength and my shield..." – Psalm 28:7
        </p>
      </section>

      <div className="max-w-md mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        {forgotPassword ? (
          forgotSubmitted ? (
            <p className="text-green-300 text-center mb-4">
              Password successfully reset.
            </p>
          ) : (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Reset Password
              </h2>
              <div>
                <label htmlFor="forgotEmail" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="forgotEmail"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-3 text-[#800020]"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-3 text-[#800020]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
              >
                Reset Password
              </button>
              <p className="text-sm mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setForgotPassword(false)}
                  className="text-[#FFF5E1] underline hover:text-white"
                >
                  Back to Login
                </button>
              </p>
            </form>
          )
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-300 text-sm text-center">{error}</p>
            )}
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B0A8B9]"
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
            <div className="flex justify-between text-sm">
            <Link
  to={"/forgot-password?email=${encodeURIComponent(formData.email)}"}
  className="text-[#FFF5E1] underline hover:text-white"
>
  Forgot password?
</Link>

              <Link
                to="/join-us/admin-login"
                className="text-[#FFF5E1] underline hover:text-white"
              >
                Sign in as Admin
              </Link>
            </div>
            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
