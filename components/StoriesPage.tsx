
import React from 'react';
import { SUCCESS_STORIES } from '../constants';

const StoriesPage: React.FC = () => {
  const testimonials = [
    {
      name: "Lưu Mai Uyên",
      course: "Học viên khóa mi chuyên nghiệp",
      image: "https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=400",
      content: "Mình đang tham gia lớp mi của cô Nhuận. Học nghề không quá khó như mình nghĩ vì mình được học từ cơ bản đến nâng cao. Cô chỉ dạy mình tận tình, rất thường xuyên cổ vũ để mình cố gắng."
    },
    {
      name: "Nguyễn Thanh Nhàn",
      course: "Học viên khóa massage",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      content: "Cô Cúc cực kỳ có tâm luôn ạ, giảng dạy kỹ càng từng chi tiết từ lý thuyết đến thực hành nên em có thể tự tin để ra mở cơ sở kinh doanh riêng.",
      featured: true
    },
    {
      name: "Lê Hồng Anh",
      course: "Học viên khóa phun xăm",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      content: "Các cô tại Minh Trang Academy vô cùng nhiệt tình và tâm huyết. Nhờ các cô truyền lửa và tận tâm giảng dạy mà em cảm thấy tự tin hơn khi ra nghề."
    },
    {
      name: "Trần Như Ngân",
      course: "Học viên khóa KTV Spa",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400",
      content: "Tại Minh Trang Academy trang bị đầy đủ cơ sở vật chất nên trong quá trình học tập em cũng không gặp nhiều khó khăn. Ngoài ra được thường xuyên thực hành nên em cũng nắm bài nhanh hơn."
    }
  ];

  return (
    <div className="bg-white">
      {/* 🟦 SECTION 1 — HERO */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Cộng đồng học viên</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">Hơn 5000+ phụ nữ đã thay đổi cuộc đời và tìm thấy đam mê thực sự tại Minh Trang Academy.</p>
        </div>
      </section>

      {/* 🟦 SECTION 2 — ĐÁNH GIÁ TỪ HỌC VIÊN (NEW) */}
      <section className="py-24 bg-background-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-black text-[#1c4e5e] uppercase tracking-tight inline-block border-b-4 border-[#1c4e5e] pb-1">Đánh giá từ học viên</h2>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 overflow-x-auto pb-12 snap-x">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className={`min-w-[320px] max-w-[350px] flex-shrink-0 bg-white rounded-2xl border transition-all duration-500 snap-center flex flex-col items-center p-8 ${
                  item.featured 
                    ? 'border-[#1c4e5e] shadow-2xl scale-105 z-10' 
                    : 'border-gray-200 shadow-sm opacity-90 grayscale-[0.3] hover:grayscale-0 hover:opacity-100'
                }`}
              >
                {/* Ảnh học viên tốt nghiệp */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border-4 border-gray-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Tên & Khóa học */}
                <h3 className={`text-lg font-black mb-3 ${item.featured ? 'text-[#1c4e5e]' : 'text-gray-700'}`}>
                  {item.name}
                </h3>
                
                <div className={`w-full py-2 px-4 rounded-lg border text-center mb-6 text-[10px] font-black uppercase tracking-widest ${
                  item.featured 
                    ? 'bg-[#1c4e5e]/5 border-[#1c4e5e] text-[#1c4e5e]' 
                    : 'bg-gray-50 border-gray-200 text-gray-400'
                }`}>
                  {item.course}
                </div>

                {/* Nội dung đánh giá */}
                <div className="relative flex-grow">
                  <div className={`absolute left-0 top-0 w-0.5 h-full ${item.featured ? 'bg-[#1c4e5e]/20' : 'bg-gray-100'}`}></div>
                  <p className="pl-6 text-sm font-bold text-gray-500 leading-relaxed italic">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-4">
            {testimonials.map((_, dot) => (
              <div key={dot} className={`size-2 rounded-full ${testimonials[dot].featured ? 'bg-[#1c4e5e] w-6' : 'bg-gray-200'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 SECTION 3 — CÂU CHUYỆN CHI TIẾT */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-black text-[#111318] uppercase tracking-tight inline-block border-b-4 border-primary pb-1">Hành trình thay đổi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl p-8 flex flex-col gap-6 border border-gray-100 shadow-sm hover:shadow-xl transition group">
                <div className="flex gap-6 items-center">
                  <div className="size-20 rounded-2xl overflow-hidden shrink-0 shadow-lg ring-4 ring-gray-50">
                    <img src={story.imageUrl} className="w-full h-full object-cover" alt={story.name} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111318]">{story.name}</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest bg-primary/5 inline-block px-3 py-1 rounded-full mt-1">{story.tagText}</p>
                    <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase tracking-tighter">{story.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic relative font-medium">
                  <span className="text-5xl text-primary/10 absolute -top-4 -left-3 font-serif">"</span>
                  {story.quote}
                  <span className="text-5xl text-primary/10 absolute -bottom-10 right-0 font-serif">"</span>
                </p>
                <div className="mt-4 pt-6 border-t border-gray-100">
                  <button className="text-primary text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Xem hành trình chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-16 bg-[#111318] rounded-[48px] text-center border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Community" />
             </div>
             <span className="material-symbols-outlined !text-[56px] text-primary mb-6 animate-pulse">diversity_3</span>
             <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Gia nhập cộng đồng 5000+ học viên</h3>
             <p className="text-gray-400 max-w-xl mx-auto font-medium mb-10 leading-relaxed">Nơi chia sẻ kiến thức chuyên môn, kinh nghiệm thực chiến và cập nhật các cơ hội việc làm tốt nhất trong ngành làm đẹp Việt Nam.</p>
             <button className="px-12 h-16 bg-primary text-white text-xs font-black rounded-2xl hover:bg-blue-700 transition shadow-2xl shadow-blue-900/40 uppercase tracking-[0.2em]">
               Tham gia Group Facebook
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
