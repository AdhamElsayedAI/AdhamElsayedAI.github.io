import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "MedicalPlab Case Study | Adham Elsayed",
  description: "Engineering case study for MedicalPlab: adaptive evidence-grounded medical learning, verified tutoring and deterministic safety boundaries.",
};

export default function MedicalPlabCaseStudy() {
  return (
    <CaseStudyShell
      eyebrow="FLAGSHIP CASE STUDY · ADAPTIVE GROUNDED LEARNING"
      title="MedicalPlab — Adaptive Evidence-Grounded Medical Learning"
      summary="A learning intelligence platform that connects learner-state signals, bounded Socratic remediation, transfer verification, evidence-grounded tutoring and deterministic safety boundaries into one closed-loop educational system."
      repository="https://github.com/AdhamElsayedAI/MedicalPlab"
      metrics={[
        { value: "3-turn", label: "bounded Socratic flow", note: "Probe → Guide → Consolidate" },
        { value: "23/23", label: "backend integration tests", note: "certified in the current repository README" },
        { value: "12/12", label: "mobile contract tests", note: "frozen mobile API contract verification" },
        { value: "8/8", label: "CI quality-gate jobs", note: "reported on release branch HEAD" },
      ]}
      architecture={[
        "Question attempt",
        "Learner-state signal",
        "Bounded Socratic remediation",
        "Independent transfer check",
        "Hybrid evidence retrieval",
        "Cross-encoder reranking",
        "Provenance + NLI verification",
        "Grounded output / SAFE_FALLBACK",
      ]}
      sections={[
        {
          title: "Learning problem",
          body: "The project moves beyond passive MCQ repetition and stateless chat by treating learner errors as signals that can trigger targeted remediation and later independent transfer verification.",
        },
        {
          title: "Adaptive learning loop",
          body: "Distractor selections feed learner-state tracking and a bounded remediation sequence. Mastery is not advanced purely because a learner completed dialogue; an independent held-out transfer item is used to verify generalization.",
          bullets: [
            "Probe: elicit the learner's reasoning.",
            "Guide: provide a targeted mechanistic clue.",
            "Consolidate: require the learner to synthesize the principle.",
            "Transfer: verify the principle on a structurally distinct held-out item.",
          ],
        },
        {
          title: "Shared evidence engine",
          body: "Tutor generation is routed through a common evidence stack using hybrid BM25+dense retrieval, Reciprocal Rank Fusion, cross-encoder reranking, provenance checks and proposition-level NLI verification.",
        },
        {
          title: "Safety boundary",
          body: "Generative tutoring is intentionally separated from deterministic scoring and medical evidence verification. When evidence cannot support a substantive claim, the system fails closed to SAFE_FALLBACK rather than inventing medical content.",
        },
        {
          title: "Cognitive anatomy",
          body: "Three.js renders canonical NIH HuBMAP Human Reference Atlas geometry while structure-selection scoring remains deterministic. Generative AI can orchestrate educational intent but does not generate or alter scientific anatomy geometry.",
        },
        {
          title: "Delivery and integration",
          body: "The repository includes FastAPI services, a Next.js frontend, Docker support, mobile API contract documentation, integration tests and automated drift verification for the handoff boundary.",
        },
      ]}
      stack={["RAG", "BM25", "Dense Retrieval", "RRF", "Cross-Encoder", "NLI", "FastAPI", "Next.js", "Three.js", "Docker"]}
      disclaimer="MedicalPlab is an educational and training platform, not a diagnostic device or clinical decision-support system."
    />
  );
}
