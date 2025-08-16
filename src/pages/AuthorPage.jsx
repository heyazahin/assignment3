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
        discovery initiatives. 💡 Technology-Agnostic Developer: I'm not bound
        by specific languages or technologies; I analyze each problem
        meticulously and choose the most suitable technology stack to tackle it
        effectively. 🔧 Skills & Stack: - JavaScript (ES6) | React.js | Node.js
        | Express.js - PHP (Core/Laravel/Yii2, WordPress) - Database Management
        and Architecture (MySQL/MongoDB) - Version Control (Git) - Agile
        Methodologies (JIRA) - Restful APIs 🌐 Passionate About Open Source:
        I've extensively contributed to and worked with various open-source
        technologies and languages, enhancing my adaptability and breadth of
        knowledge. 👨‍🔧 Collaborative & Agile: Proficient in Agile methodologies
        using tools like JIRA, I thrive in fast-paced environments,
        collaborating seamlessly with cross-functional teams to deliver
        top-notch solutions. Let's connect and discuss how I can bring my
        expertise to your projects!
      </p>
    </div>
  );
}
