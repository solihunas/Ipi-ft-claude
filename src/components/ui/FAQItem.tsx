"use client";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-indigo-500/30" : "border-white/5"} border`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-200 group-hover:text-white transition-colors pr-4">
          <span className="text-indigo-400 mr-3 text-sm font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <div className="border-t border-white/5 pt-4">
            <p className="text-slate-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
