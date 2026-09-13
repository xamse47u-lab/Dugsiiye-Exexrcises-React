import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="rounded-lg max-w-md mx-auto shadow-md bg-white p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">Student Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Student Name:
          </label>

          <input
            {...register("studentName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full p-2 border rounded"
          />

          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.studentName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full p-2 border rounded"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Grade Level */}
        <div>
          <label className="block text-sm font-medium mb-1">Grade Level:</label>

          <select
            {...register("gradeLevel", {
              required: "Please select your grade",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Grade</option>
            <option value="grade 1">Grade 1</option>
            <option value="grade 2">Grade 2</option>
            <option value="grade 3">Grade 3</option>
            <option value="grade 4">Grade 4</option>
          </select>

          {errors.gradeLevel && (
            <p className="text-sm text-red-500 mt-1">
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        {/* Subjects */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Subjects Interesting:
          </label>

          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
                value="science"
                className="mr-2"
              />
              Science
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="maths"
                className="mr-2"
              />
              Maths
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="english"
                className="mr-2"
              />
              English
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="physics"
                className="mr-2"
              />
              Physics
            </label>
          </div>

          {errors.subjects && (
            <p className="text-sm text-red-500 mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
