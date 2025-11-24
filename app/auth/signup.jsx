"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5005/api/auth/register", form);
      console.log("its running")
      localStorage.setItem("token", res.data.token);
      setMsg("Signup successful! Please login.");
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Signup</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Signup
        </button>
        {msg && <p className="text-center text-sm text-gray-600 mt-3">{msg}</p>}
      </form>
    </div>
  );
}
