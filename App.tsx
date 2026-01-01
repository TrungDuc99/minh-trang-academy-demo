import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { CAREER_PATHS, SUCCESS_STORIES } from './constants';
import { CareerPath } from './types';
import CareerMirror from './components/CareerMirror';
import MentorChat from './components/MentorChat';
import PathsPage from './components/PathsPage';
import AboutPage from './components/AboutPage';
import StoriesPage from './components/StoriesPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activePathId, setActivePathId] = useState<CareerPath>(CareerPath.PROFESSIONAL_START);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activePathId]);

  const navigateToPath = (pathId: CareerPath) => {
    setActivePathId(pathId);
    setCurrentPage('paths');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'career-mirror':
        return <CareerMirror />;
      case 'paths':
        return <PathsPage activePathId={activePathId} onPathChange={setActivePathId} />;
      case 'about':
        return <AboutPage />;
      case 'stories':
        return <StoriesPage />;
      case 'contact':
        return <ContactPage />;
      case 'partners':
        return <div className="py-24 text-center px-4"><h1 className="text-3xl font-black uppercase">Đối tác & Cơ hội</h1><p className="mt-4 text-gray-500 text-base">Đang cập nhật nội dung chi tiết...</p></div>;
      default:
        return (
          <div className="flex flex-col">
            {/* 🟦 SECTION 1 — HERO */}
            <section className="relative min-h-[650px] flex items-center py-20 overflow-hidden bg-white">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1512496015851-151249601585?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background Space" />
              </div>
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
                <div className="max-w-4xl">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-[#111318] mb-8 uppercase">
                    Bạn đang ở đâu trên con đường <br />
                    <span className="text-primary italic">sự nghiệp làm đẹp?</span>
                  </h1>
                  <div className="space-y-4 mb-12">
                    <p className="text-gray-700 text-lg sm:text-xl font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      Minh Trang Academy không dạy một khoá học.
                    </p>
                    <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      Chúng tôi giúp bạn chọn đúng con đường để đi lâu dài.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <button 
                      onClick={() => setCurrentPage('paths')} 
                      className="flex items-center justify-center h-16 px-10 rounded-xl bg-primary text-white text-sm font-black hover:bg-blue-700 transition shadow-xl shadow-blue-900/20 uppercase tracking-widest"
                    >
                      🔵 Khám phá 5 con đường
                    </button>
                    <button 
                      onClick={() => setCurrentPage('career-mirror')} 
                      className="flex items-center justify-center h-16 px-10 rounded-xl bg-white border-2 border-gray-100 text-[#111318] text-sm font-black hover:border-primary/20 hover:bg-gray-50 transition uppercase tracking-widest"
                    >
                      ⚪ Tôi phù hợp con đường nào?
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 🟦 SECTION 2 — 5 CON ĐƯỜNG SỰ NGHIỆP - GRID THÍCH ỨNG MOBILE */}
            <section className="py-20 bg-background-light overflow-hidden">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center lg:text-left">
                  <h2 className="text-[#111318] text-2xl font-black uppercase tracking-widest mb-4">5 con đường sự nghiệp</h2>
                  <div className="h-1.5 w-16 bg-primary mx-auto lg:mx-0"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {CAREER_PATHS.map((path) => (
                    <div 
                      key={path.id} 
                      onClick={() => navigateToPath(path.id)}
                      className="group cursor-pointer flex flex-col justify-between rounded-[32px] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(19,91,236,0.15)] border border-transparent hover:border-primary/10"
                    >
                      <div>
                        <div className={`mb-8 flex size-14 items-center justify-center rounded-xl ${path.color} transition-transform group-hover:scale-110 duration-500`}>
                          <span className="material-symbols-outlined !text-[32px]">{path.icon}</span>
                        </div>
                        <h3 className="text-base font-black text-[#111318] mb-4 uppercase leading-tight tracking-tight">{path.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-bold mb-8 italic">
                          "{path.description}"
                        </p>
                      </div>
                      <button className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all duration-300 mt-auto">
                        Xem con đường này <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 🟦 SECTION 3 — VÌ SAO MINH TRANG ACADEMY KHÁC? - FIX ICON BỊ DÀI */}
            <section className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#111318] uppercase tracking-tighter mb-10 leading-none">
                      Vì sao chúng tôi <br /><span className="text-primary italic">khác biệt?</span>
                    </h2>
                    <div className="space-y-8">
                       {[
                         { icon: 'conversion_path', title: 'Đào tạo theo con đường', desc: 'Không theo khoá học rời rạc, chúng tôi đào tạo theo lộ trình sự nghiệp 102™.' },
                         { icon: 'restart_alt', title: 'Đào tạo lại từ gốc', desc: 'Dù bạn đã học nơi khác hay chưa biết gì, chúng tôi luôn bắt đầu từ nền tảng vững chắc nhất.' },
                         { icon: 'language_vietnamese', title: 'Nghề tử tế – Văn hoá Việt', desc: 'Sự kết hợp giữa đạo đức nghề Việt Nam và tiêu chuẩn an toàn quốc tế.' },
                         { icon: 'ads_click', title: 'Lộ trình đi tiếp sau học', desc: 'Hỗ trợ việc làm, mở tiệm hoặc đồng hành đầu tư lâu dài trong hệ sinh thái.' }
                       ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-6 group">
                          <div className="size-14 rounded-xl bg-gray-50 flex items-center justify-center text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                            <span className="material-symbols-outlined !text-[28px]">{item.icon}</span>
                          </div>
                          <div className="pt-1">
                            <h4 className="text-sm font-black uppercase tracking-widest text-[#111318] mb-1">{item.title}</h4>
                            <p className="text-xs font-bold text-gray-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                       ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-[60px] aspect-square flex items-center justify-center border border-gray-100 overflow-hidden group">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Difference" />
                  </div>
                </div>
              </div>
            </section>

            {/* 🟦 SECTION 4 — CÂU CHUYỆN TIÊU BIỂU */}
            <section className="py-20 bg-background-light">
               <div className="max-w-[1280px] mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-black uppercase tracking-widest">Câu chuyện tiêu biểu</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SUCCESS_STORIES.slice(0, 3).map((story) => (
                      <div 
                        key={story.id} 
                        onClick={() => navigateToPath(story.tagText === 'PATH-01' ? CareerPath.PROFESSIONAL_START : story.tagText === 'PATH-02' ? CareerPath.ADVANCED_SKILLS : CareerPath.SPA_STARTUP)}
                        className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-gray-50"
                      >
                         <div className="flex items-center gap-4 mb-6">
                           <div className="size-16 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                             <img src={story.imageUrl} className="w-full h-full object-cover" alt={story.name} />
                           </div>
                           <div>
                             <h4 className="font-black text-sm text-[#111318] uppercase">{story.name}</h4>
                             <p className="text-[10px] text-gray-400 font-bold leading-tight">{story.location}</p>
                           </div>
                         </div>
                         <p className="text-gray-500 text-xs font-bold leading-relaxed mb-6">
                           {story.quote.substring(0, 100)}...
                         </p>
                         <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full ${story.tagColor}`}>
                           {story.tagText}
                         </span>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* 🟦 SECTION 5 — BẠN CHƯA CHẮC MÌNH PHÙ HỢP? */}
            <section className="py-24 bg-[#111318] text-white">
              <div className="max-w-[1100px] mx-auto px-4 text-center">
                 <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-8">Bạn chưa chắc mình phù hợp?</h2>
                 <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight mb-10">
                    Không sao nếu bạn chưa biết mình nên đi con đường nào. <br />
                    Phần lớn học viên của chúng tôi cũng bắt đầu từ sự mơ hồ.
                 </h3>
                 <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                    <button 
                      onClick={() => setCurrentPage('career-mirror')}
                      className="h-16 px-10 bg-primary text-white font-black rounded-xl hover:bg-blue-700 transition uppercase tracking-widest text-xs shadow-xl shadow-blue-900/40"
                    >
                      🔵 Làm Career Mirror™
                    </button>
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="h-16 px-10 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition uppercase tracking-widest text-xs"
                    >
                      ⚪ Trải nghiệm trước – chưa cần đăng ký
                    </button>
                 </div>
                 <p className="text-xs text-gray-500 font-bold italic mt-12">Đây là điểm nhân văn & khác biệt 102™ tại Minh Trang Academy.</p>
              </div>
            </section>

            {/* 🟦 SECTION 6 — ĐỐI TÁC & CƠ HỘI */}
            <section className="py-20 bg-white overflow-hidden">
               <div className="max-w-[1280px] mx-auto px-4">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-6">Đối tác & Cơ hội</h2>
                    <p className="text-sm font-bold text-gray-600 leading-relaxed uppercase tracking-wider">
                       Học viên sau khi hoàn thành được giới thiệu việc làm, hoặc tư vấn lộ trình đi tiếp phù hợp trong hệ sinh thái 200+ đối tác Spa toàn quốc.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-12 opacity-30">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="flex items-center gap-2">
                         <span className="material-symbols-outlined !text-[40px]">corporate_fare</span>
                         <span className="font-black uppercase tracking-widest text-xs">Partner {i}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* 🟦 SECTION 7 — CTA CUỐI */}
            <section className="py-24 bg-background-light border-y border-gray-100">
              <div className="max-w-[1280px] mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-4xl font-black text-[#111318] mb-12 uppercase leading-tight tracking-tight">
                  Bước tiếp theo không phải là “đăng ký học”. <br />
                  Mà là <span className="text-primary italic">hiểu rõ con đường của mình.</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => setCurrentPage('paths')} className="h-16 px-10 bg-primary text-white font-black rounded-xl hover:bg-blue-700 transition uppercase tracking-widest text-xs">Khám phá 5 con đường</button>
                  <button onClick={() => setCurrentPage('contact')} className="h-16 px-10 bg-white border-2 border-gray-100 text-[#111318] font-black rounded-xl hover:bg-gray-50 transition uppercase tracking-widest text-xs">Trò chuyện với mentor</button>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
      {renderContent()}
      <MentorChat />
    </Layout>
  );
};

export default App;