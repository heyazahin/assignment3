import react from "react";
import { useParams, Link } from "react-router-dom";
import { authors } from "../data/authors";
export default function AuthorPage() {
  const { id } = useParams();
  const author = authors.find((a) => a.id === Number(id));

  if (!author) {
    return (
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <Link to="/">← Back</Link>
        <h2>Author not found</h2>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Link to="/">← Back</Link>
      <h1>{author.name}</h1>
      <img
        src={author.image}
        alt={author.name}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <p>
        Short bio:Usman Munir is a Senior Technical Program Manager in Microsoft
        Research's AI for Science team, where he oversees a portfolio of drug
        discovery initiatives.
      </p>
    </div>
  );
}
