import React, { useState } from "react";

export default function DashboardScreen() {
  const [view, setView] = useState("personal");

  return (
    <div className="bg-white rounded-2xl shadow p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <select
          className="border p-1 rounded"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value="personal">Personal</option>
          <option value="group">Group</option>
        </select>
      </div>

      {view === "personal" ? (
        <div className="space-y-2">
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="font-medium">This Week</p>
            <p>5/7 days complete</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="font-medium">Best Day</p>
            <p>Tuesday (3/3)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="font-medium">Consistency Score</p>
            <p>87%</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="font-medium">Top Performer</p>
            <p>@JohnDoe (100%)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="font-medium">Group Average</p>
            <p>68% completion</p>
          </div>
        </div>
      )}
    </div>
  );
}