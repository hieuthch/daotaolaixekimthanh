// app/thi-thu/page.tsx

"use client";

import { useState } from "react";
import {
  Car,
  Bike,
  Truck,
  PlayCircle,
  Clock3,
  FileQuestion,
} from "lucide-react";

const examCategories = [
  {
    id: "A",
    title: "Thi bằng A",
    questions: 25,
    time: "19 phút",
    icon: Bike,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "A1",
    title: "Thi bằng A1",
    questions: 25,
    time: "19 phút",
    icon: Bike,
    color: "from-pink-500 to-red-500",
  },
  {
    id: "B",
    title: "Thi bằng B",
    questions: 30,
    time: "20 phút",
    icon: Car,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "C1",
    title: "Thi bằng C1",
    questions: 35,
    time: "22 phút",
    icon: Truck,
    color: "from-green-600 to-emerald-500",
  },
];

export default function ThiThuPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur mb-6">
              <FileQuestion className="w-4 h-4" />
              Hệ thống thi thử GPLX Online
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Ôn Thi Lý Thuyết GPLX
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Thi thử online theo bộ 600 câu hỏi mới nhất của Bộ Công An.
              Chấm điểm tự động và mô phỏng sát đề thi thật.
            </p>
          </div>
        </div>
      </section>

      {/* DANH SÁCH HẠNG */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Chọn hạng bằng lái
          </div>

          <h2 className="text-5xl font-black mt-6">
            Bắt đầu thi thử
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {examCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group text-left"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
                <div
                  className={`h-3 bg-gradient-to-r ${item.color}`}
                />

                <div className="p-8">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-10 h-10" />
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    {item.title}
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-slate-600">
                      <FileQuestion className="w-5 h-5" />
                      <span>{item.questions} câu hỏi</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock3 className="w-5 h-5" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div
                      className={`w-full py-4 rounded-2xl bg-gradient-to-r ${item.color} text-white font-bold flex items-center justify-center gap-2`}
                    >
                      <PlayCircle className="w-5 h-5" />
                      Bắt đầu thi
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* POPUP THÔNG TIN */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[40px] p-10 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-black"
            >
              ✕
            </button>

            <div
              className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${selected.color} text-white flex items-center justify-center`}
            >
              <selected.icon className="w-12 h-12" />
            </div>

            <h2 className="mt-6 text-4xl font-black">
              {selected.title}
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-500">Số câu hỏi</span>
                <span className="font-bold">
                  {selected.questions} câu
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-500">Thời gian</span>
                <span className="font-bold">
                  {selected.time}
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-500">Hình thức</span>
                <span className="font-bold">
                  Random đề
                </span>
              </div>
            </div>

            <button
              className={`mt-10 w-full py-5 rounded-2xl bg-gradient-to-r ${selected.color} text-white text-lg font-black hover:scale-[1.02] transition-all`}
            >
              Vào phòng thi
            </button>
          </div>
        </div>
      )}
    </main>
  );
}