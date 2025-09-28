import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.quiz': 'Quiz',
    'nav.colleges': 'Colleges Nearby',
    'nav.timeline': 'Timeline',
    'nav.resources': 'Resources',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Home Page
    'home.title': 'Your Gateway to',
    'home.highlight': 'Quality Education',
    'home.subtitle': 'Discover the best educational opportunities in Jammu & Kashmir',
    'home.cta': 'Explore Courses',
    
    // Common
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.call': 'Call',
    'common.website': 'Website',
    'common.subscribe': 'Subscribe',
    
    // Colleges
    'colleges.title': 'Find Colleges Nearby',
    'colleges.subtitle': 'Discover top educational institutions in Jammu & Kashmir',
    'colleges.searchPlaceholder': 'Search colleges...',
    'colleges.selectDistrict': 'Select District',
    'colleges.allDistricts': 'All Districts',
    'colleges.collegeType': 'College Type',
    'colleges.coursesOffered': 'Courses Offered',
    'colleges.facilities': 'Facilities',
    'colleges.students': 'students',
    'colleges.noResults': 'No colleges found',
    'colleges.adjustCriteria': 'Try adjusting your search criteria',
    'colleges.newsletter': 'Stay Updated with College News',
    'colleges.newsletterDesc': 'Get the latest updates on admissions, scholarships, and educational opportunities in J&K',
    'colleges.emailPlaceholder': 'Enter your email',
    
    // Quiz
    'quiz.title': 'Career Aptitude Quiz',
    'quiz.subtitle': 'Discover your ideal career path',
    'quiz.start': 'Start Quiz',
    'quiz.next': 'Next',
    'quiz.previous': 'Previous',
    'quiz.finish': 'Finish Quiz',
    'quiz.results': 'Your Results',
    'quiz.retake': 'Retake Quiz',
    
    // Timeline
    'timeline.title': 'Academic Timeline',
    'timeline.subtitle': 'Important dates and deadlines for academic year',
    
    // Resources
    'resources.title': 'Educational Resources',
    'resources.subtitle': 'Study materials, guides, and helpful resources',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.courses': 'कोर्स',
    'nav.quiz': 'प्रश्नोत्तरी',
    'nav.colleges': 'नजदीकी कॉलेज',
    'nav.timeline': 'समयसीमा',
    'nav.resources': 'संसाधन',
    'nav.login': 'लॉग इन',
    'nav.register': 'रजिस्टर',
    
    // Home Page
    'home.title': 'आपका प्रवेश द्वार',
    'home.highlight': 'गुणवत्तापूर्ण शिक्षा',
    'home.subtitle': 'जम्मू और कश्मीर में सर्वोत्तम शैक्षिक अवसरों की खोज करें',
    'home.cta': 'कोर्स देखें',
    
    // Common
    'common.search': 'खोजें',
    'common.loading': 'लोड हो रहा है...',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.call': 'कॉल करें',
    'common.website': 'वेबसाइट',
    'common.subscribe': 'सब्सक्राइब करें',
    
    // Colleges
    'colleges.title': 'नजदीकी कॉलेज खोजें',
    'colleges.subtitle': 'जम्मू और कश्मीर के शीर्ष शैक्षणिक संस्थानों की खोज करें',
    'colleges.searchPlaceholder': 'कॉलेज खोजें...',
    'colleges.selectDistrict': 'जिला चुनें',
    'colleges.allDistricts': 'सभी जिले',
    'colleges.collegeType': 'कॉलेज प्रकार',
    'colleges.coursesOffered': 'उपलब्ध कोर्स',
    'colleges.facilities': 'सुविधाएं',
    'colleges.students': 'छात्र',
    'colleges.noResults': 'कोई कॉलेज नहीं मिला',
    'colleges.adjustCriteria': 'अपने खोज मापदंड को समायोजित करने का प्रयास करें',
    'colleges.newsletter': 'कॉलेज समाचार के साथ अपडेट रहें',
    'colleges.newsletterDesc': 'जम्मू-कश्मीर में प्रवेश, छात्रवृत्ति और शैक्षिक अवसरों पर नवीनतम अपडेट प्राप्त करें',
    'colleges.emailPlaceholder': 'अपना ईमेल दर्ज करें',
    
    // Quiz
    'quiz.title': 'करियर योग्यता प्रश्नोत्तरी',
    'quiz.subtitle': 'अपना आदर्श करियर पथ खोजें',
    'quiz.start': 'प्रश्नोत्तरी शुरू करें',
    'quiz.next': 'अगला',
    'quiz.previous': 'पिछला',
    'quiz.finish': 'प्रश्नोत्तरी समाप्त करें',
    'quiz.results': 'आपके परिणाम',
    'quiz.retake': 'फिर से लें',
    
    // Timeline
    'timeline.title': 'शैक्षणिक समयसीमा',
    'timeline.subtitle': 'शैक्षणिक वर्ष के लिए महत्वपूर्ण तारीखें और समयसीमा',
    
    // Resources
    'resources.title': 'शैक्षिक संसाधन',
    'resources.subtitle': 'अध्ययन सामग्री, गाइड और सहायक संसाधन',
  },
  ur: {
    // Navigation
    'nav.home': 'ہوم',
    'nav.courses': 'کورسز',
    'nav.quiz': 'کوئز',
    'nav.colleges': 'قریبی کالجز',
    'nav.timeline': 'ٹائم لائن',
    'nav.resources': 'وسائل',
    'nav.login': 'لاگ ان',
    'nav.register': 'رجسٹر',
    
    // Home Page
    'home.title': 'آپ کا گیٹ وے',
    'home.highlight': 'معیاری تعلیم',
    'home.subtitle': 'جموں و کشمیر میں بہترین تعلیمی مواقع دریافت کریں',
    'home.cta': 'کورسز دیکھیں',
    
    // Common
    'common.search': 'تلاش کریں',
    'common.loading': 'لوڈ ہو رہا ہے...',
    'common.submit': 'جمع کریں',
    'common.cancel': 'منسوخ کریں',
    'common.save': 'محفوظ کریں',
    'common.edit': 'ترمیم کریں',
    'common.delete': 'حذف کریں',
    'common.view': 'دیکھیں',
    'common.call': 'کال کریں',
    'common.website': 'ویب سائٹ',
    'common.subscribe': 'سبسکرائب کریں',
    
    // Colleges
    'colleges.title': 'قریبی کالجز تلاش کریں',
    'colleges.subtitle': 'جموں و کشمیر کے اعلیٰ تعلیمی اداروں کو دریافت کریں',
    'colleges.searchPlaceholder': 'کالجز تلاش کریں...',
    'colleges.selectDistrict': 'ضلع منتخب کریں',
    'colleges.allDistricts': 'تمام اضلاع',
    'colleges.collegeType': 'کالج کی قسم',
    'colleges.coursesOffered': 'دستیاب کورسز',
    'colleges.facilities': 'سہولات',
    'colleges.students': 'طلباء',
    'colleges.noResults': 'کوئی کالج نہیں ملا',
    'colleges.adjustCriteria': 'اپنے تلاش کے معیار کو ایڈجسٹ کرنے کی کوشش کریں',
    'colleges.newsletter': 'کالج کی خبروں کے ساتھ اپ ڈیٹ رہیں',
    'colleges.newsletterDesc': 'جموں و کشمیر میں داخلے، وظائف اور تعلیمی مواقع کی تازہ ترین معلومات حاصل کریں',
    'colleges.emailPlaceholder': 'اپنا ای میل درج کریں',
    
    // Quiz
    'quiz.title': 'کیریئر ایپٹیٹیوڈ کوئز',
    'quiz.subtitle': 'اپنا مثالی کیریئر پاتھ دریافت کریں',
    'quiz.start': 'کوئز شروع کریں',
    'quiz.next': 'اگلا',
    'quiz.previous': 'پچھلا',
    'quiz.finish': 'کوئز ختم کریں',
    'quiz.results': 'آپ کے نتائج',
    'quiz.retake': 'دوبارہ لیں',
    
    // Timeline
    'timeline.title': 'تعلیمی ٹائم لائن',
    'timeline.subtitle': 'تعلیمی سال کے لیے اہم تاریخیں اور آخری تاریخیں',
    
    // Resources
    'resources.title': 'تعلیمی وسائل',
    'resources.subtitle': 'مطالعاتی مواد، گائیڈز اور مفید وسائل',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};