import { articles } from "../data/articles";
import { authors } from "../data/authors";
import { Link } from "react-router-dom";
import ReactionGroup from "../components/ReactionGroup";
import List from "../components/List";
import React from "react";

export default function ArticlePage() {
  const article =
    Array.isArray(articles) && articles.length > 0 ? articles[0] : null;
  const author = Array.isArray(authors)
    ? authors.find((a) => a.id === article?.authorId)
    : null;
  if (!article) {
    return <div>No article found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{article.title}</h1>
      <p>
        <strong>Author</strong>
        {author ? (
          <Link to={`/author/${author.id}`}>{author.name}</Link>
        ) : (
          "Unknown"
        )}
      </p>
      <img
        src={article.cover}
        alt={article.title}
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <p>{article.content}</p>
      <ReactionGroup />
      <h2 style={{ marginTop: "20px" }}>Comments</h2>
      <List pageSize={3} />
    </div>
  );
}
