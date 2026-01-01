
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-black text-[#111318] mb-6 uppercase">Kết nối với <br /><span className="text-primary">Minh Trang Academy</span></h1>
              <p className="text-gray-600 text-lg mb-12">
                Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về lộ trình nghề nghiệp và các khoá học.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="size-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111318] mb-1">Trụ sở đào tạo</h4>
                    <p className="text-gray-500 text-sm">Số 38 Ngõ 12 Láng Hạ, Quận Ba Đình, Hà Nội</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="size-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111318] mb-1">Hotline tư vấn</h4>
                    <p className="text-gray-500 text-sm">098.765.4321 (Zalo/iMessage)</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="size-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111318] mb-1">Email liên hệ</h4>
                    <p className="text-gray-500 text-sm">tuyensinh@minhtrangacademy.edu.vn</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary rounded-3xl text-white">
                <h4 className="font-bold text-xl mb-4">Lịch tuyển sinh</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Chúng tôi khai giảng các lớp Phun xăm, Skincare và Gội đầu dưỡng sinh vào ngày mùng 5 và 20 hàng tháng. Hãy liên hệ sớm để nhận ưu đãi!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#111318] mb-6">Đăng ký tư vấn miễn phí</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Họ và tên</label>
                    <input type="text" className="w-full h-12 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-primary focus:border-primary" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Số điện thoại</label>
                    <input type="tel" className="w-full h-12 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-primary focus:border-primary" placeholder="090..." />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Khoá học quan tâm</label>
                  <select className="w-full h-12 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-primary focus:border-primary">
                    <option>Phun xăm Thẩm mỹ</option>
                    <option>Chăm sóc da Y khoa</option>
                    <option>Gội đầu Dưỡng sinh</option>
                    <option>Quản trị Spa</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Ghi chú thêm</label>
                  <textarea className="w-full h-32 p-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-primary focus:border-primary" placeholder="Câu hỏi hoặc yêu cầu của bạn..."></textarea>
                </div>
                <button className="w-full h-14 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Gửi thông tin đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
           <div className="text-center text-gray-400">
             <span className="material-symbols-outlined !text-[48px]">map</span>
             <p className="font-bold">Google Maps Placeholder</p>
             <p className="text-sm">Số 38 Ngõ 12 Láng Hạ, Hà Nội</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
