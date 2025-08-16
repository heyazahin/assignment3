import React, { useState } from "react";
import Comment from "./Comment";
import Pagination from "./Pagination";

export default function List({ pageSize = 5 }) {
  const [page, setPage] = useState(1);

  const comments = [
    { id: 1, author: "Alice", text: "This is the first comment" },
    { id: 2, author: "Bob", text: "I like this post!" },
    { id: 3, author: "Charlie", text: "Great explanation, thanks!" },
    { id: 4, author: "Diana", text: "Really helpful 🙌" },
    { id: 5, author: "Frank", text: "Nice work!" },
  ];

  const totalPages = Math.ceil(comments.length / pageSize);
  const start = (page - 1) * pageSize;
  const paged = comments.slice(start, start + pageSize);

  return (
    <div>
      <div style={{ display: "grid", gap: 12 }}>
        {paged.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
