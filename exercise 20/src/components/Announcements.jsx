import React from "react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Announcements
      </h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border-l-4 border-blue-500 pl-4"
          >
            <h3 className="font-medium text-gray-800">{announcement.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{announcement.message}</p>
            <p className="text-xs text-gray-400 mt-1">{announcement.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
