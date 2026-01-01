
import React, { useState, useRef, useEffect } from 'react';
import { createMentorChat } from '../services/geminiService';
import { ChatMessage } from '../types';

const MentorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là AI Mentor từ Minh Trang Academy. Bạn cần tư vấn gì về sự nghiệp làm đẹp không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = createMentorChat('You are a professional career mentor for Minh Trang Academy, a beauty school in Vietnam. You are helpful, professional, and knowledgeable about the 5 paths: Specialist, Spa Owner, Trainer, Product Business, and Operations Manager. Respond in Vietnamese.');
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Xin lỗi, tôi gặp chút trục trặc. Bạn vui lòng thử lại nhé.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Trò chuyện với Mentor</h3>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              placeholder="Hỏi Mentor điều gì đó..."
              className="flex-1 text-sm border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit"
              className="size-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="size-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
        >
          <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat</span>
        </button>
      )}
    </div>
  );
};

export default MentorChat;
