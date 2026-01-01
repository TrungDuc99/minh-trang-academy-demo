import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'paths', label: '5 Con đường sự nghiệp ⭐' },
    { id: 'about', label: 'Minh Trang Academy là ai?' },
    { id: 'stories', label: 'Câu chuyện & Cộng đồng' },
    { id: 'partners', label: 'Đối tác & Cơ hội' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-display selection:bg-primary selection:text-white">
      {/* 🟦 SECTION 0 — HEADER (CỐ ĐỊNH) */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Trái: Logo Minh Trang Academy */}
            <div 
              className="flex items-center gap-4 cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <div className="text-primary size-12 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined !text-[36px]">spa</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-black leading-none tracking-tight text-[#111318] uppercase">
                  Minh Trang
                </h1>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Academy</span>
              </div>
            </div>

            {/* Giữa / phải: Menu chính */}
            <nav className="hidden xl:flex items-center gap-8 xl:gap-10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs font-black transition-all uppercase tracking-widest relative group ${
                    currentPage === item.id ? 'text-primary' : 'text-gray-500 hover:text-[#111318]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
            </nav>

            {/* CTA nhỏ (nút nổi) */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('career-mirror')}
                className="hidden lg:flex h-12 items-center justify-center rounded-full bg-primary px-8 text-xs font-black text-white transition hover:bg-blue-700 shadow-lg shadow-blue-200 uppercase tracking-widest"
              >
                👉 Khám phá lộ trình phù hợp
              </button>
              <button 
                className="xl:hidden text-[#111318]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="material-symbols-outlined !text-[36px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t p-8 space-y-8 animate-in slide-in-from-top duration-300 shadow-xl">
             {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-black p-4 rounded-xl uppercase tracking-widest ${
                    currentPage === item.id ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onNavigate('career-mirror');
                  setMobileMenuOpen(false);
                }}
                className="w-full h-16 bg-primary text-white font-black rounded-xl uppercase tracking-widest text-sm"
              >
                Khám phá con đường phù hợp
              </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#111318] pt-24 pb-12 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 pb-16 border-b border-white/5">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="text-primary size-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined !text-[32px]">spa</span>
                </div>
                <span className="text-2xl font-black uppercase tracking-tight">Minh Trang Academy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs uppercase tracking-wider font-medium">
                Hệ sinh thái đào tạo nghề làm đẹp tử tế. Đồng hành cùng bạn kiến tạo tương lai.
              </p>
              <div className="flex gap-5">
                {['facebook', 'youtube', 'instagram'].map(icon => (
                  <button key={icon} className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-base">public</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10 opacity-50">5 Con đường</h4>
              <ul className="flex flex-col gap-5">
                <li><button onClick={() => onNavigate('paths')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Làm nghề chuyên nghiệp</button></li>
                <li><button onClick={() => onNavigate('paths')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Mở tiệm an toàn</button></li>
                <li><button onClick={() => onNavigate('paths')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Giảng viên nguồn</button></li>
                <li><button onClick={() => onNavigate('paths')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Kinh doanh thực chiến</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10 opacity-50">Cộng đồng</h4>
              <ul className="flex flex-col gap-5">
                <li><button onClick={() => onNavigate('stories')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Câu chuyện tiêu biểu</button></li>
                <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Triết lý đào tạo</button></li>
                <li><button onClick={() => onNavigate('partners')} className="text-gray-400 hover:text-primary text-sm transition uppercase tracking-widest font-bold">Đối tác & Cơ hội</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10 opacity-50">Trụ sở</h4>
              <p className="text-gray-300 text-sm mb-5 font-bold uppercase">Hà Nội</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Số 38 Ngõ 12 Láng Hạ, Quận Ba Đình, Hà Nội<br />
                Hotline: 098.765.4321<br />
                Email: tuyensinh@minhtrangacademy.edu.vn
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 MINH TRANG ACADEMY. GIẤY PHÉP ĐÀO TẠO NGHỀ SỐ 123/GP-SLĐTBXH.</p>
            <div className="flex gap-10">
              <a className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-primary transition" href="#">Chính sách bảo mật</a>
              <a className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-primary transition" href="#">Chính sách học viên</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;