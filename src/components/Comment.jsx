import ReactionGroup from "./ReactionGroup";
export default function Comment({ comment }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        padding: 12,
        borderRadius: 12,
        background: "white",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>{comment.author}</div>
      <div style={{ fontSize: 14, color: "#374151" }}>{comment.text}</div>
      <ReactionGroup />
    </div>
  );
}
