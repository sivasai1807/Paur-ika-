
import React from 'react';
import { LANGUAGES } from '../constants';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface Props {
  selected: Language;
  onSelect: (l: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-slate-500 transition-colors">
      <Globe className="w-4 h-4 text-orange-400" />
      <select 
        value={selected}
        onChange={(e) => onSelect(e.target.value as Language)}
        className="bg-transparent text-sm font-medium outline-none cursor-pointer text-slate-200"
      >
        {LANGUAGES.map((l) => (
          <option key={l} value={l} className="bg-slate-900 text-white">
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
