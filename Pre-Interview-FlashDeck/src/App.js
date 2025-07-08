import { useState } from "react";

const qaData = [
  {
    section: "Strengths & Fit for Dovetail",
    questions: [
      {
        q: "Why are you a strong fit for this AI Engineer role at Dovetail?",
        a: [
          "Hands-on experience with GPT, prompt engineering, Seq2Seq",
          "Skilled with TensorFlow, PyTorch, Hugging Face, Spark ML",
          "Built and deployed NLP and RAG pipelines (FAISS, Pinecone)",
          "Delivered production-ready systems (Chevron, CA Education)",
          "Self-starter, async-communicator, and team collaborator",
        ],
      },
      {
        q: "What are your biggest technical strengths?",
        a: [
          "Prompt engineering and semantic search pipelines",
          "Building in Colab/Jupyter using modular Python",
          "Chunk → Embed → Index → Generate process mastery",
          "Rapid AI-driven learning with prompt iteration",
        ],
      },
    ],
  },
  {
    section: "Projects",
    questions: [
      {
        q: "Tell us about a recent AI project you built.",
        a: [
          "RAG pipeline loading internal documents (PDF/DOCX)",
          "Used sentence-transformers + FAISS for search",
          "Retrieved context, passed to GPT-4 for answers",
          "Built with Colab, secured API keys, pushed to GitHub",
        ],
      },
      {
        q: "Where can we see this project?",
        a: [
          "GitHub repo link with full Colab notebook",
          "Slack channel: #ellegreyllc-rag-developer for demo access",
        ],
      },
    ],
  },
  {
    section: "Growth & Resilience",
    questions: [
      {
        q: "What's a technical weakness you've worked on?",
        a: [
          "Initially lacked confidence with production-scale APIs",
          "I addressed this by building and documenting a full GPT-based RAG app from scratch",
          "Now comfortable deploying scalable, documented solutions for real users",
        ],
      },
      {
        q: "Have you ever had to learn a tool under pressure?",
        a: [
          "Yes – I learned FAISS, chunking, and embedding workflows in real time for an interview project",
          "I used prompt chaining and logical Q&A to guide every step — like this app demonstrates",
        ],
      },
    ],
  },
  {
    section: "Favorite AI & Dev Tools",
    questions: [
      {
        q: "Which AI tools are your go-to stack?",
        a: [
          "Hugging Face Transformers",
          "OpenAI GPT-4 API",
          "FAISS for semantic search",
          "SentenceTransformers for embeddings",
        ],
      },
      {
        q: "What platforms do you use to develop?",
        a: [
          "Google Colab and Jupyter Notebook for experimentation",
          "GitHub for version control and code sharing",
          "Slack + VS Code for team-based collaboration",
        ],
      },
    ],
  },
  {
    section: "Legal, Teaching & Slack-Based Workflows",
    questions: [
      {
        q: "Tell us about your legal AI or documentation work.",
        a: [
          "I structured and tracked legal motion filings using AI prompts",
          "Organized deadlines and case flow with Slack + Docs",
          "Simulated use of GPT to support filings, Q&A, and template generation",
        ],
      },
      {
        q: "How has your teaching background helped in tech?",
        a: [
          "I know how to break complex topics down for others",
          "This skill directly supports onboarding, documentation, and client training",
          "Also helped me build AI education tools and guides",
        ],
      },
      {
        q: "Do you use Slack for developer workflows?",
        a: [
          "Yes – I created my own RAG developer Slack channel",
          "Used it to organize knowledge, prototype async workflows, and test project-based conversations",
        ],
      },
    ],
  },
  {
    section: "Screen-Share Driven Talking Points",
    questions: [
      {
        q: "2-Second Intro: Tell us a little about yourself",
        a: [
          "I’m Loretta Gray — I specialize in building AI solutions from scratch using RAG pipelines, GPT prompting, and rapid deployment tools to solve real-world problems.",
          "Rather than just explain, I'd love to quickly show you how I approach this — would it be okay if I share my screen?",
        ],
      },
      {
        q: "Tell us about a recent project",
        a: [
          "Perfect — I’ll show you exactly how I developed my RAG-powered financial insights tool.",
          "It connects document search, GPT reasoning, and secure deployment to solve real-world research problems.",
        ],
      },
      {
        q: "How do you approach AI problem-solving?",
        a: [
          "Let me walk you through my step-by-step process for building retrieval-augmented pipelines.",
          "Here’s how I chunk, embed, and use GPT for context-aware answers.",
        ],
      },
      {
        q: "What are your biggest technical strengths?",
        a: [
          "My strengths are prompting for reliable GPT output, building semantic search with FAISS, and deploying end-to-end tools fast.",
          "I’ll show you how I structured this project to demonstrate those strengths.",
        ],
      },
      {
        q: "Do you have experience working independently?",
        a: [
          "Absolutely — everything I’m showing today, including this AI demo, was designed and deployed independently.",
          "It reflects how I approach real-world use cases with autonomy and technical ownership.",
        ],
      },
      {
        q: "How familiar are you with rapid prototyping?",
        a: [
          "That’s exactly how I approached this — from blank notebook to live RAG demo with secure token handling, modular code, and clear outputs.",
          "Let me show you how that workflow plays out.",
        ],
      },
    ],
  },
];

