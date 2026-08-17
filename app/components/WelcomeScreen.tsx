"use client";

import { SCHOOL_NAME, LOGO_PATH, SUGGESTED_QUESTIONS, FEATURED_QUESTION } from "../lib/school-config";

interface WelcomeScreenProps {
  onQuestion: (q: string) => void;
}

export function WelcomeScreen({ onQuestion }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center gap-4">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${LOGO_PATH}`}
          alt={`${SCHOOL_NAME} logo`}
          className="h-14 object-contain"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const sibling = target.nextElementSibling as HTMLElement | null;
            if (sibling) sibling.style.display = "flex";
          }}
        />
        {/* Fallback if no logo image */}
        <div
          className="hidden items-center gap-3"
          style={{ display: "none" }}
        >
          <span
            className="text-3xl font-bold tracking-tight"
            style={{ color: "var(--school-accent)" }}
          >
            {SCHOOL_NAME}
          </span>
        </div>
      </div>

      {/* Welcome message */}
      <div className="max-w-lg text-center mb-8">
        <h1
          className="text-2xl font-semibold mb-3"
          style={{ color: "var(--school-text)" }}
        >
          Welcome to {SCHOOL_NAME}
        </h1>

        <p
          className="leading-relaxed mb-3"
          style={{ color: "var(--school-text-soft)", fontSize: "16px" }}
        >
          Your AI guide to {SCHOOL_NAME} — ask me anything about school
          policies, procedures, pastoral care, the curriculum, or school life.
        </p>

        <p
          className="leading-relaxed"
          style={{ color: "var(--school-text-soft)", fontSize: "13.8px" }}
        >
          Created by BERI Labs, a student-led AI education project. This
          assistant uses retrieval-augmented generation to deliver cited,
          accurate answers from the school knowledge base.
        </p>
      </div>

      {/* Featured question */}
      <div className="max-w-2xl w-full mb-3">
        <button
          onClick={() => onQuestion(FEATURED_QUESTION)}
          className="w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-left transition-all duration-150"
          style={{
            background: "var(--school-accent)",
            color: "#ffffff",
            boxShadow: "0 4px 16px var(--school-shadow-lg)",
          }}
        >
          ✦ {FEATURED_QUESTION}
        </button>
      </div>

      {/* Starter questions */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl w-full mb-10"
        aria-label="Suggested questions"
      >
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onQuestion(q)}
            className="starter-chip px-4 py-3 rounded-lg text-sm text-left bg-transparent border"
            style={{
              color: "var(--school-accent)",
              borderColor: "var(--school-border)",
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Bottom padding to clear the floating input bar */}
      <div className="pb-28" />
    </div>
  );
}
