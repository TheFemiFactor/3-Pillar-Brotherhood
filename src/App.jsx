import React, { useState } from "react";
import HabitScreen from "./components/HabitScreen";
import DashboardScreen from "./components/DashboardScreen";
import CommunityScreen from "./components/CommunityScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("habit");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-around bg-white rounded-xl shadow p-2 mb-4">
          {["habit", "dashboard", "community"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === tab ? "bg-black text-white" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "habit" && <HabitScreen />}
        {activeTab === "dashboard" && <DashboardScreen />}
        {activeTab === "community" && <CommunityScreen />}
      </div>
    </div>
  );
}