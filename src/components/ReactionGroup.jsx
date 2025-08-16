import React, { useState } from "react";
import "./ReactionGoup.css";

const OPTIONS = [
  { key: "like", label: "Like", icon: "👍" },
  { key: "love", label: "Love", icon: "❤️" },
  { key: "angry", label: "Angry", icon: "😡" },
  { key: "sad", label: "Sad", icon: "😢" },
];

export default function ReactionGroup() {
  const [counts, setCounts] = useState({
    like: 0,
    love: 0,
    angry: 0,
    sad: 0,
  });

  const handleReactionClick = (key) => {
    setCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="reaction-group">
      {OPTIONS.map((opt) => {
        const percent = total
          ? ((counts[opt.key] / total) * 100).toFixed(0)
          : 0;
        return (
          <button
            key={opt.key}
            className="reaction-button"
            onClick={() => handleReactionClick(opt.key)}
          >
            <span>{opt.icon}</span> {opt.label} ({counts[opt.key]}/{percent}%)
          </button>
        );
      })}
    </div>
  );
}
