import React from "react";
import { useForm } from "react-hook-form";

const Form = ({addStudent}) => {
//   const { register, handleSubmit, reset } = useForm();
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function formSubmit(data){
    console.log(data)
    addStudent(data)
  }

  return (
    <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-200 max-w-xl">
      <h2 className="text-2xl font-bold mb-2">Add student</h2>

      <p className="text-gray-600 mb-6">
        Details bharo aur cohort me add karo.
      </p>

      <form
        onSubmit={handleSubmit(formSubmit)}
      >
        {/* Full Name */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Full name</label>

          <input
            {...register("fullName")}
            type="text"
            placeholder="Aarav Sharma"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Email</label>

          <input
            {...register("email")}
            type="email"
            placeholder="aarav@kodr.dev"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        {/* Course */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Course</label>

          <select
            {...register("courses")}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          >
            <option value="">Select course</option>
            <option value="react">React</option>
            <option value="fullstack">Full Stack</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        {/* Fee Paid */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Fee paid (₹)</label>

          <input
            {...register("feePaid")}
            type="number"
            placeholder="4999"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="block font-semibold mb-3">Status</label>

          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                {...register("status")}
                type="radio"
                name="status"
                value="active"
                defaultChecked
              />
              Active
            </label>

            <label className="flex items-center gap-2">
              <input
                {...register("status")}
                type="radio"
                name="status"
                value="completed"
              />
              Completed
            </label>

            <label className="flex items-center gap-2">
              <input
                {...register("status")}
                type="radio"
                name="status"
                value="dropped"
              />
              Dropped
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white font-semibold py-3 rounded-xl hover:bg-cyan-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Form;
