import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../context/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirm) {
      return setMessage("Passwords do not match.");
    }

    try {
      const res = await API.post("/api/profiles/reset-password", {
        token,
        newPassword,
      });
      setMessage("Password reset successful.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF5E1]/10 p-8 rounded-lg max-w-md w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Reset Your Password</h1>

        <input
          type="password"
          required
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-gray-900"
        />

        <input
          type="password"
          required
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-gray-900"
        />

        <button
          type="submit"
          className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md w-full"
        >
          Reset Password
        </button>

        {message && (
          <p className="text-center text-sm text-green-300">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
