import React from "react";

const HomePage = () => {
  const series = [
    { id: 1, title: "Math Basics", thumbnail: "math.jpg" },
    { id: 2, title: "History Highlights", thumbnail: "history.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Web Series</h1>
      <div className="grid grid-cols-2 gap-4">
        {series.map((s) => (
          <div key={s.id} className="bg-gray-200 p-4 rounded shadow-md">
            <img src={s.thumbnail} alt={s.title} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-bold">{s.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
