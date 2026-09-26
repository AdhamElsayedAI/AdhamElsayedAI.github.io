import { Download } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer id="footer" className="el-footer">
      <div className="el-footer-meta"><span>09 — CLOSING RECORD</span><a href={profile.cv} download>Resume <Download size={14} /></a></div>
      <div className="el-footer-name" aria-label="Adham Elsayed"><span>ADHAM</span><span>ELSAYED</span></div>
      <div className="el-footer-bottom"><p>AI Engineer · Mansoura, Egypt</p><p>© 2026 · Evidence before output. Metrics before claims.</p></div>
    </footer>
  );
}
