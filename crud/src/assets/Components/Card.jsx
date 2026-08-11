import React from "react";

const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex justify-between items-center">
      {/* Student Details */}
      <div className="border-l-4 border-cyan-500 pl-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold">Rohan</h3>

          <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
            Completed
          </span>
        </div>

        <p className="text-gray-600 text-sm">rohan@gamil.com</p>

        <p className="text-gray-700 text-sm">React · ₹5,000</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          Edit
        </button>

        <button className="border border-red-200 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-50">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
