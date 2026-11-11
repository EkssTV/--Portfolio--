const baseColors = {
  web: { border: "border-blue-400", dot: "bg-blue-500", badge: "bg-blue-100 text-blue-800" },
  app: { border: "border-indigo-400", dot: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800" },
  db: { border: "border-amber-400", dot: "bg-amber-500", badge: "bg-amber-100 text-amber-800" },
  hardware: { border: "border-emerald-400", dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800" },
  soft: { border: "border-pink-400", dot: "bg-pink-500", badge: "bg-pink-100 text-pink-800" },
  pro: { border: "border-slate-400", dot: "bg-slate-500", badge: "bg-slate-100 text-slate-800" },
  lang: { border: "border-teal-400", dot: "bg-teal-500", badge: "bg-teal-100 text-teal-800" },
  intl: { border: "border-orange-400", dot: "bg-orange-500", badge: "bg-orange-100 text-orange-800" },
  volunteer: { border: "border-purple-400", dot: "bg-purple-500", badge: "bg-purple-100 text-purple-800" }
};

export const themeColors = {
  // --- Développement Web ---
  "Développement Web": baseColors.web,
  "Web Development": baseColors.web,
  "웹 개발": baseColors.web,

  // --- Développement Applicatif ---
  "Développement Applicatif": baseColors.app,
  "Application Development": baseColors.app,
  "앱 개발": baseColors.app,

  // --- Base de données ---
  "Base de données": baseColors.db,
  "Database": baseColors.db,
  "데이터베이스": baseColors.db,

  // --- Électronique ---
  "Électronique": baseColors.hardware,
  "Electronics": baseColors.hardware,
  "전자": baseColors.hardware,

  // --- Soft Skills ---
  "Soft Skills": baseColors.soft,
  "소프트 스킬": baseColors.soft,

  // --- Expérience professionnelle ---
  "Expérience professionnelle": baseColors.pro,
  "Professional Experience": baseColors.pro,
  "직업 경험": baseColors.pro,
  "경력": baseColors.pro,

  // --- Langues étrangères ---
  "Langues étrangères": baseColors.lang,
  "Foreign Languages": baseColors.lang,
  "외국어": baseColors.lang,

  // --- Expérience internationale ---
  "Expérience internationale": baseColors.intl,
  "International Experience": baseColors.intl,
  "해외 경험": baseColors.intl,
  "국제 경험": baseColors.intl,

  // --- Volontariat / Services IT ---
  "Volontariat / Services IT": baseColors.volunteer,
  "Volunteering / IT Services": baseColors.volunteer,
  "봉사활동 / IT 서비스": baseColors.volunteer,
};