import React from "react";

export default function CommunityScreen() {
  const groups = ["Discipline Bros", "Book Lovers", "Early Risers"];

  return (
    <div className="bg-white rounded-2xl shadow p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Community</h2>
      <input
        type="text"
        placeholder="Search groups..."
        className="w-full border rounded-lg p-2"
      />

      <div className="space-y-3 mt-3">
        {groups.map((group, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-xl">
            <p className="font-medium">{group}</p>
            <p className="text-sm text-gray-500">12 members | Avg: 78%</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Chat</h3>
        <div className="h-32 bg-gray-100 rounded-lg p-2 overflow-y-auto text-sm">
          <p><strong>@Jane:</strong> Finished all 3 today!</p>
          <p><strong>@Mark:</strong> Need a reset 😅</p>
        </div>
      </div>
    </div>
  );
}