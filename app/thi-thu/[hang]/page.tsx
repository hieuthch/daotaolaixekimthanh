// app/thi-thu/[hang]/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const mockQuestions = [
  {
    id: 1,
    question:
      "Người điều khiển xe mô tô hai bánh phải đội gì khi tham gia giao thông?",
    answers: [
      "Mũ bảo hiểm đạt chuẩn",
      "Mũ vải",
      "Không cần đội",
      "Mũ thời trang",
    ],
    correct: 0,
  },
  {
    id: 2,
    question:
      "Khi gặp đèn đỏ người lái xe phải làm gì?",
    answers: [
      "Đi tiếp",
      "Tăng tốc",
      "Dừng lại",
      "Bấm còi",
    ],
    correct: 2,
  },
  {
    id: 3,
    question:
      "Tốc độ tối đa trong khu đông dân cư đối với xe máy là bao nhiêu?",
    answers: [
      "40 km/h",
      "50 km/h",
      "60 km/h",
      "70 km/h",
    ],
    correct: 0,
  },
];

const examConfig: any = {
  A: {
    title: "Thi bằng A",
    total: 25,
    time: 19 * 60,
  },
  A1: {
    title: "Thi bằng A1",
    total: 25,
    time: 19 * 60,
  },
  B: {
    title: "Thi bằng B",
    total: 30,
    time: 20 * 60,
  },
  C1: {
    title: "Thi bằng C1",
    total: 35,
    time: 22 * 60,
  },
};

export default function ExamPage({
  params,
}: {
  params: { hang: string };
}) {
  const config = examConfig[params.hang];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [timeLeft, setTimeLeft] = useState(config.time);
  const [submitted, setSubmitted] = useState(false);

  const questions = useMemo(() => {
    return Array.from({ length: config.total }, (_, index) => ({
      ...mockQuestions[index % mockQuestions.length],
      id: index + 1,
    }));
  }, [config.total]);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev: number) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const question = questions[current];

  const handleSelect = (index: number) => {
    setAnswers({
      ...answers,
      [question.id]: index,
    });
  };

  const score = questions.reduce((acc, q) => {
    return answers[q.id] === q.correct ? acc + 1 : acc;
  }, 0);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-slate-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black">
              {config.title}
            </h1>

            <p className="text-slate-500">
              Bộ đề thi GPLX online
            </p>
          </div>

          <div className="bg-red-100 text-red-600 px-6 py-3 rounded-2xl flex items-center gap-3 font-bold text-lg">
            <Clock3 className="w-5 h-5" />
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
        {/* CÂU HỎI */}
        <div>
          <div className="bg-white rounded-[32px] p-8 shadow-sm">
            <div className="text-blue-600 font-bold mb-4">
              Câu {current + 1}/{questions.length}
            </div>

            <h2 className="text-3xl font-black leading-relaxed">
              {question.question}
            </h2>

            <div className="mt-10 space-y-4">
              {question.answers.map((answer: string, index: number) => {
                const selected =
                  answers[question.id] === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                      selected
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-blue-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          selected
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>

                      <span className="text-lg font-medium">
                        {answer}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTION */}
            <div className="mt-10 flex justify-between">
              <button
                disabled={current === 0}
                onClick={() =>
                  setCurrent((prev) => prev - 1)
                }
                className="px-6 py-4 rounded-2xl bg-slate-200 hover:bg-slate-300 disabled:opacity-50 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Câu trước
              </button>

              {current < questions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrent((prev) => prev + 1)
                  }
                  className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2"
                >
                  Câu tiếp
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold"
                >
                  Nộp bài
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] p-6 shadow-sm">
            <h3 className="text-2xl font-black mb-6">
              Danh sách câu hỏi
            </h3>

            <div className="grid grid-cols-5 gap-3">
              {questions.map((q, index) => {
                const answered =
                  answers[q.id] !== undefined;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrent(index)}
                    className={`h-12 rounded-xl font-bold transition-all ${
                      current === index
                        ? "bg-blue-600 text-white"
                        : answered
                        ? "bg-green-100 text-green-600"
                        : "bg-slate-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESULT */}
          {submitted && (
            <div className="bg-white rounded-[32px] p-8 shadow-sm">
              <div className="text-center">
                {score >= questions.length * 0.8 ? (
                  <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="w-24 h-24 text-red-500 mx-auto" />
                )}

                <h3 className="mt-6 text-4xl font-black">
                  {score >= questions.length * 0.8
                    ? "ĐẠT"
                    : "KHÔNG ĐẠT"}
                </h3>

                <div className="mt-4 text-slate-500">
                  Bạn trả lời đúng
                </div>

                <div className="mt-2 text-6xl font-black text-blue-600">
                  {score}/{questions.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}