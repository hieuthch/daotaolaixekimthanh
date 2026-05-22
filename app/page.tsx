// app/page.tsx
import { Phone, Car, BookOpen, Users, Award, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6 backdrop-blur">
                <Award className="w-4 h-4" />
                Trung tâm đào tạo lái xe uy tín
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Đào tạo & thi thử
                <span className="block text-yellow-300">
                  GPLX Online
                </span>
              </h1>

              <p className="mt-6 text-lg text-blue-100 max-w-xl leading-relaxed">
                Học lái xe các hạng A, A1, B, C1 với hệ thống thi thử 600 câu hỏi mới nhất,
                đăng ký online nhanh chóng và lịch học linh hoạt.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl">
                  Đăng ký ngay
                </button>

                <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-2xl backdrop-blur">
                  Thi thử miễn phí
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-black">10K+</div>
                  <div className="text-blue-100">Học viên</div>
                </div>

                <div>
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-blue-100">Đậu sát hạch</div>
                </div>

                <div>
                  <div className="text-4xl font-black">24/7</div>
                  <div className="text-blue-100">Hỗ trợ online</div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
              <h2 className="text-3xl font-bold mb-2">
                Đăng ký tư vấn
              </h2>

              <p className="text-slate-500 mb-6">
                Để lại thông tin để nhận lịch khai giảng mới nhất
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Chọn hạng bằng</option>
                  <option>A</option>
                  <option>A1</option>
                  <option>B</option>
                  <option>C1</option>
                </select>

                <button className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-bold text-lg transition-all">
                  Đăng ký ngay
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-2xl flex items-center gap-4">
                <Phone className="w-10 h-10 text-blue-600" />
                <div>
                  <div className="font-bold text-lg">Hotline</div>
                  <div className="text-blue-600 font-semibold">
                    0988 888 888
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Các khóa học nổi bật
          </div>

          <h2 className="text-5xl font-black mt-6">
            Chương trình đào tạo
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Hệ thống đào tạo chuyên nghiệp, xe đời mới và giáo viên giàu kinh nghiệm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              title: "Bằng A",
              desc: "Đào tạo xe mô tô",
              price: "1.200.000đ",
            },
            {
              title: "Bằng A1",
              desc: "Thi sát hạch nhanh",
              price: "950.000đ",
            },
            {
              title: "Bằng B",
              desc: "Học xe số tự động",
              price: "12.500.000đ",
            },
            {
              title: "Bằng C1",
              desc: "Lái xe tải chuyên nghiệp",
              price: "16.500.000đ",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Car className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold">{course.title}</h3>

              <p className="mt-3 text-slate-500">{course.desc}</p>

              <div className="mt-6 text-3xl font-black text-red-600">
                {course.price}
              </div>

              <button className="mt-6 w-full bg-slate-900 hover:bg-black text-white py-3 rounded-2xl transition-all">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "600 Câu hỏi GPLX",
                desc: "Thi thử online theo bộ đề mới nhất.",
              },
              {
                icon: Users,
                title: "Giảng viên chuyên nghiệp",
                desc: "Đội ngũ hướng dẫn tận tâm, giàu kinh nghiệm.",
              },
              {
                icon: Clock,
                title: "Lịch học linh hoạt",
                desc: "Học sáng, chiều, tối hoặc cuối tuần.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-blue-700 rounded-[40px] p-12 text-white text-center shadow-2xl">
            <h2 className="text-5xl font-black">
              Sẵn sàng học lái xe?
            </h2>

            <p className="mt-6 text-xl text-blue-100">
              Đăng ký ngay hôm nay để nhận ưu đãi học phí và lịch khai giảng mới nhất.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold">
                Đăng ký học
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-2xl">
                Thi thử GPLX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-black text-white">
              Đào Tạo Lái Xe
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Trung tâm đào tạo lái xe uy tín với hệ thống học và thi thử hiện đại.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">
              Khóa học
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Bằng A</li>
              <li>Bằng A1</li>
              <li>Bằng B</li>
              <li>Bằng C1</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">
              Liên hệ
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Hải Dương</li>
              <li>0988 888 888</li>
              <li>contact@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">
              Hỗ trợ
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Thi thử GPLX</li>
              <li>Tư vấn học phí</li>
              <li>Hướng dẫn đăng ký</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}