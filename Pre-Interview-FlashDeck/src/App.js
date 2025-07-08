
import { useState } from "react";
import followUpQuestions from "../public/preview-questions.json";

const qaData = [
  {
    section: "Strengths & Fit",
    questions: [
      {
        q: "Why are you a strong fit for this AI Engineer role?",
        a: [
          "Hands-on with GPT, prompt engineering, Seq2Seq workflows",
          "Built RAG pipelines using FAISS & HuggingFace",
          "Experience deploying full-stack solutions for real users"
        ]
      },
      {
        q: "What are your biggest technical strengths?",
        a: [
          "Prompt engineering and semantic search",
          "Rapid iteration with Colab, Jupyter, VS Code",
          "Deploying GPT-based apps using secure API keys"
        ]
      }
    ]
  }
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        🎯 Pre-Interview FlashDeck
      </h1>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "18px", color: "#0A5EFF" }}>
          ✅ Follow-Up Questions for the Interviewer
        </h2>
        <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
          {followUpQuestions.map((fq, i) => (
            <li key={i}>{fq}</li>
          ))}
        </ul>
      </div>

      {qaData.map((section, sIdx) => (
        <div key={sIdx} style={{
          marginBottom: "20px",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}>
          <h2 style={{ fontSize: "18px", color: "#0A5EFF" }}>{section.section}</h2>
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
                    borderRadius: "4px"
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
