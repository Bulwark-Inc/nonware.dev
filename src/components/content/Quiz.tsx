"use client";

import { useState } from "react";

type QuizProps = {
  question: string;
  options: string[];
  answer: number;
};

export default function Quiz({
  question,
  options,
  answer,
}: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const submitted = selected !== null;
  const correct = selected === answer;

  function selectAnswer(index: number) {
    setSelected(index);
  }

  function resetQuiz() {
    setSelected(null);
  }

  return (
    <div className="my-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {question}
      </h3>

      <div className="mt-4 space-y-2">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = index === answer;

          let optionClasses =
            "border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900";

          if (submitted && isCorrect) {
            optionClasses =
              "border-green-500 bg-green-50 text-green-900 dark:border-green-500 dark:bg-green-950/40 dark:text-green-200";
          } else if (submitted && isSelected && !correct) {
            optionClasses =
              "border-red-500 bg-red-50 text-red-900 dark:border-red-500 dark:bg-red-950/40 dark:text-red-200";
          } else if (isSelected) {
            optionClasses =
              "border-zinc-900 bg-zinc-100 text-zinc-900 dark:border-zinc-100 dark:bg-zinc-800 dark:text-zinc-100";
          }

          return (
            <button
              key={option}
              type="button"
              onClick={() => selectAnswer(index)}
              disabled={submitted}
              className={`block w-full rounded-md border px-4 py-3 text-left transition-colors disabled:cursor-default ${optionClasses}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className="mt-4">
          <p
            className={`font-medium ${
              correct
                ? "text-green-700 dark:text-green-400"
                : "text-red-700 dark:text-red-400"
            }`}
          >
            {correct
              ? "Correct!"
              : "Not quite. The correct answer is highlighted above."}
          </p>

          <button
            type="button"
            onClick={resetQuiz}
            className="mt-3 rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}