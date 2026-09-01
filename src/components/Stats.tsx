import { BarChart3, Boxes, GraduationCap, Trophy } from "lucide-react";
import { stats } from "@/data/profile";
import { Reveal } from "./Reveal";

const icons = [Trophy, Boxes, BarChart3, GraduationCap];

export function Stats() {
  return (
    <div className="site-container relative z-10 -mt-2 pb-10 lg:-mt-10 lg:pb-16">
      <Reveal className="grid overflow-hidden rounded-2xl border border-line bg-line shadow-panel sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <div key={stat.label} className="flex items-center gap-4 bg-surface p-5 sm:p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent-soft text-accent">
                <Icon aria-hidden className="h-4 w-4" />
              </span>
              <span>
                <strong className="block text-xl font-black tracking-[-0.04em] text-ink sm:text-2xl">{stat.value}</strong>
                <span className="mt-0.5 block text-xs leading-5 text-muted">{stat.label}</span>
              </span>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
