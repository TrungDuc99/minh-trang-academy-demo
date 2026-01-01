
import React, { useState } from 'react';

const AboutPage: React.FC = () => {
  const [activeInstructor, setActiveInstructor] = useState(0);

  const instructors = [
    {
      name: "LÊ THỊ NGỌC ANH",
      role: "GIẢNG VIÊN",
      category: "CHĂM SÓC DA",
      degrees: [
        "Hơn 22 năm kinh nghiệm trong ngành Spa",
        "Hơn 16 năm kinh nghiệm đào tạo ngành Spa",
        "Chứng chỉ sư phạm dạy nghề",
        "Vô số chứng nhận về Chăm sóc dinh dưỡng và sức khỏe"
      ],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const mediaMentions = [
    {
      outlet: "Báo Dân Trí",
      title: "Minh Trang Academy tiên phong đào tạo nghề làm đẹp tử tế",
      description: "Học viện không chỉ chú trọng kỹ thuật mà còn đặt đạo đức nghề nghiệp lên hàng đầu, giúp học viên vững bước trên con đường sự nghiệp.",
      link: "#",
      logo: "newspaper"
    },
    {
      outlet: "VnExpress",
      title: "Lộ trình 5 con đường sự nghiệp thay đổi tư duy học nghề làm đẹp",
      description: "Thay vì các khóa học rời rạc, Minh Trang Academy mang đến lộ trình dài hạn, giúp học viên xác định rõ tương lai ngay từ ngày đầu.",
      link: "#",
      logo: "article"
    },
    {
      outlet: "Báo Thanh Niên",
      title: "Nâng tầm nguồn nhân lực ngành Spa Việt Nam đạt chuẩn quốc tế",
      description: "Sự kết hợp giữa chuyên môn Y khoa và quy trình vận hành chuyên nghiệp đã tạo nên thương hiệu Minh Trang Academy uy tín.",
      link: "#",
      logo: "description"
    },
    {
      outlet: "Kênh 14",
      title: "Học nghề làm đẹp: Không chỉ là tay nghề, đó còn là sứ mệnh",
      description: "Câu chuyện về cô Minh Trang và khát vọng mang đến cơ hội nghề nghiệp bền vững cho phụ nữ Việt.",
      link: "#",
      logo: "feed"
    }
  ];

  return (
    <div className="bg-white">
      {/* 🟦 SECTION 1 — HERO: ĐỊNH VỊ THƯƠNG HIỆU */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Minh Trang Academy Training Environment"
        />
        <div className="absolute inset-0 bg-[#111318]/75 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Minh Trang Academy</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase leading-[1.1] tracking-tighter">
            Học viện Đào tạo <br />
            <span className="text-primary italic">Thẩm mỹ Quốc tế</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Hơn 10 năm tiên phong trong việc kiến tạo nguồn nhân lực chất lượng cao, có "Tâm - Tầm - Tài" cho ngành làm đẹp Việt Nam.
          </p>
        </div>
      </section>

      {/* 🟦 SECTION 2 — TẦM NHÌN & SỨ MỆNH */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-4">Tầm nhìn & Sứ mệnh</h2>
                <h3 className="text-3xl md:text-4xl font-black text-[#111318] uppercase tracking-tight leading-tight">
                  Khát vọng nâng tầm <br /> Nghề làm đẹp Việt
                </h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined !text-3xl">visibility</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-[#111318] mb-2 uppercase">Tầm nhìn</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">Trở thành học viện thẩm mỹ hàng đầu Đông Nam Á, nơi thiết lập những tiêu chuẩn mới về đào tạo nghề chuẩn Y khoa và quản trị vận hành Spa chuyên nghiệp.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined !text-3xl">flag</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-[#111318] mb-2 uppercase">Sứ mệnh</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">Minh Trang Academy ra đời để xóa bỏ định kiến "học nghề chui", mang đến cơ hội nghề nghiệp bền vững cho hàng vạn phụ nữ Việt thông qua giáo dục tử tế.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600" className="rounded-[40px] shadow-xl w-full h-[300px] object-cover" alt="Student training" />
                <div className="bg-primary p-8 rounded-[40px] text-white">
                  <p className="text-4xl font-black mb-1">98%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Học viên có việc làm ngay</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 p-8 rounded-[40px] text-white">
                  <p className="text-4xl font-black mb-1">10+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Năm kinh nghiệm</p>
                </div>
                <img src="https://images.unsplash.com/photo-1512496015851-151249601585?auto=format&fit=crop&q=80&w=600" className="rounded-[40px] shadow-xl w-full h-[300px] object-cover" alt="Practical session" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 3 — VÌ SAO NÊN CHỌN HỌC NGHỀ TẠI MINH TRANG ACADEMY? */}
      <section className="py-24 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#111318] uppercase tracking-tight">Vì sao nên chọn học nghề tại <br/><span className="text-primary italic">Minh Trang Academy?</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Đội ngũ giảng viên chuyên môn", d: "Chuyên nghiệp, có chứng chỉ sư phạm trong lĩnh vực đào tạo nghề.", icon: "school" },
              { t: "Hỗ trợ việc làm", d: "Giới thiệu việc làm tại hệ thống 200+ đối tác ngay sau khi tốt nghiệp.", icon: "work_history" },
              { t: "Không dùng Kỹ thuật viên giảng dạy", d: "Cam kết 100% giảng viên chính đứng lớp, không sử dụng Kỹ thuật viên kèm cặp.", icon: "rule" },
              { t: "Chứng chỉ chính quy", d: "Cấp chứng chỉ sơ cấp của Sở Lao Động Thương Binh Xã Hội có giá trị toàn quốc.", icon: "article" },
              { t: "Chất lượng & Thực hành", d: "Cam kết về chất lượng khóa học & Thực hành trên mẫu thật liên tục hàng ngày.", icon: "patient_list" },
              { t: "Bảo hành học tập", d: "Đảm bảo học lại miễn phí nếu tay nghề còn yếu, đào tạo đến khi vững vàng.", icon: "verified" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                <div className="size-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-black text-sm uppercase mb-3 text-[#111318] tracking-tight">{item.t}</h4>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 4 — ĐỘI NGŨ GIẢNG VIÊN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#1c4e5e] uppercase tracking-tight inline-block border-b-4 border-[#1c4e5e] pb-1">Đội ngũ giảng viên</h2>
          </div>

          <div className="mb-10">
            <button className="px-6 py-2 rounded-full border-2 border-[#1c4e5e] text-[#1c4e5e] text-[10px] font-black uppercase tracking-widest hover:bg-[#1c4e5e] hover:text-white transition-all">
              Chăm sóc da
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Thẻ Giảng viên chi tiết */}
            <div className="lg:col-span-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Giảng viên</span>
                <h3 className="text-3xl font-black text-[#111318] mb-6">{instructors[activeInstructor].name}</h3>
                <h4 className="text-orange-500 font-black text-sm uppercase tracking-wider mb-6">Bằng cấp & chứng chỉ</h4>
                <ul className="space-y-4 mb-10 flex-grow">
                  {instructors[activeInstructor].degrees.map((degree, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-sm font-bold text-gray-700">
                      <span className="text-[#1c4e5e] mt-1">•</span>
                      {degree}
                    </li>
                  ))}
                </ul>
                <button className="self-start px-8 py-3 rounded-lg border-2 border-[#1c4e5e] text-[#1c4e5e] text-[10px] font-black uppercase tracking-widest hover:bg-[#1c4e5e] hover:text-white transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> Xem chi tiết
                </button>
              </div>
              <div className="md:w-[45%] bg-[#eef6f8] relative overflow-hidden flex items-end justify-center pt-10 px-4">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                   <span className="material-symbols-outlined !text-[300px] text-[#1c4e5e]">hexagon</span>
                </div>
                <img 
                  src={instructors[activeInstructor].image} 
                  className="relative z-10 w-full h-[400px] object-cover rounded-t-full shadow-2xl border-x-4 border-t-4 border-white" 
                  alt={instructors[activeInstructor].name} 
                />
              </div>
            </div>

            {/* Banner đội ngũ */}
            <div className="lg:col-span-4 bg-primary rounded-[40px] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-90" 
                alt="Đội ngũ giảng viên" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#1c4e5e]/90 to-transparent">
                 <h3 className="text-white text-3xl font-black leading-tight mb-2">ĐỘI NGŨ <br/> <span className="italic font-normal">Giảng viên</span></h3>
                 <p className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Kinh nghiệm - Tâm huyết - Nhiều thành tích</p>
                 <div className="pt-4 border-t border-white/20">
                    <p className="text-white text-sm font-black uppercase tracking-widest">Đội ngũ giảng viên</p>
                    <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest opacity-70">Trên 10 năm kinh nghiệm</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {[0, 1, 2, 3].map((dot) => (
              <button 
                key={dot} 
                className={`size-2.5 rounded-full transition-all ${dot === activeInstructor ? 'bg-[#1c4e5e] w-8' : 'bg-gray-200'}`}
                onClick={() => setActiveInstructor(0)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 NEW SECTION — TRUYỀN THÔNG NÓI GÌ VỀ CHÚNG TÔI */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">Truyền thông & Báo chí</h2>
            <h3 className="text-3xl font-black text-[#111318] uppercase tracking-tight">Truyền thông nói gì về chúng tôi</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaMentions.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <span className="material-symbols-outlined !text-[120px]">{item.logo}</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined !text-xl">{item.logo}</span>
                    </div>
                    <span className="text-sm font-black text-primary uppercase tracking-widest">{item.outlet}</span>
                  </div>
                  <h4 className="text-xl font-black text-[#111318] mb-4 uppercase leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <a href={item.link} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#111318] hover:text-primary transition-colors">
                    Đọc bài viết chi tiết <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
             <span className="font-black text-xl uppercase tracking-widest italic">DÂN TRÍ</span>
             <span className="font-black text-xl uppercase tracking-widest">VnExpress</span>
             <span className="font-black text-xl uppercase tracking-widest italic">Thanh Niên</span>
             <span className="font-black text-xl uppercase tracking-widest">Kênh 14</span>
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 5 — GIÁ TRỊ CỐT LÕI (TRỤ CỘT 102™) */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">Giá trị cốt lõi</h2>
            <h3 className="text-4xl font-black text-[#111318] uppercase tracking-tight">Triết lý đào tạo "Tâm - Tầm - Tài"</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Chữ TÂM làm gốc", 
                desc: "Đào tạo đạo đức nghề nghiệp trước khi dạy kỹ thuật. Chúng tôi tin rằng chỉ những người làm nghề tử tế mới có thể đi xa.", 
                icon: "favorite",
                color: "bg-red-50 text-red-600"
              },
              { 
                title: "Nâng TẦM kiến thức", 
                desc: "Cập nhật liên tục các công nghệ làm đẹp tiên tiến nhất từ Hàn Quốc, Nhật Bản và Châu Âu. Không học lỗi thời.", 
                icon: "trending_up",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Khẳng định TÀI năng", 
                desc: "Rèn luyện tay nghề đạt mức điêu luyện thông qua 80% thời lượng thực hành trên mẫu thật dưới sự giám sát 1-1.", 
                icon: "verified_user",
                color: "bg-emerald-50 text-emerald-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className={`size-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-black text-[#111318] mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 6 — CƠ SỞ VẬT CHẤT */}
      <section className="py-24 bg-[#111318] text-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">Môi trường học tập</h2>
            <h3 className="text-3xl font-black uppercase tracking-tight">Cơ sở vật chất 5 sao</h3>
            <p className="text-gray-400 mt-6 font-medium">Hệ thống phòng học lý thuyết và thực hành riêng biệt, trang bị 100% máy móc công nghệ cao nhập khẩu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1512496015851-151249601585?auto=format&fit=crop&q=80&w=800" className="rounded-[32px] aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Training room" />
            <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800" className="rounded-[32px] aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 lg:translate-y-12" alt="Practical room" />
            <img src="https://images.unsplash.com/photo-1512496015851-151249601585?auto=format&fit=crop&q=80&w=800" className="rounded-[32px] aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Consulting room" />
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 7 — CTA CUỐI */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-[#111318] mb-12 uppercase leading-tight tracking-tight">
            Bạn đã sẵn sàng cùng <br />
            <span className="text-primary italic">Minh Trang Academy</span> kiến tạo tương lai?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="h-16 px-12 bg-primary text-white font-black rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-200 uppercase tracking-widest text-xs">👉 Khám phá lộ trình ngay</button>
             <button className="h-16 px-12 bg-white border-2 border-gray-100 text-[#111318] font-black rounded-2xl hover:bg-gray-50 transition uppercase tracking-widest text-xs">👉 Trò chuyện với Mentor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
