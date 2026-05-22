"use client";

import Link from "next/link";
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
            <Link
              key={item.id}
              href={`/thi-thu/${item.id}`}
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}