import React from "react";

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const go = (p) => {
    if (p < 1 || p > totalPages) return;
    onChange(p);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      <button onClick={() => go(page - 1)} disabled={page === 1}>
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          aria-current={p === page ? "page" : undefined}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            background: p === page ? "#111827" : "white",
            color: p === page ? "white" : "#111827",
            cursor: p === page ? "default" : "pointer",
          }}
        >
          {p}
        </button>
      ))}
      <button onClick={() => go(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
