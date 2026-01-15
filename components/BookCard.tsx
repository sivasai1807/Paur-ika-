
import React from 'react';
import { Book, Language } from '../types';

interface Props {
  book: Book;
  language: Language;
  onClick: () => void;
}

const BookCard: React.FC<Props> = ({ book, language, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-[480px] w-full rounded-3xl overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5"
    >
      <img 
        src={book.coverUrl} 
        alt={book.name[language]} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${book.color} mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity`} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-400">
            {book.category}
          </span>
        </div>
        <h3 className="text-4xl font-cinzel font-bold text-white group-hover:text-orange-200 transition-colors leading-tight">
          {book.name[language]}
        </h3>
        <p className="text-base text-slate-300 font-lora line-clamp-2 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
          {book.essence[language]}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-between text-xs font-bold text-orange-500 uppercase tracking-widest group-hover:text-white transition-colors">
          <span>Enter Chronicle</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
