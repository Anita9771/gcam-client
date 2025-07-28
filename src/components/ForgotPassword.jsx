import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../context/api";

const ForgotPassword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prefillEmail = queryParams.get("email") || "";

  const [email, setEmail] = useState(prefillEmail);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmail(prefillEmail);
  }, [prefillEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/profiles/forgot-password", { email });
      setMessage(res.data.message || "Reset link sent to your email.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send reset link.");
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF5E1]/10 p-8 rounded-lg max-w-md w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <p className="text-sm text-center mb-4">
          Enter your email to receive a reset link.
        </p>

        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-gray-900"
        />

        <button
          type="submit"
          className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md w-full"
        >
          Send Reset Link
        </button>

        {message && (
          <p className="text-center text-sm text-green-300">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
