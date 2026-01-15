
import React, { useState, useEffect } from 'react';
import { AppView, Language, Book } from './types';
import Header from './components/Header';
import BookCard from './components/BookCard';
import Reader from './components/Reader';
import Chat from './components/Chat';
import Engage from './components/Engage';
import { BOOKS } from './constants';
import { Search, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('READ');
  const [language, setLanguage] = useState<Language>('English');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = BOOKS.filter(book => 
    book.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-orange-500/30 selection:text-white">
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        language={language} 
        setLanguage={setLanguage} 
      />

      <main className="pt-36 pb-24 px-8 sm:px-16 max-w-[1600px] mx-auto">
        {activeView === 'READ' && (
          <div className="space-y-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-3 text-orange-500">
                  <Sparkles className="w-8 h-8" />
                  <span className="font-cinzel text-xl tracking-[0.4em] uppercase">Sacred Wisdom</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-white tracking-tight leading-tight">
                  The Divine <br/><span className="text-orange-500 italic">Chronicles</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-400 font-lora italic leading-relaxed">
                  Embark on an exhaustive journey through microscopic details of the eternal Puranas and Ithihasas in {language}.
                </p>
              </div>

              <div className="relative w-full max-w-xl group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Find your path through the scriptures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-lg text-white focus:outline-none focus:border-orange-500/50 transition-all shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {filteredBooks.map((book) => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  language={language}
                  onClick={() => setSelectedBook(book)}
                />
              ))}
            </div>
            
            {filteredBooks.length === 0 && (
              <div className="text-center py-40 space-y-4">
                <p className="font-cinzel text-2xl text-slate-500 uppercase tracking-widest">No scriptures found in the archives</p>
                <button onClick={() => setSearchTerm('')} className="text-orange-500 font-bold hover:underline">Clear Search</button>
              </div>
            )}
          </div>
        )}

        {activeView === 'CHAT' && <Chat language={language} />}
        
        {activeView === 'ENGAGE' && <Engage language={language} />}
      </main>

      {selectedBook && (
        <Reader 
          book={selectedBook} 
          language={language} 
          onClose={() => setSelectedBook(null)} 
        />
      )}

      <footer className="py-20 border-t border-white/5 glass bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <p className="font-cinzel text-2xl text-white tracking-[0.5em] opacity-40">DIVINEVERSE AI</p>
          <div className="flex items-center justify-center gap-4 text-orange-500/40">
            <div className="h-px w-10 bg-current" />
            <p className="text-slate-500 text-base font-lora italic">
              "Yato Dharmastato Jayah"
            </p>
            <div className="h-px w-10 bg-current" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
