import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "MedFlow-AI Case Study | Adham Elsayed",
  description: "Engineering case study for MedFlow-AI: evidence-grounded clinical RAG with measurable retrieval and citation validation.",
};

export default function MedFlowCaseStudy() {
  return (
    <CaseStudyShell
      eyebrow="FLAGSHIP CASE STUDY · GENERATIVE AI / RAG"
      title="MedFlow — Evidence-Grounded Clinical AI"
      summary="A clinical AI prototype engineered around hybrid dense+sparse retrieval, evidence gating, measurable retrieval quality and verifiable citations rather than unconstrained answer generation."
      repository="https://github.com/AdhamElsayedAI/MedFlow-AI"
      metrics={[
        { value: "53.12%", label: "Precision@4", note: "200-token / Top-K=4 retrieval configuration" },
        { value: "87.50%", label: "Hit@4", note: "retrieval engineering metric" },
        { value: "≈0.7031", label: "MRR", note: "retrieval engineering metric" },
        { value: "7/7", label: "grounded validation cases", note: "citation validity, metadata resolution and claim coverage" },
      ]}
      architecture={[
        "Clinical query",
        "BGE dense retrieval",
        "BM25 sparse retrieval",
        "Reciprocal Rank Fusion",
        "Evidence gate",
        "Grounded generation",
        "Citation validation",
      ]}
      sections={[
        {
          title: "Problem",
          body: "Clinical question-answering prototypes can sound confident even when retrieval is weak or citations are not actually supporting the response. MedFlow was built to make evidence quality and failure behavior explicit.",
        },
        {
          title: "Retrieval engineering",
          body: "The retrieval layer combines dense BGE embeddings with BM25 lexical search and Reciprocal Rank Fusion. Chunking and Top-K configurations were benchmarked instead of selected by intuition.",
          bullets: [
            "200-token / Top-K=4 configuration reached 53.12% Precision@4.",
            "The same configuration reached 87.50% Hit@4 and approximately 0.7031 MRR.",
            "Metrics are presented as retrieval engineering metrics, not clinical accuracy.",
          ],
        },
        {
          title: "Controlled response behavior",
          body: "Evidence gating drives explicit ANSWER / CAUTION / ABSTAIN / REDIRECT behavior so the system can withhold unsupported answers instead of treating generation as mandatory.",
        },
        {
          title: "Grounding validation",
          body: "Seven validation cases were checked for citation validity, metadata resolution, claim coverage and fabricated citations.",
          bullets: [
            "7/7 cases passed citation validity.",
            "7/7 cases passed metadata resolution and claim coverage checks.",
            "Zero fabricated citations were recorded in the reported validation set.",
          ],
        },
        {
          title: "Engineering takeaway",
          body: "The project demonstrates the part of RAG that matters after the demo: retrieval measurement, evidence traceability, failure states and validation around the generated answer.",
        },
      ]}
      stack={["RAG", "BGE", "ChromaDB", "BM25", "RRF", "FastAPI", "Groq", "Python"]}
      disclaimer="This project is an educational prototype and its reported retrieval metrics are not measures of clinical accuracy."
    />
  );
}
