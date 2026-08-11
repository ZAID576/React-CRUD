import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#111a32] text-white rounded-3xl p-8 shadow-lg">
        <p className="text-cyan-400 font-bold tracking-widest text-sm mb-2">
          KODR COHORT
        </p>

        <h1 className="text-4xl font-bold mb-8">Student Manager</h1>

        <div className="flex justify-between items-center">
          {/* Students */}
          <div className="border-l-4 border-cyan-400 pl-4">
            <h2 className="text-3xl font-bold">2</h2>
            <p className="text-gray-300">Students</p>
          </div>

          {/* Active */}
          <div className="border-l-4 border-cyan-400 pl-4">
            <h2 className="text-3xl font-bold">0</h2>
            <p className="text-gray-300">Active</p>
          </div>

          {/* Fees */}
          <div className="border-l-4 border-cyan-400 pl-4">
            <h2 className="text-3xl font-bold">₹13,000</h2>
            <p className="text-gray-300">Fees collected</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
