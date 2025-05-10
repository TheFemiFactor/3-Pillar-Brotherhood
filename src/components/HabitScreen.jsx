import React from "react";

export default function HabitScreen() {
  const habits = ["Pray for 15 mins", "Read 10 pages", "No phone till 9am"];

  return (
    <div className="bg-white rounded-2xl shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold">Today's Habits</h2>
      {habits.map((habit, index) => (
        <div key={index} className="flex items-center justify-between">
          <span>{habit}</span>
          <input type="checkbox" className="w-5 h-5 rounded-full accent-black" />
        </div>
      ))}
      <button className="w-full mt-4 bg-black text-white py-2 rounded-xl">
        + Add Habit
      </button>
    </div>
  );
}