import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "MedicalPlab — Adaptive Evidence-Grounded Learning | Adham Elsayed",
  description: "A visual engineering case study covering MedicalPlab's learner state, bounded Socratic remediation, transfer verification, evidence engine and deterministic safety boundaries.",
  alternates: { canonical: "https://adhamelsayedai.github.io/projects/medicalplab/" },
  openGraph: { title: "MedicalPlab — Adaptive Evidence-Grounded Medical Learning", description: "Learner-state signals, bounded remediation, transfer verification and grounded tutoring.", url: "https://adhamelsayedai.github.io/projects/medicalplab/" },
};

export default function MedicalPlabCaseStudy() {
  return <CaseStudyShell
    eyebrow="FLAGSHIP CASE STUDY · ADAPTIVE GROUNDED LEARNING"
    title="MedicalPlab — Adaptive Evidence-Grounded Medical Learning"
    summary="A learning intelligence platform connecting learner-state signals, bounded Socratic remediation, independent transfer verification, evidence-grounded tutoring and deterministic safety boundaries into one closed loop."
    repository="https://github.com/AdhamElsayedAI/MedicalPlab"
    role="System architecture and full-stack AI engineering across the learner-state loop, shared evidence engine, safety boundaries, FastAPI services, Next.js experience and mobile handoff."
    context="Medical education and training platform designed to reason about learning signals while keeping scoring, provenance and scientific anatomy boundaries explicit."
    metrics={[
      { value: "3-turn", label: "Socratic flow", note: "Probe → Guide → Consolidate" },
      { value: "23/23", label: "backend integration tests", note: "current repository signal" },
      { value: "12/12", label: "mobile contract tests", note: "frozen API verification" },
      { value: "8/8", label: "CI quality-gate jobs", note: "reported on release branch HEAD" },
    ]}
    architecture={["Question attempt", "Learner-state signal", "Socratic remediation", "Independent transfer check", "Shared evidence engine", "Hybrid retrieval", "Cross-encoder reranking", "Provenance gate", "NLI verification", "Grounded tutor / SAFE_FALLBACK"]}
    decisions={[
      { title: "Bounded remediation", body: "The tutor uses a fixed three-turn sequence — Probe, Guide, Consolidate — so remediation remains purposeful and finite." },
      { title: "Independent transfer", body: "Dialogue completion does not equal mastery. A structurally distinct held-out item tests whether the learner can transfer the principle." },
      { title: "Shared evidence engine", body: "BM25 and dense retrieval feed RRF, cross-encoder reranking, provenance checks and proposition-level NLI verification.", bullets: ["PMCID / DOI provenance", "Rights gating", "Claim-level verification", "SAFE_FALLBACK"] },
    ]}
    evaluation={{ title: "Quality signals span services and handoff boundaries.", body: "The repository reports integration, mobile contract and CI quality-gate results rather than a single vanity metric.", bullets: ["23/23 backend integration tests.", "12/12 mobile contract tests.", "8/8 CI quality-gate jobs on release branch HEAD.", "Independent held-out transfer verification after remediation."] }}
    safety={{ title: "Generative help is separated from deterministic truth.", body: "The tutor can explain and remediate, but unsupported medical claims fail closed. Exam scoring and anatomy structure scoring remain deterministic.", bullets: ["SAFE_FALLBACK when evidence is insufficient.", "Provenance and rights gating before grounded generation.", "Proposition-level NLI verification.", "Canonical anatomy geometry is not generated or altered by AI."] }}
    images={[
      { src: assetPath("/images/medicalplab/home.png"), alt: "MedicalPlab adaptive learner home interface", caption: "Learner state and recommended remediation surfaced in one command center." },
      { src: assetPath("/images/medicalplab/remediation.png"), alt: "MedicalPlab Socratic remediation flow", caption: "Bounded Socratic remediation: Probe, Guide, Consolidate." },
      { src: assetPath("/images/medicalplab/transfer.png"), alt: "MedicalPlab independent transfer assessment", caption: "A held-out transfer item verifies learning beyond the conversation." },
      { src: assetPath("/images/medicalplab/safe-fallback.png"), alt: "MedicalPlab safe fallback tutor response", caption: "SAFE_FALLBACK withholds unsupported content instead of inventing an answer." },
      { src: assetPath("/images/medicalplab/anatomy-guided.png"), alt: "MedicalPlab guided 3D anatomy lesson", caption: "Guided anatomy learning using canonical scientific geometry." },
      { src: assetPath("/images/medicalplab/progress.png"), alt: "MedicalPlab learning progress dashboard", caption: "Cross-module progress and mastery signals in the product experience." },
    ]}
    results={["A closed-loop flow connects error signals to remediation and independent transfer verification.", "The shared evidence engine applies the same provenance and claim-verification boundaries across tutor paths.", "Backend, mobile contract and CI quality gates provide current repository quality signals.", "FastAPI, Next.js, Three.js, Docker and a documented mobile API handoff form a complete delivery surface."]}
    tradeoffs={["The quality signals describe software verification, not educational or clinical efficacy.", "Bounded dialogue limits flexibility in exchange for predictable remediation behavior.", "Cross-encoder reranking and NLI verification add latency and operational complexity.", "The platform is educational and must not be represented as diagnosis or clinical decision support."]}
    improvements={["Run a larger learner study with pre-defined educational outcomes.", "Calibrate distractor-to-reasoning mappings across a broader question bank.", "Benchmark retrieval, reranking and NLI latency under realistic concurrency.", "Expand automated provenance drift checks across every imported evidence source."]}
    stack={["BM25", "Dense Retrieval", "RRF", "Cross-Encoder", "NLI Verification", "FastAPI", "Next.js", "Three.js", "Docker", "Mobile API"]}
    disclaimer="MedicalPlab is an educational and training platform. It is not a diagnostic device or clinical decision-support system."
  />;
}
