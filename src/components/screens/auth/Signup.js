// client/pages/Signup.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="px-6 pt-6 pb-4">
          <h1 className="text-blue-600 text-2xl font-semibold">Signup</h1>
        </div>

        <div className="h-32 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 rounded-b-3xl -mb-16 relative"></div>

        <div className="px-6 pt-24 pb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Hello!</h2>
            <p className="text-gray-400">Welcome to Travel App</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <Input name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            <Input name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />
            <Input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} />
            <Input type="password" name="confirmPassword" placeholder="Confirm Your Password" value={formData.confirmPassword} onChange={handleChange} />

            <div className="flex items-center gap-3 my-6">
              <Checkbox name="agree" checked={formData.agree} onCheckedChange={(checked) =>
                setFormData(prev => ({ ...prev, agree: checked }))
              } />
              <label className="text-gray-600 text-sm">Agree with Terms & Conditions</label>
            </div>

            <Button type="submit" className="w-full">Signup</Button>

            <div className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-700 font-semibold">
                Login
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}