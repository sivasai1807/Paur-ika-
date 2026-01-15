
import React, { useEffect, useState } from 'react';
import { Book, Language, StoryPanel } from '../types';
import { getChapters, getChapterContent, generateSpiritualImage } from '../services/gemini';
import { X, Volume2, ChevronLeft, Sparkles, Loader2, Play, BookOpen } from 'lucide-react';

interface Props {
  book: Book;
  language: Language;
  onClose: () => void;
}

const Reader: React.FC<Props> = ({ book, language, onClose }) => {
  const [view, setView] = useState<'CHAPTERS' | 'STORY'>('CHAPTERS');
  const [chapters, setChapters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState<{title: string, panels: StoryPanel[]} | null>(null);
  const [panelImages, setPanelImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      try {
        const data = await getChapters(book.id, language);
        setChapters(Array.isArray(data) ? data : []);
      } catch (e) {
        setChapters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, [book, language]);

  const handleSelectChapter = async (chap: any) => {
    setLoading(true);
    setView('STORY');
    setPanelImages({});
    try {
      const data = await getChapterContent(book.id, chap.id, language);
      setStory(data);
      
      if (data && Array.isArray(data.panels)) {
        // Sequentially generate images for total immersion
        for (const p of data.panels) {
          if (p.visualPrompt) {
            const img = await generateSpiritualImage(p.visualPrompt);
            if (img) setPanelImages(prev => ({ ...prev, [p.id]: img }));
          }
        }
      }
    } catch (e) {
      console.error("Detailed narrative load failed", e);
    } finally {
      setLoading(false);
    }
  };

  if (loading && view === 'CHAPTERS') {
    return (
      <div className="fixed inset-0 z-[60] bg-slate-950 flex items-center justify-center flex-col gap-8">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-orange-400 animate-pulse" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="font-cinzel text-3xl tracking-[0.3em] text-orange-200 uppercase">Consulting Ancient Sages</p>
          <p className="text-slate-500 font-lora italic text-lg">Gathering microscopic details of {book.name[language]}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col overflow-hidden">
      {/* Immersive Header */}
      <div className="h-24 flex items-center justify-between px-10 glass border-b border-white/5 relative z-20">
        <div className="flex items-center gap-6">
          {view === 'STORY' && (
            <button onClick={() => setView('CHAPTERS')} className="p-3 hover:bg-white/10 rounded-full transition-all text-orange-400">
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-white tracking-wider">
              {view === 'STORY' ? (story?.title || 'Micro-Detailed Narrative') : book.name[language]}
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              <p className="text-xs font-bold tracking-[0.4em] text-orange-400 uppercase">
                Original Scripture Narrative • {language}
              </p>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-3 hover:bg-red-500/20 rounded-full transition-colors text-slate-400 hover:text-red-400">
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] scrollbar-hide">
        {view === 'CHAPTERS' ? (
          <div className="max-w-5xl mx-auto py-20 px-8">
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-5xl font-cinzel text-white italic">Episodes of Eternal Wisdom</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full" />
            </div>
            
            <div className="grid gap-10">
              {chapters.map((chap, idx) => (
                <div 
                  key={chap.id || idx}
                  onClick={() => handleSelectChapter(chap)}
                  className="group relative p-12 glass rounded-[3rem] cursor-pointer hover:border-orange-500/50 transition-all flex items-center gap-10 overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent shadow-xl"
                >
                  <div className="absolute top-0 right-0 p-8 text-[14rem] font-cinzel font-bold text-white/[0.02] group-hover:text-orange-500/10 transition-colors -z-10 select-none">
                    {idx + 1}
                  </div>
                  <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/30 rounded-3xl flex items-center justify-center text-orange-400 text-3xl font-cinzel font-bold group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1 z-10 space-y-2">
                    <h4 className="text-3xl font-cinzel font-bold text-white group-hover:text-orange-200 transition-colors tracking-wide">{chap.title}</h4>
                    <p className="text-slate-400 font-lora text-lg leading-relaxed line-clamp-2 italic">{chap.summary}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-orange-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-8 transition-all z-10">
                    <Play className="w-6 h-6 fill-current text-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto py-20 px-10 space-y-48 pb-80">
            {loading ? (
               <div className="flex flex-col items-center gap-10 py-40 text-center">
                 <Loader2 className="w-24 h-24 text-orange-500 animate-spin" />
                 <div className="space-y-3">
                   <p className="font-cinzel text-4xl text-orange-200 tracking-[0.4em] uppercase">Engraving the Scrolls</p>
                   <p className="text-slate-400 font-lora italic text-xl">Manifesting pin-to-pin Micro-details & Realistic Masterpiece Visuals...</p>
                 </div>
               </div>
            ) : (
              story?.panels.map((panel, idx) => (
                <div key={panel.id || idx} className="space-y-20 animate-in fade-in slide-in-from-bottom-16 duration-[1500ms]">
                  {/* Masterpiece Image Container */}
                  <div className="relative aspect-[16/8] md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)] border border-white/10 group bg-slate-900">
                    {panelImages[panel.id] ? (
                      <img 
                        src={panelImages[panel.id]} 
                        alt="Pin-to-pin divine vision" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6000ms] ease-out" 
                      />
                    ) : (
                      <div className="w-full h-full glass flex flex-col items-center justify-center gap-8 bg-slate-950/90">
                        <div className="relative">
                          <Sparkles className="w-20 h-20 text-orange-500/30 animate-pulse" />
                          <div className="absolute inset-0 bg-orange-500/20 blur-2xl animate-pulse" />
                        </div>
                        <div className="text-center space-y-2">
                          <p className="font-cinzel text-orange-200 text-xl tracking-widest uppercase">Manifesting Micro-Vision {idx + 1}</p>
                          <p className="text-slate-500 font-lora text-sm italic">Crafting Cinematic Realism...</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-10 left-12 md:bottom-16 md:left-20 flex items-center gap-6">
                      <div className="w-2.5 h-16 bg-gradient-to-b from-orange-400 to-rose-700 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.6)]" />
                      <div>
                        <p className="text-xs font-bold text-orange-400 tracking-[0.6em] uppercase mb-2">Detailed Narrative Step</p>
                        <h5 className="text-3xl md:text-5xl font-cinzel font-bold text-white uppercase tracking-widest">Incident {idx + 1}</h5>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Sloka Row */}
                  <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                      <div className="relative p-14 md:p-20 glass rounded-[4rem] md:rounded-[5rem] border-white/5 leading-relaxed bg-gradient-to-br from-white/[0.02] to-transparent shadow-2xl backdrop-blur-2xl">
                        <div className="absolute -top-8 -left-8 w-20 h-20 bg-slate-950 border-2 border-orange-500/40 rounded-full flex items-center justify-center text-orange-400 font-cinzel text-2xl shadow-[0_0_30px_rgba(249,115,22,0.3)] z-10">
                          {idx + 1}
                        </div>
                        <p className="text-2xl md:text-4xl font-lora text-slate-100 italic first-letter:text-9xl first-letter:font-cinzel first-letter:mr-6 first-letter:float-left first-letter:text-orange-500 first-letter:leading-none leading-[1.6]">
                          {panel.content}
                        </p>
                      </div>
                    </div>

                    {panel.sloka && (
                      <div className="lg:w-[500px] space-y-10">
                        <div className="p-12 rounded-[4rem] bg-gradient-to-b from-orange-950/30 to-slate-950/50 border border-orange-500/20 relative overflow-hidden group shadow-2xl">
                           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                             <Volume2 className="w-64 h-64 text-orange-500" />
                           </div>
                           <div className="flex items-center justify-between mb-10">
                              <span className="text-xs font-bold tracking-[0.5em] text-orange-400 uppercase">Sacred Scripture</span>
                              <button className="p-4 bg-orange-500 rounded-full text-white shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 fill-current" />
                              </button>
                           </div>
                           <p className="text-3xl md:text-4xl font-cinzel text-orange-100 text-center leading-[1.8] italic underline underline-offset-[16px] decoration-orange-500/40">
                             {panel.sloka}
                           </p>
                           <div className="mt-14 pt-10 border-t border-orange-500/20">
                             <p className="text-xl md:text-2xl font-lora text-slate-300 italic text-center leading-relaxed font-light">
                               {panel.meaning}
                             </p>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            
            {!loading && story && (
               <div className="pt-32 flex flex-col items-center gap-10">
                  <div className="h-px w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                  <p className="font-cinzel text-3xl text-white/30 tracking-[0.5em] uppercase">Chronicle Concluded</p>
                  <button 
                    onClick={() => setView('CHAPTERS')}
                    className="px-16 py-6 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-bold text-xl shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-all uppercase tracking-widest hover:-translate-y-1"
                  >
                    Continue the Journey
                  </button>
               </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reader;
