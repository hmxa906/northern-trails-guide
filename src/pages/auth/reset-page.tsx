import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // ✅ get email & otp from query params
  const email = searchParams.get("email");
  const otp = searchParams.get("otp");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(`❌ ${data.message || "Error resetting password"}`);
      }
    } catch (error) {
      console.error("Reset password error:", error);
      setMessage("❌ Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="New Password"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm Password"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          {message && (
            <div
              className={`text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
