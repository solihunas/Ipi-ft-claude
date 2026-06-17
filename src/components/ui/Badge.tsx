import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "purple" | "cyan" | "gold" | "green" | "red";
  className?: string;
}

const variants = {
  purple: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
  gold: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  green: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  red: "bg-red-500/15 text-red-300 border border-red-500/30",
};

export default function Badge({ children, variant = "purple", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
