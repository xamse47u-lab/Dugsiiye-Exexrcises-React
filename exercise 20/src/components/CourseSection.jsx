import React from "react";
import Assignments from "./Assignments";
import Announcements from "./Announcements";

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Course Progress */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Course Progress
          </h2>

          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{course.name}</h3>

                  <span className="text-sm text-gray-500">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-500">
                    Next: {course.nextLesson}
                  </span>

                  <span className="text-gray-500">{course.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <Assignments />
        <Announcements />
      </div>
    </div>
  );
};

export default CourseSection;
