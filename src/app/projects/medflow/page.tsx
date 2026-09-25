import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "MedFlow — Evidence-Grounded Clinical AI | Adham Elsayed",
  description: "A visual engineering case study covering MedFlow's hybrid retrieval, evidence gating, retrieval evaluation, citation verification and controlled failure behavior.",
  alternates: { canonical: "https://adhamelsayedai.github.io/projects/medflow/" },
  openGraph: { title: "MedFlow — Evidence-Grounded Clinical AI", description: "Hybrid retrieval, measurable ranking quality and verifiable citations.", url: "https://adhamelsayedai.github.io/projects/medflow/" },
};

export default function MedFlowCaseStudy() {
  return <CaseStudyShell
    eyebrow="FLAGSHIP CASE STUDY · GENERATIVE AI / RAG"
    title="MedFlow — Evidence-Grounded Clinical AI"
    summary="A clinical AI prototype engineered around hybrid dense+sparse retrieval, evidence gating, measurable retrieval quality and verifiable citations rather than unconstrained answer generation."
    repository="https://github.com/AdhamElsayedAI/MedFlow-AI"
    role="AI engineering across retrieval experiments, grounded generation, evidence gating, validation and product integration within Team MedFlow."
    context="Hackathon system focused on thyroid-domain evidence retrieval and safe, traceable response behavior. Awarded 2nd Place at AI Hackathon Mansoura 2026."
    metrics={[
      { value: "53.12%", label: "Precision@4", note: "200-token / Top-K=4 retrieval" },
      { value: "87.50%", label: "Hit@4", note: "retrieval engineering metric" },
      { value: "≈0.7031", label: "MRR", note: "retrieval engineering metric" },
      { value: "7/7", label: "grounded validation", note: "reported validation set" },
    ]}
    architecture={["Documents", "200-token chunking", "BGE dense retrieval", "BM25 sparse retrieval", "Reciprocal Rank Fusion", "Evidence gate", "Grounded generation", "Citation verification", "ANSWER / CAUTION / ABSTAIN / REDIRECT"]}
    decisions={[
      { title: "Hybrid retrieval", body: "Dense semantic retrieval and sparse lexical retrieval cover different failure modes. Reciprocal Rank Fusion combines their rankings without requiring score normalization." },
      { title: "Measured configuration", body: "Chunk size and Top-K were selected through retrieval experiments rather than intuition.", bullets: ["BGE embeddings", "BM25 lexical search", "ChromaDB", "Top-K 4", "200-token chunks"] },
      { title: "Evidence before generation", body: "An evidence gate separates retrieval from response generation and routes weakly supported questions toward caution, abstention or redirection." },
    ]}
    evaluation={{ title: "Retrieval quality was benchmarked explicitly.", body: "The reported configuration reached 53.12% Precision@4, 87.50% Hit@4 and approximately 0.7031 MRR.", bullets: ["Precision@4 measures relevant evidence in the retrieved set.", "Hit@4 measures whether at least one relevant result appears.", "MRR measures how early the first relevant result appears.", "These are retrieval engineering metrics, not clinical accuracy."] }}
    safety={{ title: "Failure is a designed state.", body: "Generation is not mandatory. Evidence sufficiency and citation validation define whether the system can answer, caution, abstain or redirect.", bullets: ["100% citation validity across 7/7 reported validation cases.", "100% metadata resolution and claim coverage in that set.", "Zero fabricated citations recorded in the reported set."] }}
    images={[
      { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow grounded RAG chat showing answer and retrieved sources", caption: "Grounded answer workspace with retrieved evidence and source traceability." },
      { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow retrieval architecture product interface", caption: "The product exposes the grounded retrieval path instead of hiding it." },
      { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow thyroid disease knowledge base", caption: "Evidence corpus browsing and disease-level source organization." },
      { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter interface", caption: "Structured laboratory interpretation with evidence-aware output boundaries." },
      { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search", caption: "Document-level search with resolved source metadata." },
    ]}
    results={["2nd Place — AI Hackathon Mansoura 2026.", "A reproducible retrieval benchmark identified the reported 200-token / Top-K=4 configuration.", "Grounded generation validation covered citations, metadata resolution, claims and fabricated references.", "The product communicates evidence and failure states instead of presenting generation as certainty."]}
    tradeoffs={["The benchmark measures retrieval behavior on the project dataset; it does not establish clinical validity.", "The reported grounded validation set contains seven cases and should grow before stronger generalization claims.", "RRF provides robust rank fusion but does not learn task-specific fusion weights."]}
    improvements={["Expand the retrieval benchmark with broader question types and harder negative evidence.", "Add automated regression reporting for every retrieval and generation change.", "Calibrate evidence thresholds on a larger held-out set.", "Run structured expert review for usability and safety messaging."]}
    stack={["RAG", "BGE Embeddings", "BM25", "Reciprocal Rank Fusion", "ChromaDB", "FastAPI", "Groq", "Python"]}
    disclaimer="Educational prototype. Reported metrics describe retrieval engineering and grounded validation — not clinical accuracy, diagnostic performance or medical efficacy."
  />;
}
