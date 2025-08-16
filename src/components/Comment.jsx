import React from "react";

export default function Comment({ comment }) {
  return (
    <div style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
      <strong>{comment.author}</strong>
      <p>{comment.text}</p>
    </div>
  );
}
