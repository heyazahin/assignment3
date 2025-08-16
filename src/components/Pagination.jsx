import React from "react";

export default function Pagination({ page, totalPages, onChange }) {
  const handlePrev = () => onChange(Math.max(1, page - 1));
  const handleNext = () => onChange(Math.min(totalPages, page + 1));

  return (
    <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
      <button onClick={handlePrev} disabled={page === 1}>Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={handleNext} disabled={page === totalPages}>Next</button>
    </div>
  );
}
