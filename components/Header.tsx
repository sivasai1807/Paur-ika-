
import React from 'react';
import { AppView, Language } from '../types';
import LanguageSelector from './LanguageSelector';
import { Compass, BookOpen, MessageSquare, Heart } from 'lucide-react';

interface Props {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  language: Language;
  setLanguage: (l: Language) => void;
}

const Header: React.FC<Props> = ({ activeView, setActiveView, language, setLanguage }) => {
  const navItems = [
    { id: 'READ', icon: BookOpen, label: 'Read' },
    { id: 'CHAT', icon: MessageSquare, label: 'Divine Chat' },
    { id: 'ENGAGE', icon: Heart, label: 'Engage' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-20 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
          <Compass className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl font-cinzel font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-rose-200 hidden sm:block">
          DIVINEVERSE
        </h1>
      </div>

      <nav className="flex bg-slate-800/40 p-1 rounded-xl border border-white/5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as AppView)}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${
              activeView === item.id 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide hidden md:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <LanguageSelector selected={language} onSelect={setLanguage} />
    </header>
  );
};

export default Header;
