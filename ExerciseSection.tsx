import { FormEvent, useMemo, useState } from "react";

type Question = {
  id: number;
  q: string;
  answer: number;
};

type ExerciseSectionProps = {
  /** Optional label rendered above the exercise block. */
  title?: string;
  /** Supply your own question set; defaults to a small mock array. */
  questions?: Question[];
};

const defaultQuestions: Question[] = [
  { id: 1, q: "2 + 3", answer: 5 },
  { id: 2, q: "4 + 1", answer: 5 },
  { id: 3, q: "3 + 3", answer: 6 },
];

export function ExerciseSection({
  title = "Exercise",
  questions = defaultQuestions,
}: ExerciseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentIndex] ?? null,
    [questions, currentIndex],
  );

  const totalQuestions = questions.length;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!currentQuestion || isComplete) {
      return;
    }

    const trimmed = inputValue.trim();
    const numericAnswer = Number(trimmed);

    if (trimmed.length === 0 || Number.isNaN(numericAnswer)) {
      setMessage("Enter a number to continue.");
      return;
    }

    if (numericAnswer === currentQuestion.answer) {
      const nextStars = stars + 1;
      setStars(nextStars);

      const isLastQuestion = currentIndex === totalQuestions - 1;
      if (isLastQuestion) {
        setIsComplete(true);
        setMessage("Well done!");
      } else {
        setCurrentIndex((prev) => prev + 1);
        setInputValue("");
        setMessage("");
      }
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <section
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "24px",
        maxWidth: "480px",
        display: "grid",
        gap: "16px",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <span aria-live="polite" aria-label={`Stars earned ${stars}`}>
          ⭐️ {stars}
        </span>
      </header>

      <div style={{ fontSize: "14px", color: "#555" }}>
        Question {currentIndex + 1} of {totalQuestions}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "12px",
          border: "1px solid #4d4d4d",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#2b2b2b",
            width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <div
        style={{
          fontSize: "32px",
          fontWeight: 600,
          minHeight: "48px",
          textAlign: "center",
        }}
      >
        {isComplete ? "All questions finished" : currentQuestion?.q ?? "—"}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "12px", alignItems: "center" }}
      >
        <input
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          disabled={isComplete}
          style={{
            flex: "1 1 0%",
            padding: "8px 12px",
            fontSize: "16px",
          }}
          aria-label="Your answer"
        />
        <button
          type="submit"
          disabled={isComplete}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: isComplete ? "default" : "pointer",
          }}
        >
          {isComplete ? "Completed" : "Submit Answer"}
        </button>
      </form>

      <div style={{ minHeight: "24px", fontSize: "14px", color: "#c62828" }}>
        {message}
      </div>
    </section>
  );
}

export default ExerciseSection;
