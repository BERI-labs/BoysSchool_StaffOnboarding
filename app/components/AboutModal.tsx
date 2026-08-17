"use client";

import { SCHOOL_NAME } from "../lib/school-config";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export function AboutModal({ open, onClose }: AboutModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0, 0, 0, 0.15)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-md rounded-2xl border p-6 animate-fade-in overflow-y-auto"
        style={{
          background: "var(--school-bg)",
          borderColor: "var(--school-border)",
          boxShadow: "0 20px 60px rgba(15, 25, 41, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06)",
          maxHeight: "85vh",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2
            className="font-semibold uppercase tracking-widest"
            style={{ color: "var(--school-text)", fontSize: "0.875rem" }}
          >
            About {SCHOOL_NAME}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-7 h-7 flex items-center justify-center rounded-full transition-opacity hover:opacity-60"
            style={{ color: "var(--school-text-muted)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* FAQ content */}
        <dl className="space-y-5">
          <div>
            <dt
              className="font-semibold mb-1"
              style={{ color: "var(--school-accent)", fontSize: "1.25rem" }}
            >
              What is this?
            </dt>
            <dd
              className="text-sm leading-relaxed"
              style={{ color: "var(--school-text-soft)" }}
            >
              This is Beri, an AI assistant created by students at BERI Labs for{" "}
              {SCHOOL_NAME}. It is designed to help new and existing staff understand
              school policies, procedures, pastoral systems, and the curriculum using
              a curated knowledge base.
            </dd>
          </div>

          <div>
            <dt
              className="font-semibold mb-1"
              style={{ color: "var(--school-accent)", fontSize: "1.25rem" }}
            >
              What can it help me with?
            </dt>
            <dd
              className="text-sm leading-relaxed"
              style={{ color: "var(--school-text-soft)" }}
            >
              Ask about school policies, teaching procedures, the pastoral care
              system, rewards and sanctions, the duty rota, the senior school
              curriculum, joint teaching, Student Voice, the Senior Leadership
              Team, and much more — all with cited sources.
            </dd>
          </div>

          <div>
            <dt
              className="font-semibold mb-1"
              style={{ color: "var(--school-accent)", fontSize: "1.25rem" }}
            >
              How does it work?
            </dt>
            <dd
              className="text-sm leading-relaxed"
              style={{ color: "var(--school-text-soft)" }}
            >
              The assistant uses hybrid search (BM25 keyword search plus
              semantic vector search) to find relevant passages from the school
              knowledge base, then generates a response via an AI model — with
              cited sources so you can verify the information.
            </dd>
          </div>

          <div>
            <dt
              className="font-semibold mb-1"
              style={{ color: "var(--school-accent)", fontSize: "1.25rem" }}
            >
              Who made this?
            </dt>
            <dd
              className="text-sm leading-relaxed"
              style={{ color: "var(--school-text-soft)" }}
            >
              Beri is a student-led project created by the BERI Labs team, a
              student AI education initiative. Information is sourced from official{" "}
              {SCHOOL_NAME} documentation. Always verify important matters directly
              with the school.
            </dd>
          </div>
        </dl>

        {/* Dismiss button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
          style={{
            background: "var(--school-accent)",
            color: "#ffffff",
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
