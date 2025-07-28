import React from "react";

interface Activity {
  action: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
      <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">Recent Activity</h2>
      <ul className="divide-y divide-gray-200" role="list">
        {activities.map((activity, index) => (
          <li key={index} className="py-3 flex justify-between items-center">
            <span className="text-gray-700 text-sm sm:text-base">{activity.action}</span>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;