const followUpQuestions = [
  "How does your team currently apply retrieval-augmented generation (RAG) in real-world projects?",
  "Do engineers here have flexibility to prototype with new vector databases like FAISS or Pinecone?",
  "What kinds of LLM use cases are driving the most value for your clients right now?",
  "How integrated are GPT-based tools with your clients’ existing business systems?",
  "How do developers typically collaborate across teams — is Slack your main async tool?",
  "What’s your process for knowledge sharing, especially with AI workflows evolving so quickly?",
  "How do new engineers ramp up on your codebase and AI stack?",
  "What does success look like for this AI Engineer role in the first 60 to 90 days?",
  "Are there upcoming client projects where RAG or GPT tools will be central?",
  "What learning resources or mentorship do you offer for engineers exploring newer LLM workflows?",
]; // ✅ don't forget this semicolon!

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedFollowUps, setSelectedFollowUps] = useState([]);

  const handleCheckboxChange = (question) => {
    setSelectedFollowUps((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        🎯 Pre-Interview FlashDeck
      </h1>

      {/* === EMPLOYER INPUT SECTION FIRST === */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ fontSize: "18px", color: "#4B0082" }}>
          📝 Employer Pre-Interview Setup
        </h2>

        <label>
          Company Name:
          <input
            type="text"
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
            placeholder="e.g., Arine Health"
          />
        </label>

        <label>
          Job Title:
          <input
            type="text"
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
            placeholder="e.g., AI Engineer"
          />
        </label>

        <label>
          Job Description or Project Summary:
          <textarea
            rows="4"
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
            placeholder="Paste job description or project details here..."
          ></textarea>
        </label>

        <label>
          Choose the top 3+ follow-up questions you’d like Elle to ask you
          during or after the interview:
        </label>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {followUpQuestions.map((q, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedFollowUps.includes(q)}
                  onChange={() => handleCheckboxChange(q)}
                  style={{ marginRight: "8px" }}
                />
                {q}
              </label>
            </li>
          ))}
        </ul>

        <p
          style={{
            fontSize: "12px",
            color: selectedFollowUps.length < 3 ? "red" : "green",
          }}
        >
          {selectedFollowUps.length < 3
            ? "Please select at least 3 questions."
            : "✅ Thanks! Elle will review these right after the interview."}
        </p>

        <button
          disabled={selectedFollowUps.length < 3}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: selectedFollowUps.length < 3 ? "#ccc" : "#0A5EFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: selectedFollowUps.length < 3 ? "not-allowed" : "pointer",
          }}
        >
          Submit Employer Input
        </button>
      </div>

      {/* === FLASH Q&A === */}
      {qaData.map((section, sIdx) => (
        <div
          key={sIdx}
          style={{
            marginBottom: "20px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "18px", color: "#0A5EFF" }}>
            {section.section}
          </h2>

          {section.questions.map((qa, qIdx) => {
            const id = `${sIdx}-${qIdx}`;
            const isOpen = openIndex === id;
            return (
              <div key={qIdx} style={{ marginTop: "10px" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px",
                    border: "1px solid #aaa",
                    background: "#f9f9f9",
                    borderRadius: "4px",
                  }}
                >
                  {qa.q} {isOpen ? "▲" : "▼"}
                </button>

                {isOpen && (
                  <ul style={{ marginTop: "6px", paddingLeft: "20px" }}>
                    {qa.a.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

      ))}
    </div>
  );
}
