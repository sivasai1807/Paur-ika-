
import React, { useState, useEffect } from 'react';
import { Language, DailyQuote } from '../types';
import { getDailyQuote } from '../services/gemini';
import { Quote, Sparkles, BookOpen, Volume2, Share2, Calendar } from 'lucide-react';

interface Props {
  language: Language;
}

const Engage: React.FC<Props> = ({ language }) => {
  const [quote, setQuote] = useState<DailyQuote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const q = await getDailyQuote(language);
        setQuote(q);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, [language]);

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold tracking-widest uppercase">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white tracking-tight">Daily Divine Engagement</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-lora italic">
          Start your journey with a piece of timeless wisdom from the ages.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Daily Quote Card */}
        <div className="md:col-span-2 glass rounded-[3rem] p-10 relative overflow-hidden group border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="w-48 h-48 text-orange-500" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-orange-200">Quote of the Day</h3>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  <div className="h-8 bg-white/5 rounded-lg animate-pulse w-full"></div>
                  <div className="h-8 bg-white/5 rounded-lg animate-pulse w-3/4"></div>
                </div>
              ) : (
                <div className="space-y-6">
                  <blockquote className="text-3xl md:text-4xl font-lora text-white leading-tight italic">
                    "{quote?.text}"
                  </blockquote>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-slate-300 italic text-lg leading-relaxed">
                      {quote?.meaning}
                    </p>
                  </div>
                  <p className="text-orange-400 font-bold tracking-widest uppercase text-sm">— {quote?.author}</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-orange-500 transition-all font-bold text-white group">
                <Volume2 className="w-4 h-4" /> Listen Audio
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all font-bold text-white">
                <Share2 className="w-4 h-4" /> Share Wisdom
              </button>
            </div>
          </div>
        </div>

        {/* Daily Challenge Card */}
        <div className="glass rounded-[3rem] p-10 flex flex-col justify-between border-white/5 bg-gradient-to-br from-indigo-950/40 to-slate-950">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-indigo-200">Daily Reflection</h3>
            <p className="text-slate-300 font-lora text-lg leading-relaxed italic">
              "How can you apply the principle of Nishkama Karma (selfless action) in your work today?"
            </p>
          </div>
          
          <div className="space-y-4">
            <textarea 
              placeholder="Reflect here..."
              className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-all placeholder-slate-600 resize-none"
            />
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white font-bold transition-all shadow-xl shadow-indigo-900/40">
              Save Reflection
            </button>
          </div>
        </div>
      </div>

      {/* Mini Stories Row */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 glass rounded-[2.5rem] flex gap-6 items-center hover:bg-white/10 transition-colors cursor-pointer border-white/5">
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <img src="https://picsum.photos/seed/moral1/200/200" alt="Moral" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Today's Moral Story</span>
            <h4 className="text-xl font-cinzel font-bold text-white mt-1">The Faith of Dhruva</h4>
            <p className="text-slate-400 text-sm font-lora line-clamp-2 mt-2 italic">A tale of unwavering determination and divine grace from the Bhagavata Purana.</p>
          </div>
        </div>
        <div className="p-8 glass rounded-[2.5rem] flex gap-6 items-center hover:bg-white/10 transition-colors cursor-pointer border-white/5">
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
            <img src="https://picsum.photos/seed/moral2/200/200" alt="Moral" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Divine Knowledge</span>
            <h4 className="text-xl font-cinzel font-bold text-white mt-1">Understanding Dharma</h4>
            <p className="text-slate-400 text-sm font-lora line-clamp-2 mt-2 italic">Why Dharma is the foundation of the universe according to Mahabharata.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engage;
