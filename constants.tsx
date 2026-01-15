
import { Book, Language } from './types';

export const LANGUAGES: Language[] = [
  'English', 'Sanskrit', 'Telugu', 'Tamil', 'Hindi', 'Kannada', 'Malayalam'
];

export const BOOKS: Book[] = [
  // ITHIHASAS
  {
    id: 'ramayana',
    name: { English: 'Ramayana', Sanskrit: 'रामायणम्', Telugu: 'రామాయణం', Tamil: 'இராமாயணம்', Hindi: 'रामायण', Kannada: 'ರಾಮಾಯಣ', Malayalam: 'രാമായണം' },
    essence: { English: 'The Journey of the Ideal Man, Rama.', Sanskrit: 'मर्यादा पुरुषोत्तमस्य कथा।', Telugu: 'శ్రీరామచంద్రుని ధర్మపథం.', Tamil: 'இராமனின் தர்மப் பயணம்.', Hindi: 'श्रीराम की पावन गाथा।', Kannada: 'ಶ್ರೀರಾಮನ ಜೀವನ ಚರಿತ್ರೆ.', Malayalam: 'ശ്രീരാമന്റെ ധർമ്മയാത്ര.' },
    category: 'ITHIHASA',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    color: 'from-orange-600 to-red-900'
  },
  {
    id: 'mahabharata',
    name: { English: 'Mahabharata', Sanskrit: 'महाभारतम्', Telugu: 'మహాభారతం', Tamil: 'மகாபாரதம்', Hindi: 'महाभारत', Kannada: 'ಮಹಾಭಾರತ', Malayalam: 'മഹാഭാരതം' },
    essence: { English: 'The Great Epic of Dharma and the Gita.', Sanskrit: 'धर्मयुद्धस्य महान् इतिहासः।', Telugu: 'కురువంశ యుద్ధం మరియు గీత.', Tamil: 'தர்ம யுத்தம் மற்றும் கீதை.', Hindi: 'कुरुक्षेत्र और गीता का ज्ञान।', Kannada: 'ಧರ್ಮಯುದ್ಧ ಮತ್ತು ಗೀತಾ ಜ್ಞಾನ.', Malayalam: 'മഹാഭാരത യുദ്ധവും గీతയും.' },
    category: 'ITHIHASA',
    coverUrl: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-800 to-indigo-950'
  },
  // 18 MAHĀ PURĀṆAS
  { 
    id: 'brahma-purana', 
    name: { English: 'Brahma Purana', Sanskrit: 'ब्रह्मपुराणम्', Telugu: 'బ్రహ్మ పురాణం', Tamil: 'பிரம்மா புராணம்', Hindi: 'ब्रह्म पुराण', Kannada: 'ಬ್ರಹ್ಮ ಪುರಾಣ', Malayalam: 'ബ്രഹ്മപുരാണം' }, 
    essence: { English: 'The Creation and the First Purana.', Sanskrit: 'सृष्टिकर्तुः ब्रह्मणः पुराणम्।', Telugu: 'సృష్టి మరియు ఆది పురాణం.', Tamil: 'படைப்பின் ரகசியங்கள்.', Hindi: 'सृष्टि की उत्पत्ति की कथा।', Kannada: 'ಸೃಷ್ಟಿಯ ಆದಿ ಪುರಾಣ.', Malayalam: 'സൃഷ്ടികർത്താവിന്റെ പുരാണം.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-rose-600 to-pink-900' 
  },
  { 
    id: 'vishnu-purana', 
    name: { English: 'Vishnu Purana', Sanskrit: 'विष्णुपुराणम्', Telugu: 'విష్ణు పురాణం', Tamil: 'விஷ்ணு புராணம்', Hindi: 'विष्णु पुराण', Kannada: 'ವಿಷ್ಣು ಪುರಾಣ', Malayalam: 'വിഷ്ണുപുരാണം' }, 
    essence: { English: 'The preservation of the universe.', Sanskrit: 'विष्णोः अवतारकथाः।', Telugu: 'విష్ణుమూర్తి అవతారాలు.', Tamil: 'விஷ்ணுவின் அவதாரங்கள்.', Hindi: 'श्री विष्णु के अवतारों की कथा।', Kannada: 'ವಿಷ್ಣುವಿನ ದಶಾವತಾರಗಳು.', Malayalam: 'വിഷ്ണുവിന്റെ അവതാരകഥകൾ.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1615462720443-4560737a6b0c?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-yellow-600 to-amber-900' 
  },
  { 
    id: 'shiva-purana', 
    name: { English: 'Shiva Purana', Sanskrit: 'शिवपुराणम्', Telugu: 'శివ పురాణం', Tamil: 'சிவ புராணம்', Hindi: 'शिव पुराण', Kannada: 'ಶಿವ ಪುರಾಣ', Malayalam: 'ശിവപുരാണം' }, 
    essence: { English: 'The glory of Lord Shiva.', Sanskrit: 'शिवस्य माहात्म्यम्।', Telugu: 'పరమశివుని దివ్య లీలలు.', Tamil: 'சிவனின் பெருமைகள்.', Hindi: 'भगवान शिव की महिमा।', Kannada: 'ಶಿವನ ದಿವ್ಯ ಲೀಲೆಗಳು.', Malayalam: 'ശിവഭഗവാന്റെ മാഹാത്മ്യം.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-cyan-800 to-blue-950' 
  },
  { 
    id: 'bhagavata-purana', 
    name: { English: 'Bhagavata Purana', Sanskrit: 'भागवतपुराणम्', Telugu: 'భాగవత పురాణం', Tamil: 'பாகவத புராணம்', Hindi: 'भागवत पुराण', Kannada: 'ಭಾಗವತ ಪುರಾಣ', Malayalam: 'ഭാഗവതപുരാണം' }, 
    essence: { English: 'The devotional life of Krishna.', Sanskrit: 'कृष्णभक्तेः पराकाष्ठा।', Telugu: 'శ్రీకృష్ణ లీలలు మరియు భక్తి.', Tamil: 'கண்ணனின் லீலைகள்.', Hindi: 'श्रीकृष्ण की भक्ति और लीला।', Kannada: 'ಕೃಷ್ಣನ ಭಕ್ತಿ ಮತ್ತು ಲೀಲೆಗಳು.', Malayalam: 'ശ്രീകൃഷ്ണ ലീലകളും ഭക്തിയും.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-emerald-700 to-teal-950' 
  },
  { 
    id: 'garuda-purana', 
    name: { English: 'Garuda Purana', Sanskrit: 'गरुडपुराणम्', Telugu: 'గరుడ పురాణం', Tamil: 'கருட புராணம்', Hindi: 'गरुड़ पुराण', Kannada: 'ಗರುಡ ಪುರಾಣ', Malayalam: 'ഗరుഡപുരാണം' }, 
    essence: { English: 'The path of the soul after death.', Sanskrit: 'मरणोत्तरं जीवस्य गतिः।', Telugu: 'మరణానంతర జీవిత రహస్యాలు.', Tamil: 'மரணத்திற்கு பின் ஆன்மா.', Hindi: 'मृत्यु के पश्चात जीव की गति।', Kannada: 'ಮರಣಾನಂತರ ಜೀವದ ಗತಿ.', Malayalam: 'മരണാനന്തരമുള്ള ജീവഗതി.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-amber-700 to-yellow-950' 
  },
  { 
    id: 'skanda-purana', 
    name: { English: 'Skanda Purana', Sanskrit: 'स्कन्दपुराणम्', Telugu: 'స్కంద పురాణం', Tamil: 'ஸ்கந்த புராணம்', Hindi: 'स्कन्द पुराण', Kannada: 'ಸ್ಕಂದ ಪುರಾಣ', Malayalam: 'സ്കന്ദപുരാണം' }, 
    essence: { English: 'The longest Purana, dedicated to Kartikeya.', Sanskrit: 'कार्त्तिकेयस्य माहात्म्यम्।', Telugu: 'కుమారస్వామి వైభవం మరియు తీర్థాలు.', Tamil: 'முருகனின் பெருமை.', Hindi: 'भगवान स्कन्द की महिमा।', Kannada: 'ಕುಮಾರಸ್ವಾಮಿಯ ದಿವ್ಯ ಚರಿತ್ರೆ.', Malayalam: 'സ്കന്ദഭഗവാന്റെ മാഹാത്മ്യം.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-red-800 to-orange-950' 
  },
  { 
    id: 'agni-purana', 
    name: { English: 'Agni Purana', Sanskrit: 'अग्निपुराणम्', Telugu: 'అగ్ని పురాణం', Tamil: 'அக்னி புராணம்', Hindi: 'अग्नि पुराण', Kannada: 'ಅಗ್ನಿ ಪುರಾಣ', Malayalam: 'അഗ്നിപുരാണം' }, 
    essence: { English: 'Encyclopedia of arts and sciences.', Sanskrit: 'अग्नेः सर्वविद्यानां संग्रहः।', Telugu: 'కళలు మరియు శాస్త్రాల విజ్ఞానం.', Tamil: 'கலைகளின் கலைக்களஞ்சியம்.', Hindi: 'कला और विज्ञान का कोश।', Kannada: 'ಕಲೆ ಮತ್ತು శాస్త్రాల సంగ్రహ.', Malayalam: 'കലകളുടെയും ശാസ്ത്രങ്ങളുടെയും പുരാണം.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-orange-800 to-red-950' 
  },
  { 
    id: 'brahmanda-purana', 
    name: { English: 'Brahmanda Purana', Sanskrit: 'ब्रह्माण्डपुराणम्', Telugu: 'బ్రహ్మాండ పురాణం', Tamil: 'பிரம்மாண்ட புராணம்', Hindi: 'ब्रह्माण्ड पुराण', Kannada: 'ಬ್ರಹ್ಮಾಂಡ ಪುರಾಣ', Malayalam: 'ബ്രഹ്മാണ്ഡപുരാണം' }, 
    essence: { English: 'The Cosmic Egg and Lalita Sahasranama.', Sanskrit: 'ब्रह्माण्डस्य उत्पत्तिः।', Telugu: 'విశ్వ ఆవిర్భావం మరియు లలితా వైభవం.', Tamil: 'பிரம்மாண்டமான வரலாறு.', Hindi: 'ब्रह्माण्ड की उत्पत्ति और विस्तार।', Kannada: 'ವಿಶ್ವದ ಉತ್ಪತ್ತಿ ಮತ್ತು ಲಲಿತಾ ವೈಭವ.', Malayalam: 'പ്രപഞ്ചോല്പത്തിയും ലളിതാ മാഹാത്മ്യവും.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4b519?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-indigo-700 to-purple-950' 
  },
  { 
    id: 'narada-purana', 
    name: { English: 'Narada Purana', Sanskrit: 'नारदपुराणम्', Telugu: 'నారద పురాణం', Tamil: 'நாரத புராணம்', Hindi: 'नारद पुराण', Kannada: 'ನಾರದ ಪುರಾಣ', Malayalam: 'നാരദപുരാണം' }, 
    essence: { English: 'The teachings of the divine sage.', Sanskrit: 'नारदस्य उपदेशाः।', Telugu: 'నారద మహర్షి బోధనలు.', Tamil: 'நாரதரின் உபதேசங்கள்.', Hindi: 'देवर्षि नारद के उपदेश।', Kannada: 'ನಾರದ ಮಹರ್ಷಿಯ ಬೋಧನೆಗಳು.', Malayalam: 'നാരദമഹർഷിയുടെ ഉപദേശങ്ങൾ.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-orange-600 to-amber-900' 
  },
  { 
    id: 'brahmavaivarta-purana', 
    name: { English: 'Brahmavaivarta Purana', Sanskrit: 'ब्रह्मवैवर्तपुराणम्', Telugu: 'బ్రహ్మవైవర్త పురాణం', Tamil: 'பிரம்மா வைவர்த்த புராணம்', Hindi: 'ब्रह्मवैवर्त पुराण', Kannada: 'ಬ್ರಹ್ಮವೈವರ್ತ ಪುರಾಣ', Malayalam: 'ബ്രഹ്മവൈവർത്തപുരാണം' }, 
    essence: { English: 'Glory of Radha-Krishna.', Sanskrit: 'राधाकृष्णयोः माहात्म्यम्।', Telugu: 'రాధాకృష్ణుల దివ్య ప్రేమ కథ.', Tamil: 'ராதா கிருஷ்ணனின் மகிமை.', Hindi: 'राधा-कृष्ण की दिव्य महिमा।', Kannada: 'ರಾಧಾ-ಕృష్ణರ ದಿವ್ಯ ಲೀಲೆಗಳು.', Malayalam: 'രാധാകൃഷ്ണന്മാരുടെ മാഹാത്മ്യം.' }, 
    category: 'PURANA', 
    coverUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 
    color: 'from-pink-700 to-fuchsia-950' 
  },
];
