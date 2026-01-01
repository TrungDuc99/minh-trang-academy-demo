
import React, { useState } from 'react';
import { analyzeCareerPath } from '../services/geminiService';
import { CAREER_PATHS } from '../constants';
import { CareerPath } from '../types';

const CareerMirror: React.FC = () => {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<{ recommendedPath: CareerPath; reasoning: string; summary: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setStep('loading');
    try {
      const data = await analyzeCareerPath(userInput);
      setResult(data);
      setStep('result');
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      setStep('input');
    }
  };

  const recommendedInfo = result ? CAREER_PATHS.find(p => p.id === result.recommendedPath) : null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-primary p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Career Mirror™</h2>
          <p className="text-blue-100">AI giúp bạn soi chiếu đam mê và tìm thấy lộ trình sự nghiệp phù hợp nhất.</p>
        </div>

        <div className="p-8">
          {step === 'input' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Hãy kể cho AI Mentor nghe về bản thân bạn (Sở thích, mong muốn, tính cách của bạn...)
                </label>
                <textarea
                  className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Ví dụ: Tôi là người tỉ mỉ, thích làm đẹp cho người khác nhưng ngại giao tiếp quá nhiều. Tôi muốn có thu nhập ổn định và được làm việc trong môi trường chuyên nghiệp..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-primary text-white font-bold rounded-xl text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Bắt đầu soi chiếu
              </button>
            </form>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">AI đang phân tích dữ liệu...</h3>
                <p className="text-gray-500">Chúng tôi đang đối chiếu tính cách của bạn với 5 con đường sự nghiệp chính.</p>
              </div>
            </div>
          )}

          {step === 'result' && result && recommendedInfo && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="text-center">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-4">
                  Phân tích hoàn tất
                </span>
                <h3 className="text-2xl font-bold mb-2">Con đường phù hợp nhất với bạn là:</h3>
                <div className="text-4xl font-black text-primary mb-6">
                  {recommendedInfo.title}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                    Tại sao bạn phù hợp?
                  </h4>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {result.reasoning}
                  </p>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    Lời khuyên từ Mentor
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {result.summary}
                  </p>
                  <button 
                    onClick={() => setStep('input')}
                    className="mt-6 text-primary font-bold hover:underline flex items-center gap-1"
                  >
                    Làm lại khảo sát <span className="material-symbols-outlined text-sm">refresh</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-center gap-4">
                 <button className="h-12 px-8 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Đăng ký tư vấn lộ trình
                 </button>
                 <button className="h-12 px-8 bg-white border border-gray-200 font-bold rounded-lg hover:bg-gray-50 transition">
                    Xem chi tiết con đường
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerMirror;
