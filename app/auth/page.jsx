"use client";
import React, { useState } from "react";
import axios from "axios";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
      activeTab === "login" ? "/api/auth/login" : "/api/auth/register";
      
      const payload =
      activeTab === "login"
      ? { email: form.email, password: form.password }
      : form;
      
      console.log("its running")
      const res = await axios.post(`http://localhost:5005${endpoint}`, payload);

      localStorage.setItem("token", res.data.token);
      setMsg(`${activeTab === "login" ? "Login" : "Signup"} successful!`);

      setTimeout(() => (window.location.href = "/"), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || `${activeTab} failed`);
    }
  };

  return (
    <div className="min-h-screen 
        bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 
        flex items-center justify-center p-4 transition-all">

      <div className="w-full max-w-md relative">
        
        {/* TOP BRAND */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 
              bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <span className="text-2xl">🤖</span>
          </div>

          <h1 className="text-3xl font-bold 
              bg-gradient-to-r from-blue-600 to-purple-600 
              dark:from-blue-400 dark:to-purple-400 
              bg-clip-text text-transparent">
            AI Tools
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover the future of AI
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            rounded-3xl p-8 shadow-2xl border 
            bg-white/80 border-white/20 backdrop-blur-xl
            dark:bg-slate-800/60 dark:border-slate-700/40 
            dark:shadow-[0_0_30px_rgba(0,0,0,0.4)]
            transition-all
          "
        >
          {/* TABS */}
          <div className="flex rounded-2xl bg-gray-100 dark:bg-slate-700 p-1 mb-8">
            <button
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>

            <button
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "signup"
                  ? "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "signup" && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 rounded-xl border bg-gray-50 
                        focus:ring-2 focus:ring-blue-500 focus:bg-white
                        dark:bg-slate-900 dark:border-slate-700 
                        dark:text-white dark:focus:bg-slate-800
                      "
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="
                          w-full px-4 py-3 rounded-xl border bg-gray-50 
                          focus:ring-2 focus:ring-blue-500 focus:bg-white
                          dark:bg-slate-900 dark:border-slate-700 
                          dark:text-white dark:focus:bg-slate-800
                        "
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="
                          w-full px-4 py-3 rounded-xl border bg-gray-50 
                          focus:ring-2 focus:ring-blue-500 focus:bg-white
                          dark:bg-slate-900 dark:border-slate-700 
                          dark:text-white dark:focus:bg-slate-800
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className="
                        w-full px-4 py-3 rounded-xl border bg-gray-50 
                        focus:ring-2 focus:ring-blue-500 focus:bg-white
                        dark:bg-slate-900 dark:border-slate-700 
                        dark:text-white dark:focus:bg-slate-800
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Your country"
                      className="
                        w-full px-4 py-3 rounded-xl border bg-gray-50 
                        focus:ring-2 focus:ring-blue-500 focus:bg-white
                        dark:bg-slate-900 dark:border-slate-700 
                        dark:text-white dark:focus:bg-slate-800
                      "
                    />
                  </div>
                </div>
              </>
            )}

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full px-4 py-3 rounded-xl border bg-gray-50 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white
                  dark:bg-slate-900 dark:border-slate-700 
                  dark:text-white dark:focus:bg-slate-800
                "
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="
                  w-full px-4 py-3 rounded-xl border bg-gray-50 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white
                  dark:bg-slate-900 dark:border-slate-700 
                  dark:text-white dark:focus:bg-slate-800
                "
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
              } hover:shadow-xl transform hover:-translate-y-0.5`}
            >
              {activeTab === "login" ? "Welcome Back" : "Create Account"}
            </button>
          </form>

          {/* MESSAGE */}
          {msg && (
            <div
              className={`mt-6 p-4 rounded-xl text-center font-medium ${
                msg.includes("successful")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {msg}
            </div>
          )}

          {/* FOOTER SWITCH */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {activeTab === "login"
                ? "New to AI Tools?"
                : "Already have an account?"}

              <button
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "signup" : "login")
                }
                className="ml-2 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                {activeTab === "login" ? "Create one" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
