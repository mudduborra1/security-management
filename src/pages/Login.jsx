import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Protect login page
useEffect(() => {

  const auth = localStorage.getItem("auth");

  // Already logged in
  if (auth) {
    navigate("/dashboard", { replace: true });
  }

}, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleLogin = (e) => {

  e.preventDefault();

  // Demo credentials
  const demoEmail = "admin@gmail.com";
  const demoPassword = "1234";

  if (
    formData.email.trim() === demoEmail &&
    formData.password.trim() === demoPassword
  ) {

    setError("");

    // Save auth
    localStorage.setItem("auth", "true");

    // Redirect dashboard
    navigate("/dashboard", { replace: true });

  } else {

    setError("Invalid email or password");

  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Title */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-600 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  h-12
                  pl-11
                  pr-4
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="
                  w-full
                  h-12
                  pl-11
                  pr-12
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              h-12
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              transition
            "
          >
            Login
          </button>

        </form>

        {/* Demo Credentials */}
        <div className="mt-6 rounded-xl bg-gray-100 p-4 text-sm text-gray-600">

          <p className="font-semibold mb-1">
            Demo Credentials
          </p>

          <p>Email: admin@gmail.com</p>
          <p>Password: admin123</p>

        </div>

      </div>

    </div>
  );
}