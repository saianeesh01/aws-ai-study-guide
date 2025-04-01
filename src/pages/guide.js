import * as React from "react"
import { Link } from "gatsby"

const chapters = [
  { title: "Introduction to AI/ML in AWS", slug: "intro-to-ai-ml" },
  { title: "AWS AI Services Overview", slug: "ai-services" },
  { title: "Use Cases & Responsible AI", slug: "use-cases" },
  // More chapters to come...
]

export default function Guide() {
  return (
    <div style={{ padding: "2rem", color: "#00ff90", background: "#000" }}>
      <h1>📘 AWS AI Study Guide</h1>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter.slug}>
            <Link to={`/guide/${chapter.slug}`} style={{ color: "#00ff90" }}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
