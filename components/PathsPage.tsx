
import React from 'react';
import { CareerPath } from '../types';

interface PathsPageProps {
  activePathId: CareerPath;
  onPathChange: (path: CareerPath) => void;
}

const PathsPage: React.FC<PathsPageProps> = ({ activePathId, onPathChange }) => {
  // Logic hiển thị nội dung dựa trên activePathId
  const isPath1 = activePathId === CareerPath.PROFESSIONAL_START;
  const isPath2 = activePathId === CareerPath.ADVANCED_SKILLS;
  const isPath3 = activePathId === CareerPath.SPA_STARTUP;
  const isPath4 = activePathId === CareerPath.INVESTMENT;
  const isPath5 = activePathId === CareerPath.INTERNATIONAL;

  return (
    <div className="bg-white scroll-smooth">
      {/* 🟦 SECTION 0 — BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="hover:text-primary cursor-pointer">Trang chủ</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="hover:text-primary cursor-pointer">5 Con đường</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary">
            {isPath1 && 'Làm nghề chuyên nghiệp (PATH-01)'}
            {isPath2 && 'Nâng cao tay nghề (PATH-02)'}
            {isPath3 && 'Mở tiệm an toàn & bền vững (PATH-03)'}
            {isPath4 && 'Đầu tư & đồng hành hệ thống (PATH-04)'}
            {isPath5 && 'Nghề làm đẹp quốc tế (PATH-05)'}
          </span>
        </div>
      </div>

      {/* 🌱 1️⃣ HERO — ĐỊNH VỊ CON ĐƯỜNG */}
      <section className={`py-20 lg:py-32 overflow-hidden relative border-b border-gray-50 ${isPath5 ? 'bg-emerald-50/30' : isPath4 ? 'bg-orange-50/30' : isPath3 ? 'bg-indigo-50/30' : isPath2 ? 'bg-slate-50' : 'bg-white'}`}>
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-8 rounded-full ${isPath5 ? 'bg-emerald-100 text-emerald-700' : isPath4 ? 'bg-orange-100 text-orange-700' : isPath3 ? 'bg-purple-100 text-purple-700' : isPath2 ? 'bg-teal-100 text-teal-700' : 'bg-primary/10 text-primary'}`}>
              <span className={`size-2 rounded-full animate-pulse ${isPath5 ? 'bg-emerald-600' : isPath4 ? 'bg-orange-600' : isPath3 ? 'bg-purple-600' : isPath2 ? 'bg-teal-600' : 'bg-primary'}`}></span>
              {isPath1 ? 'Professional Path (PATH-01)' : isPath2 ? 'Advanced Path (PATH-02)' : isPath3 ? 'Business Owner Path (PATH-03)' : isPath4 ? 'Investor Path (PATH-04)' : 'International Path (PATH-05)'}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#111318] mb-8 uppercase leading-[0.95] tracking-tighter">
              {isPath1 ? 'Làm nghề' : isPath2 ? 'Nâng cao' : isPath3 ? 'Mở tiệm' : isPath4 ? 'Đầu tư &' : 'Nghề quốc tế'} <br />
              <span className={`${isPath5 ? 'text-emerald-600' : isPath4 ? 'text-orange-600' : isPath3 ? 'text-purple-600' : isPath2 ? 'text-teal-600' : 'text-primary'} italic`}>
                {isPath1 ? 'Chuyên nghiệp' : isPath2 ? 'Tay nghề & Chuyên sâu' : isPath3 ? 'An toàn & Bền vững' : isPath4 ? 'Đồng hành hệ thống' : 'Làm đúng chuẩn'}
              </span>
            </h1>
            <div className="max-w-xl space-y-6 mb-12">
              <p className="text-xl font-bold text-gray-600 leading-relaxed">
                {isPath1 && 'Làm nghề đúng – Làm nghề tử tế – Làm nghề lâu dài.'}
                {isPath2 && 'Làm giỏi hơn – làm đúng hơn – làm sâu hơn.'}
                {isPath3 && 'Mở tiệm đúng – vận hành chắc – sống được với nghề.'}
                {isPath4 && 'Đầu tư tỉnh táo – đồng hành dài hạn – tăng trưởng có trách nhiệm.'}
                {isPath5 && 'Mang nghề Việt đi ra thế giới – làm đúng chuẩn – sống được bằng nghề.'}
              </p>
              <p className="text-gray-500 font-medium leading-relaxed italic">
                {isPath1 && '“Một người làm nghề giỏi không phải là người học nhiều kỹ thuật nhất, mà là người hiểu nghề, làm đúng, làm an toàn và giữ được đạo đức nghề.”'}
                {isPath2 && '“Người làm nghề lâu dài không phải là người học nhiều nhất, mà là người hiểu sâu nhất những gì mình đang làm.”'}
                {isPath3 && '“Minh Trang Academy không dạy bạn mở tiệm cho hoành tráng, mà dạy bạn mở tiệm để tồn tại – để sống được – để đi lâu dài.”'}
                {isPath4 && '“Minh Trang Academy không tìm nhà đầu tư lướt sóng, chúng tôi tìm người đồng hành – hiểu ngành, hiểu con người và tôn trọng giá trị bền vững.”'}
                {isPath5 && '“Minh Trang Academy không đào tạo đi nhanh cho kịp, chúng tôi đào tạo đi đúng – đủ chuẩn – đủ năng lực để ở lại lâu dài.”'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className={`h-16 px-12 text-white text-xs font-black rounded-2xl transition shadow-2xl uppercase tracking-widest flex items-center justify-center gap-3 group ${isPath5 ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' : isPath4 ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-200' : isPath3 ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-200' : isPath2 ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-200' : 'bg-primary hover:bg-blue-700 shadow-blue-200'}`}>
                {isPath5 ? 'Khám phá con đường quốc tế' : isPath4 ? 'Khám phá con đường đầu tư' : 'Trải nghiệm con đường này'}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="h-16 px-12 bg-white border-2 border-gray-100 text-[#111318] text-xs font-black rounded-2xl hover:bg-gray-50 transition uppercase tracking-widest">
                {isPath5 ? 'Tôi có phù hợp đi quốc tế?' : isPath4 ? 'Tôi có phù hợp đồng hành?' : isPath3 ? 'Tôi có phù hợp mở tiệm?' : 'Tôi có phù hợp không?'}
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl rotate-1 group hover:rotate-0 transition-all duration-700 border-8 border-white">
              <img 
                src={isPath1 
                  ? "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200"
                  : isPath2 ? "https://images.unsplash.com/photo-1512496015851-151249601585?auto=format&fit=crop&q=80&w=1200"
                  : isPath3 ? "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                  : isPath4 ? "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  : "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200"
                } 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                alt="Path visual" 
              />
            </div>
            <div className={`absolute -top-10 -right-10 size-40 rounded-full blur-3xl opacity-20 ${isPath5 ? 'bg-emerald-500' : isPath4 ? 'bg-orange-500' : isPath3 ? 'bg-purple-500' : isPath2 ? 'bg-teal-500' : 'bg-primary'}`}></div>
          </div>
        </div>
      </section>

      {/* 👤 2️⃣ & 🚫 3️⃣ DÀNH CHO AI / KHÔNG PHÙ HỢP? */}
      <section className="py-24 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 lg:p-16 rounded-[48px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <h3 className="text-2xl font-black text-[#111318] mb-12 uppercase tracking-tight flex items-center gap-4">
                <span className={`size-10 rounded-xl flex items-center justify-center ${isPath5 ? 'bg-emerald-50 text-emerald-600' : isPath4 ? 'bg-orange-50 text-orange-600' : isPath3 ? 'bg-purple-50 text-purple-600' : isPath2 ? 'bg-teal-50 text-teal-600' : 'bg-green-50 text-green-600'}`}>
                   <span className="material-symbols-outlined font-bold">check</span>
                </span>
                Phù hợp nếu bạn:
              </h3>
              <ul className="space-y-6">
                {(isPath1 ? [
                  "Chưa từng học nghề làm đẹp, muốn bắt đầu từ con số 0",
                  "Đã học nghề nơi khác nhưng tay nghề chưa vững, làm máy móc",
                  "Muốn đi làm ổn định tại Spa, Chuỗi TMV lớn, Trung tâm sức khoẻ",
                  "Muốn có lộ trình rõ ràng, không học lan man tốn thời gian",
                  "Muốn làm nghề tử tế, bền vững, không chạy theo chiêu trò"
                ] : isPath2 ? [
                  "Đã học nghề và đang đi làm tại Spa, Clinic, Chuỗi làm đẹp",
                  "Lực tay chưa ổn định, quy trình chưa đều, dễ mệt khi làm lâu",
                  "Biết kỹ thuật nhưng chưa hiểu bản chất, chưa tự tin đứng nghề",
                  "Muốn làm nghề chắc tay hơn để lên Senior / Mentor / Quản lý",
                  "Không muốn chạy theo kỹ thuật hot ngắn hạn, muốn làm sâu & đúng"
                ] : isPath3 ? [
                  "Đang là KTV/Quản lý muốn ra làm riêng, làm chủ tiệm của chính mình",
                  "Đã từng mở tiệm nhưng vận hành không ổn, doanh thu bấp bênh",
                  "Quá mệt vì vừa phải trực tiếp làm nghề vừa phải làm chủ",
                  "Có vốn nhỏ - vừa, muốn mở đúng quy mô và không muốn đốt tiền",
                  "Muốn biết rõ mình đang bước vào điều gì trước khi đặt bút ký mặt bằng"
                ] : isPath4 ? [
                  "Có vốn và muốn đầu tư vào ngành làm đẹp bài bản",
                  "Muốn tham gia hệ thống đã có nền tảng vững chắc",
                  "Không muốn tự mở tiệm từ đầu hay trực tiếp quản lý hằng ngày",
                  "Quan tâm đến mô hình kinh doanh rõ ràng, dòng tiền minh bạch",
                  "Muốn đồng hành với đội ngũ có nghề và triết lý kinh doanh tử tế"
                ] : [
                  "Có mong muốn đi làm nghề làm đẹp tại nước ngoài bài bản",
                  "Muốn có thu nhập ổn định & làm việc trong môi trường chuyên nghiệp",
                  "Sẵn sàng học lại tay nghề theo chuẩn quốc tế và ngoại ngữ cơ bản",
                  "Muốn đi con đường chính ngạch, tuân thủ pháp lý & văn hoá bản địa",
                  "Muốn đi xa bằng năng lực thật, không chấp nhận làm nghề chui"
                ]).map((text, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <span className={`material-symbols-outlined font-black mt-0.5 group-hover/item:scale-125 transition-transform ${isPath5 ? 'text-emerald-600' : isPath4 ? 'text-orange-600' : isPath3 ? 'text-purple-600' : isPath2 ? 'text-teal-600' : 'text-primary'}`}>done</span>
                    <p className="text-gray-600 font-bold leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111318] p-12 lg:p-16 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
              <h3 className="text-2xl font-black mb-12 uppercase tracking-tight flex items-center gap-4">
                <span className="size-10 rounded-xl bg-white/10 text-red-400 flex items-center justify-center">
                   <span className="material-symbols-outlined font-bold">close</span>
                </span>
                Không phù hợp nếu:
              </h3>
              <ul className="space-y-6 relative z-10">
                {(isPath1 ? [
                  "Muốn học thật nhanh để mở tiệm ngay",
                  "Muốn học lấy bằng cấp cho có",
                  "Không sẵn sàng rèn luyện tay nghề lặp đi lặp lại",
                  "Không coi trọng chuẩn an toàn và đạo đức nghề"
                ] : isPath2 ? [
                  "Chưa từng học nghề (nên bắt đầu từ PATH-01)",
                  "Chỉ muốn học vài buổi để “bổ sung chứng chỉ”",
                  "Muốn học nhanh để mở tiệm ngay mà chưa vững tay nghề",
                  "Không sẵn sàng sửa lại thói quen tay nghề cũ đã sai"
                ] : isPath3 ? [
                  "Muốn mở tiệm thật nhanh chỉ để bắt trend",
                  "Muốn đầu tư lớn nhưng hoàn toàn không hiểu về nghề",
                  "Muốn làm chủ nhưng không muốn học về quản trị vận hành",
                  "Muốn mở tiệm theo cảm xúc, không cần tính toán con số"
                ] : isPath4 ? [
                  "Muốn lợi nhuận nhanh trong thời gian ngắn (đầu tư lướt sóng)",
                  "Hoàn toàn không quan tâm đến vận hành và yếu tố con người",
                  "Muốn can thiệp quá sâu vào chuyên môn khi chưa hiểu nghề",
                  "Chỉ nhìn đầu tư như việc đặt tiền rồi ngồi chờ chia lợi nhuận"
                ] : [
                  "Muốn đi nước ngoài thật nhanh bằng mọi cách, bất chấp pháp lý",
                  "Không sẵn sàng học lại tay nghề theo chuẩn quốc tế khắt khe",
                  "Không muốn học ngoại ngữ hay tìm hiểu văn hoá nước bạn",
                  "Chỉ muốn làm tạm vài năm rồi về, không có ý định trụ vững lâu dài"
                ]).map((text, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <span className="material-symbols-outlined text-gray-500 mt-0.5 group-hover/item:text-red-400 transition-colors">remove</span>
                    <p className="text-gray-400 font-bold leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ 4️⃣ CAREER REALITY CHECK™ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="bg-orange-50 border-2 border-orange-100 p-12 lg:p-16 rounded-[48px] text-center relative overflow-hidden">
             <h2 className="text-[10px] font-black uppercase text-orange-600 tracking-[0.4em] mb-6">Career Reality Check™</h2>
             <h3 className="text-3xl font-black text-[#111318] mb-10 uppercase tracking-tight">
               {isPath5 ? 'Sự thật về nghề quốc tế' : isPath1 ? 'Sự thật trước khi bắt đầu' : isPath2 ? 'Sự thật về việc nâng cao tay nghề' : 'Sự thật về việc mở tiệm làm đẹp'}
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left max-w-3xl mx-auto">
                {(isPath1 ? [
                  "2–4 tuần đầu có thể rất mệt và nản.",
                  "Tay nghề chỉ tốt khi bạn chấp nhận bị sửa lỗi nhiều lần.",
                  "Có người đi nhanh, có người đi chậm – điều đó bình thường.",
                  "Nghề này cần kiên nhẫn hơn là hào nhoáng."
                ] : isPath2 ? [
                  "Bạn sẽ phải bỏ một số thói quen cũ đã ăn sâu.",
                  "Có kỹ thuật bạn đang làm tưởng đúng nhưng thực ra chưa đúng.",
                  "Quá trình sửa tay nghề đôi khi không dễ chịu.",
                  "Có lúc bạn sẽ thấy mình “làm lại như người mới”."
                ] : isPath3 ? [
                  "Mở tiệm không đồng nghĩa với việc sẽ tự nhiên có khách.",
                  "Làm chủ mệt hơn làm thợ rất nhiều trong giai đoạn đầu.",
                  "Doanh thu không phải là lợi nhuận, bạn phải quản trị con số.",
                  "Nếu không có hệ thống, tiệm sẽ phụ thuộc hoàn toàn vào bạn."
                ] : isPath4 ? [
                  "Ngành làm đẹp phụ thuộc cực kỳ lớn vào yếu tố con người.",
                  "Lợi nhuận bền vững luôn cần thời gian tích luỹ.",
                  "Hệ thống càng chuẩn hoá → lợi nhuận càng ổn định.",
                  "Nhà đầu tư giỏi cần hiểu mô hình, không điều khiển bằng cảm xúc."
                ] : [
                  "Tay nghề phải cực kỳ chuẩn & ổn định để đáp ứng tiêu chuẩn cao.",
                  "Áp lực công việc và sự đào thải tại nước ngoài gắt gao hơn.",
                  "Kỷ luật – giờ giấc – thái độ được kiểm soát cực kỳ chặt chẽ.",
                  "Không có ngoại lệ cho người làm sai quy trình an toàn & pháp lý."
                ]).map((text, i) => (
                  <div key={i} className="flex gap-4 items-center font-bold text-gray-700 text-sm">
                    <div className="size-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    {text}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 🧭 5️⃣ LỘ TRÌNH CHI TIẾT */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#111318] mb-16 uppercase tracking-widest">Lộ trình con đường</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {(isPath1 ? [
              { t: "GĐ 1: Nền tảng nghề", d: "Văn hoá, đạo đức & An toàn y tế" },
              { t: "GĐ 2: Kỹ thuật cốt lõi", d: "Hiểu bản chất thao tác & lực tay" },
              { t: "GĐ 3: Thực hành mẫu", d: "Sửa lỗi từng milimet trên mẫu thật" },
              { t: "GĐ 4: Đi làm & Đi tiếp", d: "Môi trường thật & Định hướng tương lai" }
            ] : isPath2 ? [
              { t: "GĐ 1: Đánh giá & Chuẩn hoá", d: "Soi lỗi lực - nhịp - quy trình hiện tại" },
              { t: "GĐ 2: Sửa tay chuyên sâu", d: "Sửa thao tác, hiểu sâu cơ - huyệt" },
              { t: "GĐ 3: Thực hành cường độ", d: "Làm ca dịch vụ liên tục chất lượng cao" },
              { t: "GĐ 4: Định vị & Hướng đi", d: "Lên Senior / Mentor / Mở tiệm" }
            ] : isPath3 ? [
              { t: "GĐ 1: Hiểu đúng về mở tiệm", d: "Mô hình phù hợp - Quy mô - Vốn - Rủi ro" },
              { t: "GĐ 2: Chuẩn bị trước khi mở", d: "Dịch vụ - Mặt bằng - Pháp lý - Giấy phép" },
              { t: "GĐ 3: Vận hành tiệm thực tế", d: "Quy trình - Nhân sự - Giá - Doanh thu" },
              { t: "GĐ 4: Ổn định & Bền vững", d: "Giữ chất lượng - Giảm phụ thuộc vào chủ" }
            ] : isPath4 ? [
              { t: "GĐ 1: Hiểu mô hình hệ sinh thái", d: "Ngành vận hành thế nào - Vai trò nhà đầu tư" },
              { t: "GĐ 2: Thẩm định & Lựa chọn", d: "Lựa chọn hình thức đầu tư điểm đơn hay chuỗi" },
              { t: "GĐ 3: Đồng hành & Giám sát", d: "Theo dõi báo cáo - Định hướng chiến lược" },
              { t: "GĐ 4: Mở rộng & Tối ưu", d: "Tái đầu tư - Mở thêm điểm - Đồng hành dài hạn" }
            ] : [
              { t: "GĐ 1: Đánh giá & Chuẩn hoá", d: "Soi tay nghề, xác định lỗ hổng theo chuẩn quốc tế" },
              { t: "GĐ 2: Chuẩn quốc tế & Ngôn ngữ", d: "Chuẩn an toàn, thuật ngữ nghề & Giao tiếp cơ bản" },
              { t: "GĐ 3: Chuẩn hồ sơ & Thị trường", d: "Định hướng thị trường (Á/Âu/Úc), chuẩn hồ sơ nghề" },
              { t: "GĐ 4: Kết nối & Sẵn sàng", d: "Kết nối đối tác, chuẩn bị tâm lý, văn hoá & hội nhập" }
            ]).map((step, i) => (
              <div key={i} className={`p-8 rounded-[32px] border border-gray-100 text-left transition hover:shadow-xl ${isPath5 ? 'hover:border-emerald-100' : isPath4 ? 'hover:border-orange-100' : isPath3 ? 'hover:border-purple-100' : isPath2 ? 'hover:border-teal-100' : 'hover:border-primary/10'}`}>
                <div className={`size-10 rounded-xl font-black flex items-center justify-center mb-6 ${isPath5 ? 'bg-emerald-600 text-white' : isPath4 ? 'bg-orange-600 text-white' : isPath3 ? 'bg-purple-600 text-white' : isPath2 ? 'bg-teal-600 text-white' : 'bg-primary text-white'}`}>0{i+1}</div>
                <h4 className="font-black text-sm uppercase mb-3 leading-tight">{step.t}</h4>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⏰ 6️⃣ A DAY IN THE LIFE */}
      <section className="py-24 bg-background-light">
        <div className="max-w-[1000px] mx-auto px-4">
           <div className="bg-white rounded-[60px] p-12 lg:p-20 shadow-xl border border-gray-100 text-center">
              <h2 className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-4">A Day In The Life</h2>
              <h3 className="text-3xl font-black text-[#111318] uppercase tracking-tight mb-16">Một ngày thực tế ở {isPath5 ? 'môi trường quốc tế' : isPath4 ? 'hệ thống đồng hành' : 'Academy'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                 <div className="space-y-4">
                    <p className="text-primary font-black uppercase text-xs">Sáng</p>
                    <p className="text-gray-500 text-sm font-bold leading-relaxed">
                      {isPath1 && 'Ôn nền tảng – luyện kỹ thuật mannequin – chỉnh tay.'}
                      {isPath2 && 'Phân tích tay nghề – chỉnh lỗi – luyện lực tay chuẩn.'}
                      {isPath3 && 'Kiểm tra lịch khách – Nhân sự – Báo cáo doanh thu hôm trước.'}
                      {isPath4 && 'Xem báo cáo vận hành – Doanh thu – Chỉ số chất lượng toàn hệ thống.'}
                      {isPath5 && 'Chuẩn bị ca làm việc – Kiểm tra vệ sinh dụng cụ – Setup chuẩn 5 sao.'}
                    </p>
                 </div>
                 <div className="space-y-4 border-l border-gray-100 pl-8">
                    <p className="text-primary font-black uppercase text-xs">Chiều</p>
                    <p className="text-gray-500 text-sm font-bold leading-relaxed">
                      {isPath1 && 'Thực hành trên mẫu thật – Giảng viên kèm 1:1.'}
                      {isPath2 && 'Thực hành chuyên sâu trên mẫu – tăng cường độ dịch vụ.'}
                      {isPath3 && 'Xử lý khách hàng – Hỗ trợ kỹ thuật cho KTV – Điều phối vận hành.'}
                      {isPath4 && 'Trao đổi định kỳ với đội ngũ điều hành trực tiếp (khi cần).'}
                      {isPath5 && 'Làm dịch vụ liên tục cho khách quốc tế – Đúng quy trình – Đúng giờ.'}
                    </p>
                 </div>
                 <div className="space-y-4 border-l border-gray-100 pl-8">
                    <p className="text-primary font-black uppercase text-xs">Tối</p>
                    <p className="text-gray-500 text-sm font-bold leading-relaxed">
                      {isPath1 && 'Ghi nhật ký tay nghề – Tự rèn thao tác nhẹ nhàng.'}
                      {isPath2 && 'Ghi chú lỗi cá nhân – điều chỉnh thói quen thao tác.'}
                      {isPath3 && 'Xem lại bảng chi phí – Học thêm về quản trị vận hành từ xa.'}
                      {isPath4 && 'Đánh giá chiến lược dài hạn & Các quyết định tăng trưởng.'}
                      {isPath5 && 'Ghi nhận phản hồi khách hàng – Nghỉ ngơi – Học thêm ngoại ngữ nghề.'}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 📚 7️⃣ CHƯƠNG TRÌNH ĐÀO TẠO */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">{isPath5 ? 'Global Readiness' : isPath4 ? 'Strategic Partnership' : 'Program Philosophy'}</h2>
              <h3 className="text-3xl font-black text-[#111318] mb-8 uppercase leading-tight tracking-tighter">{isPath5 ? 'Triết lý hội nhập' : isPath4 ? 'Triết lý đồng hành' : 'Triết lý đào tạo'}</h3>
              <p className="text-gray-500 font-bold text-sm leading-relaxed italic">
                {isPath1 && 'Dạy từ gốc – Dạy để làm được nghề – Lấy an toàn & đạo đức làm trung tâm.'}
                {isPath2 && 'Sửa từ tay - lực - nhịp – Không dạy thêm kỹ thuật nếu nền chưa chuẩn – Lấy độ bền tay nghề làm gốc.'}
                {isPath3 && 'Không khuyến khích mở tiệm nếu chưa sẵn sàng – Ưu tiên an toàn & dòng tiền – Mở để tồn tại và bền vững.'}
                {isPath4 && 'Minh bạch – Rõ ràng – Tăng trưởng bền vững. Không bán cơ hội thiếu thông tin, lấy con người làm gốc.'}
                {isPath5 && 'Không đi quốc tế nếu tay nghề chưa đạt – Tuyệt đối tuân thủ pháp lý – Lấy năng lực thật & kỷ luật làm nền tảng.'}
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: isPath1 ? "Khối Foundation" : isPath2 ? "Khối Skill Audit" : isPath3 ? "Khối Business Foundation" : isPath4 ? "Khối Industry Insight" : "Khối Standardization", 
                  items: isPath1 ? ["Tổng quan ngành làm đẹp", "Văn hoá & Đạo đức nghề", "An toàn Chuẩn Y tế"] : isPath2 ? ["Đánh giá thao tác hiện tại", "Phát hiện lỗi gốc", "Soi lực & nhịp độ cá nhân"] : isPath3 ? ["Tư duy làm chủ", "Phân biệt doanh thu - lợi nhuận", "Quản trị rủi ro cơ bản"] : isPath4 ? ["Đặc thù ngành làm đẹp", "Rủi ro & Cơ hội thị trường", "Mô hình vận hành hệ thống"] : ["Chuẩn hoá thao tác tay nghề", "Quản trị thời gian dịch vụ", "Chuẩn an toàn quốc tế"]
                },
                { 
                  title: isPath1 ? "Khối Core Skills" : isPath2 ? "Khối Advanced Skills" : isPath3 ? "Khối Setup & Operation" : isPath4 ? "Khối Governance & Control" : "Khối Language & Culture", 
                  items: isPath1 ? ["Gội đầu dưỡng sinh", "Chăm sóc da chuẩn y khoa", "Massage trị liệu 60-90p"] : isPath2 ? ["Kỹ thuật lực tay chuyên sâu", "Hiểu sâu cơ - huyệt - sinh lý", "Xử lý tình huống tay nghề khó"] : isPath3 ? ["Chọn mặt bằng & Thiết kế tối ưu", "Quy trình vận hành & Nhân sự", "Giá bán & Chăm sóc khách hàng"] : isPath4 ? ["Cơ chế giám sát tài chính", "Hệ thống báo cáo minh bạch", "Quyền & Nghĩa vụ các bên"] : ["Ngoại ngữ nghề cơ bản", "Văn hoá làm việc đa quốc gia", "Chuẩn bị hồ sơ & Định hướng"]
                }
              ].map((block, i) => (
                <div key={i} className="p-10 rounded-[40px] border border-gray-100 bg-gray-50">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6">{block.title}</h4>
                  <ul className="space-y-4">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="text-xs font-bold text-gray-600 flex gap-3"><span className="text-primary">•</span> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 8️⃣ ĐẦU RA / 🎓 9️⃣ CHỨNG NHẬN */}
      <section className="py-24 bg-[#111318] text-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tight">Kết quả & <br /><span className="text-primary italic">Skill Passport™</span></h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-primary !text-[40px]">workspace_premium</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-2">
                      {isPath1 && 'Chứng nhận KTV Chuyên nghiệp'}
                      {isPath2 && 'Chứng nhận Trình độ Nâng cao'}
                      {isPath3 && 'Chứng nhận Làm chủ tiệm an toàn'}
                      {isPath4 && 'Certificate of Investment & Partner'}
                      {isPath5 && 'International Readiness Certificate'}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">Xác nhận năng lực thực tế đạt chuẩn, được tin dùng bởi 200+ đối tác quốc tế & nội địa.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-primary !text-[40px]">import_contacts</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-2">Hồ sơ Skill Passport™</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">Ghi rõ từng kỹ năng đã chuẩn hoá và nhận xét từ chuyên gia (Song ngữ cho PATH-05).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 border border-white/10 rounded-[60px] bg-white/5 text-center">
               <span className="material-symbols-outlined !text-[80px] text-primary/30 mb-6">{isPath5 ? 'public' : isPath4 ? 'handshake' : isPath3 ? 'storefront' : 'verified'}</span>
               <p className="text-lg font-black uppercase tracking-widest">
                 {isPath1 && 'Professional Practitioner'}
                 {isPath2 && 'Advanced Practitioner'}
                 {isPath3 && 'Safe Business Owner'}
                 {isPath4 && 'Certified System Partner'}
                 {isPath5 && 'International Practitioner'}
               </p>
               <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.4em] mt-4">Minh Trang Academy Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎤 10️⃣ MENTOR VOICE™ */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
           <span className="material-symbols-outlined text-primary !text-[60px] mb-8">format_quote</span>
           <blockquote className="text-2xl md:text-3xl font-black text-[#111318] mb-10 italic leading-snug">
              {isPath1 && '“Con đường này không dành cho người muốn đi nhanh, nhưng rất phù hợp với người muốn đi chắc.”'}
              {isPath2 && '“Tay nghề giỏi không đến từ việc làm nhanh, mà từ việc làm đúng trong thời gian dài.”'}
              {isPath3 && '“Mở tiệm mà không hiểu vận hành, sớm muộn cũng quay lại làm thợ.”'}
              {isPath4 && '“Đầu tư vào con người và hệ thống luôn bền hơn đầu tư vào mặt bằng hay thiết bị.”'}
              {isPath5 && '“Ra nước ngoài không làm bạn giỏi hơn, tay nghề giỏi mới giúp bạn ở lại được.”'}
           </blockquote>
           <p className="font-black text-[#111318] uppercase tracking-widest text-xs">Mentor PATH-0{activePathId.slice(-1) || '1'}</p>
        </div>
      </section>

      {/* ❤️ 11️⃣ CÂU CHUYỆN NGƯỜI THẬT */}
      <section className="py-24 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#111318] uppercase tracking-widest">Câu chuyện thực tế</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[40px] border border-gray-100">
               <p className="text-gray-600 font-bold italic mb-6 leading-relaxed">
                 {isPath1 && '“Mình từng học ở 2 nơi nhưng không dám đi làm. Học lại từ đầu tại Minh Trang, mình mới hiểu vì sao trước giờ làm sai.”'}
                 {isPath2 && '“Mình làm nghề lâu nhưng hay mệt và đau tay. Sau khi học PATH-02, mới biết là do lực tay sai từ đầu, sửa xong làm khách khen hẳn.”'}
                 {isPath3 && '“Trước đây mình mở tiệm theo cảm xúc, làm cực mà không dư. Sau khi học lại bài bản, mình mới hiểu vì sao tiệm mình mãi không ổn.”'}
                 {isPath4 && '“Trước đây tôi nghĩ chỉ cần bỏ vốn. Sau khi đồng hành, tôi hiểu rằng minh bạch & kỷ luật mới giữ được tiền lâu dài.”'}
                 {isPath5 && '“Mình từng nghĩ chỉ cần đi được là xong. Nhờ học chuẩn lại từ đầu, mình mới trụ được và sống ổn với nghề tại nước ngoài.”'}
               </p>
               <h4 className="font-black text-xs uppercase tracking-widest">{isPath1 ? 'Chị H. (27 tuổi)' : isPath2 ? 'Anh K. (32 tuổi)' : isPath3 ? 'Chị M. (Chủ tiệm)' : isPath4 ? 'Anh P. (Nhà đầu tư)' : 'Chị L. (KTV tại nước ngoài)'}</h4>
            </div>
            <div className="bg-white p-10 rounded-[40px] border border-gray-100">
               <p className="text-gray-600 font-bold italic mb-6 leading-relaxed">
                 {isPath1 && '“Em chưa từng học nghề, nhưng được dạy từ gốc nên không bị hoang mang. Ra trường là em đi làm được luôn.”'}
                 {isPath2 && '“Làm KTV 5 năm tưởng mình giỏi rồi, nhưng đi học nâng cao mới thấy còn quá nhiều thứ chưa chuẩn. Giờ mình tự tin lên Senior rồi.”'}
                 {isPath3 && '“Mình từng suýt bỏ nghề vì tiệm thua lỗ. PATH-03 đã giúp mình nhìn thấy lỗi sai trong quản trị và bắt đầu lại một cách an tâm hơn.”'}
                 {isPath4 && '“Đồng hành cùng Minh Trang giúp tôi an tâm vì hệ thống vận hành có tâm và dữ liệu cực kỳ minh bạch.”'}
                 {isPath5 && '“Chuẩn quốc tế không chỉ là kỹ thuật, mà là thái độ chuyên nghiệp. Đó là thứ giúp mình có thu nhập tốt hơn hẳn khi ra biển lớn.”'}
               </p>
               <h4 className="font-black text-xs uppercase tracking-widest">{isPath1 ? 'Bạn T. (19 tuổi)' : isPath2 ? 'Chị Mai (KTV)' : isPath3 ? 'Chị Lan' : isPath4 ? 'Chị Thu (Đối tác)' : 'Anh Huy (Làm nghề tại Úc)'}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 🔄 12️⃣ TRANSITION & 👨‍👩‍👧 13️⃣ GIA ĐÌNH */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-blue-50 p-12 rounded-[48px]">
              <h3 className="font-black uppercase mb-6 text-blue-900">Transition Options™</h3>
              <p className="text-blue-800/70 text-sm font-bold">Không ai bị bỏ lại phía sau. Bạn có thể học chậm lại, đổi con đường hoặc bảo lưu bất cứ lúc nào.</p>
           </div>
           <div className="bg-gray-900 p-12 rounded-[48px] text-white">
              <h3 className="font-black uppercase mb-6 text-primary">Lời nhắn cho Gia đình</h3>
              <p className="text-gray-400 text-sm font-bold leading-relaxed italic">
                {isPath5 ? '“Minh Trang Academy chỉ hỗ trợ con đường quốc tế chính ngạch – an toàn – không đánh đổi rủi ro pháp lý cho học viên.”' : isPath4 ? '“Minh Trang Academy chỉ đồng hành với nhà đầu tư hiểu rõ rủi ro – tôn trọng con người – cam kết dài hạn.”' : '“Chúng tôi đào tạo học viên để làm nghề tử tế, có kỹ năng thật và lộ trình đi làm rõ ràng.”'}
              </p>
           </div>
        </div>
      </section>

      {/* 🧭 14️⃣ ĐI ĐÂU TIẾP */}
      <section className="py-24 bg-white border-t border-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#111318] mb-12 uppercase tracking-widest">Con đường không cụt</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
             <div className="flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 mb-4 border border-gray-100 hover:text-primary hover:bg-primary/5 transition">
                  <span className="material-symbols-outlined !text-[32px]">{isPath5 ? 'flight_takeoff' : isPath4 ? 'monitoring' : isPath1 ? 'work' : isPath2 ? 'manage_accounts' : 'storefront'}</span>
                </div>
                <p className="text-[10px] font-black uppercase text-gray-500">
                  {isPath1 && 'Đi làm tại Spa / Chuỗi'}
                  {isPath2 && 'Lên Senior / Quản lý'}
                  {isPath3 && 'Chủ tiệm ổn định'}
                  {isPath4 && 'Đồng hành chuỗi dài hạn'}
                  {isPath5 && 'Làm việc lâu dài tại nước ngoài'}
                </p>
             </div>
             <span className="material-symbols-outlined text-gray-200 hidden md:block">trending_flat</span>
             <div className="flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 mb-4 border border-gray-100 hover:text-primary hover:bg-primary/5 transition">
                  <span className="material-symbols-outlined !text-[32px]">{isPath5 ? 'school' : isPath4 ? 'public' : 'storefront'}</span>
                </div>
                <p className="text-[10px] font-black uppercase text-gray-500">
                  {isPath5 ? 'Trở về đào tạo thế hệ sau' : isPath4 ? 'Phát triển hệ sinh thái quốc tế' : 'Mở tiệm an toàn (PATH-03)'}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ❓ 15️⃣ FAQ */}
      <section className="py-24 bg-background-light">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#111318] mb-12 uppercase tracking-widest text-center">Hỏi - Đáp thường gặp</h2>
          <div className="space-y-4">
            {[
              { 
                q: isPath5 ? "Tôi chưa có nghề có đi quốc tế được không?" : isPath1 ? "Tôi chưa biết gì có học được không?" : isPath4 ? "Tôi không hiểu nghề có đầu tư được không?" : "Tôi chưa từng làm chủ có học được không?", 
                a: isPath5 ? "Không. Bạn cần đi qua PATH-01 để có nền tảng vững chắc trước khi chuẩn hoá quốc tế." : isPath1 ? "Có. PATH-01 dành riêng cho người bắt đầu từ số 0." : isPath4 ? "Có, nếu bạn hiểu mô hình và vai trò của mình." : "Có, nếu bạn sẵn sàng học vận hành từ đầu."
              },
              { 
                q: isPath5 ? "Minh Trang có cam kết đi được không?" : isPath4 ? "Có cam kết lợi nhuận không?" : "Bao lâu thì đi làm được?", 
                a: isPath5 ? "Không cam kết 'đi được' (vì phụ thuộc pháp lý & visa), nhưng cam kết đào tạo đúng chuẩn & hỗ trợ hồ sơ minh bạch." : isPath4 ? "Không. Chúng tôi cam kết minh bạch và nỗ lực tối đa, không cam kết lợi nhuận cố định." : "Thường từ 4-12 tuần tuỳ vào lộ trình và khả năng của bạn."
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                <summary className="p-8 cursor-pointer font-black text-[#111318] text-sm flex justify-between items-center list-none uppercase tracking-tight">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition">expand_more</span>
                </summary>
                <div className="p-8 pt-0 text-gray-500 text-sm font-bold border-t border-gray-50 pt-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 🌱 16️⃣ BƯỚC TIẾP THEO (CTA NHẸ) */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-[#111318] mb-12 uppercase leading-tight tracking-tight">
            {isPath5 ? 'Bắt đầu hành trình vươn tầm thế giới:' : 'Con đường tiếp theo không phải là đăng ký học, mà là:'}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <button className={`h-16 px-12 text-white font-black rounded-2xl transition shadow-xl uppercase tracking-widest text-xs ${isPath5 ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' : isPath4 ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-200' : isPath3 ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-200' : isPath2 ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-200' : 'bg-primary hover:bg-blue-700 shadow-blue-200'}`}>
              {isPath5 ? '👉 Làm bài đánh giá năng lực đi quốc tế' : '👉 Trải nghiệm 1 buổi (FREE)'}
            </button>
            <button className="h-16 px-12 bg-white border-2 border-gray-100 text-[#111318] font-black rounded-2xl hover:bg-gray-50 transition uppercase tracking-widest text-xs">
              👉 Nói chuyện với mentor
            </button>
          </div>
          <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em]">Minh Trang Academy — Chúng tôi đào tạo những người đi đúng con đường.</p>
        </div>
      </section>
    </div>
  );
};

export default PathsPage;
