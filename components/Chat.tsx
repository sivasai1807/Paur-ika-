
import React, { useState, useRef, useEffect } from 'react';
import { Message, Language } from '../types';
import { getGeminiResponse } from '../services/gemini';
import { Send, User, Bot, Sparkles, Loader2 } from 'lucide-react';

interface Props {
  language: Language;
}

const Chat: React.FC<Props> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Namaste. I am your DivineVerse Guide. Ask me anything about the Puranas, Ithihasas, or seek dharma-based guidance.` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await getGeminiResponse(input, language, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, but I am having trouble connecting to the sacred scrolls right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-5xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl border border-white/5">
      <div className="p-6 border-b border-white/5 bg-slate-800/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <div>
            <h2 className="font-cinzel font-bold text-white tracking-wide">Puranic Wisdom Guide</h2>
            <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Enlightened & Active
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
              msg.role === 'user' ? 'bg-slate-700' : 'bg-orange-500/20 border border-orange-500/30'
            }`}>
              {msg.role === 'user' ? <User className="w-5 h-5 text-slate-300" /> : <Bot className="w-5 h-5 text-orange-400" />}
            </div>
            <div className={`max-w-[80%] rounded-3xl p-6 ${
              msg.role === 'user' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 rounded-tr-none' 
                : 'glass text-slate-200 rounded-tl-none border border-white/10'
            }`}>
              <div className="prose prose-invert prose-orange max-w-none whitespace-pre-wrap font-lora text-lg leading-relaxed">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-orange-400 animate-spin" />
            </div>
            <div className="glass rounded-3xl p-6 rounded-tl-none border border-white/10 flex items-center gap-2">
              <span className="text-slate-400 animate-pulse">Chanting sacred mantras...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-white/5 bg-slate-800/20">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Dharma, Rama, Shiva, or life's purpose..."
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-4 pl-6 pr-20 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="absolute right-2 p-3 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 rounded-xl text-white transition-all shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-3 text-center text-[10px] text-slate-500 font-bold tracking-widest uppercase">
          Guided by Sanātana Wisdom
        </p>
      </div>
    </div>
  );
};

export default Chat;
