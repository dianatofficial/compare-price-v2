import { ProductTier, PlanDetail, ComparisonRow, QuizQuestion } from "./types";

export const PLANS: PlanDetail[] = [
  {
    id: ProductTier.STARTER,
    name: "Starter",
    badge: "پایــه",
    priceMonthly: "۴,۲۰۰,۰۰۰",
    priceYearly: "۳۷,۸۰۰,۰۰۰",
    priceDiscount: "۲۵٪",
    description: "برای شروع هوشمندانه در بازارهای مالی و تحلیل‌های روزانه و هفتگی",
    accentColor: "#ffffff",
    accentTextColor: "text-white",
    borderColor: "border-white/30",
    glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    btnBgColor: "bg-white hover:bg-slate-150 text-neutral-950",
    btnTextColor: "text-neutral-950"
  },
  {
    id: ProductTier.PRO,
    name: "PRO",
    badge: "حرفــه‌ای",
    priceMonthly: "۵,۴۰۰,۰۰۰",
    priceYearly: "۴۲,۱۲۰,۰۰۰",
    priceDiscount: "۳۵٪",
    description: "بهترین انتخاب برای معامله‌گران فعال، تحلیل چارت دقیقه‌ای و سیگنال‌های جهت‌دار",
    accentColor: "#bef264", // Pistachio Green
    accentTextColor: "text-[#bef264]",
    borderColor: "border-[#bef264]/30",
    glowColor: "shadow-[0_0_25px_rgba(190,242,100,0.25)]",
    btnBgColor: "bg-[#bef264] hover:bg-[#a3e635] text-neutral-950",
    btnTextColor: "text-neutral-950",
    recommeded: true
  },
  {
    id: ProductTier.ULTRA,
    name: "ULTRA",
    badge: "فوق‌پیشرفته",
    priceMonthly: "۹,۷۰۰,۰۰۰",
    priceYearly: "۶۴,۰۲۰,۰۰۰",
    priceDiscount: "۴۵٪",
    description: "نهایت قدرت پردازش، تحلیل همزمان تایم‌فریم‌ها، خروجی بدون کپی‌رایت و ابزار اختصاصی",
    accentColor: "#f43f5e", // Magenta
    accentTextColor: "text-[#f43f5e]",
    borderColor: "border-[#f43f5e]/30",
    glowColor: "shadow-[0_0_30px_rgba(244,63,94,0.3)]",
    btnBgColor: "bg-[#f43f5e] hover:bg-[#e11d48] text-white",
    btnTextColor: "text-white"
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  // --- Markets Category ---
  {
    id: "m_crypto",
    title: "تحلیل تخصصی ارزهای دیجیتال",
    subtitle: "پوشش جامع کوین‌ها و توکن‌های مارکت کریپتوکارنسی همراه با چارت‌های لایو",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_forex",
    title: "تحلیل تخصصی جفت‌ارزهای فارکس",
    subtitle: "پردازش جفت‌ارزهای اصلی، فرعی فاندامنتال و تکنیکال بازارهای جهانی",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_us_stocks",
    title: "تحلیل سهام بورس آمریکا",
    subtitle: "مانیتورینگ بزرگ‌ترین شرکت‌های ایالات متحده (NASDAQ, NYSE)",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_iran_stocks",
    title: "تحلیل تکنیکال بورس ایران",
    subtitle: "پوشش نمادهای فعال بازار سرمایه ایران بر اساس فرمول‌های تحلیل بومی",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Timeframes Category ---
  {
    id: "t_minute",
    title: "تحلیل چارت دقیقه‌ای (کوتاه‌مدت)",
    subtitle: "تحلیل و پردازش تایم‌فریم‌های ۱ الی ۱۵ دقیقه برای معاملات نوسان‌گیری فوق‌ سریع اسکالپ",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "t_hourly",
    title: "تحلیل ساعتی و بین‌روزی",
    subtitle: "پیش‌بینی حرکت بازار در بازه‌های زمانی ۱ و ۴ ساعته برای معاملات روزانه",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "t_daily",
    title: "تحلیل روزانه (دیلی)",
    subtitle: "استخراج روند کلی و حمایت/مقاومت‌های معتبر جهت نوسانات میان‌مدت",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "t_weekly",
    title: "تحلیل هفتگی (سوئینگ)",
    subtitle: "رویکرد عمیق هفتگی به روند بازار مناسب سرمایه‌گذاران بلندمدت",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Biases Category ---
  {
    id: "b_technical_patterns",
    title: "تحلیل بر اساس الگوهای تکنیکال",
    subtitle: "شناسایی کلاسیک الگوهای نموداری از قبیل سر و شانه، کف و سقف‌های دوگانه و کانال‌ها",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_price_action",
    title: "تحلیل پرایس اکشن",
    subtitle: "بررسی رفتار کندل‌ها، سطوح کلیدی عرضه و تقاضا و جریان نقدینگی ساختار بازار",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_elliott_wave",
    title: "تحلیل الیوت ویو",
    subtitle: "موج‌شماری استاندارد امواج انگیزشی و اصلاحی بر اساس قوانین کلاسیک با امواج الیوت",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_neowave",
    title: "تحلیل نئو ویو",
    subtitle: "رویکرد شمارش پیشرفته نئوویو برای ساختار پیچیده امواج در بازارهای پرنوسان",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_wyckoff",
    title: "تحلیل وایکوف",
    subtitle: "تشخیص فازهای انباشت، توزیع و حرکت‌های تله خرید/فروش به روش قانونمند وایکوف",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_rtm",
    title: "تحلیل RTM",
    subtitle: "شناسایی نواحی پیشرفته عرضه و تقاضا مبتنی بر متدهای دقیق آر‌تی‌ام (Read The Market)",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_ict",
    title: "تحلیل ICT",
    subtitle: "بررسی و شکار اردر بلاک‌ها، استخر نقدینگی و گپ‌های ارزش منصفانه با مدل‌های آی‌سی‌تی",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_smart_money",
    title: "تحلیل Smart Money",
    subtitle: "ردیابی گام‌های معامله‌گران نهادی، ساختار بازار (BOS/CHoCH) و لیکوئیدیتی اسمارت مانی",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_summary",
    title: "ارائه جمع‌بندی",
    subtitle: "ترکیب و نتیجه‌گیری نهایی دیدگاه‌های مختلف برای تشکیل بهترین تصمیم معاملاتی",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_neutral",
    title: "تحلیل جهت‌گیری بی‌طرف (Neutral)",
    subtitle: "شناسایی نواحی رنج، تثبیت قیمت و هشدارهای مربوط به دور ماندن از معامله در طوفان‌ها",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_bullish",
    title: "تحلیل جهت‌گیری صعودی (Bullish)",
    subtitle: "فرموله‌سازی مومنتوم‌های خرید، سناریوهای شکست سقف و اهداف صعودی قیمت",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_bearish",
    title: "تحلیل جهت‌گیری نزولی (Bearish)",
    subtitle: "فرموله‌سازی مومنتوم‌های فروش، پیش‌بینی شکست کف‌ها و اهداف ریزشی بازار",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Outputs Category ---
  {
    id: "o_pdf",
    title: "خروجی جامع فایل PDF",
    subtitle: "تهیه خودکار گزارش‌های تحلیلی ساختاریافته به صورت پی‌دی‌اف زیبانگار و مصور",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "o_text",
    title: "خروجی متنی کپی‌شدنی گام‌به‌گام",
    subtitle: "دریافت متن تمیز خلاصه گزارش جهت ارسال مستقیم در تلگرام یا ابزارهای دیگر",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: false,
    [ProductTier.ULTRA]: true
  },
  {
    id: "o_white_label",
    title: "خروجی بدون کپی‌رایت برندینگ (White-Label)",
    subtitle: "امکان حذف لوگو و امضای ربات جهت استفاده و بازنشر شخصی با نام دلخواه شما",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: false,
    [ProductTier.ULTRA]: true
  },
  {
    id: "o_dual_chart",
    title: "بارگذاری همزمان دو چارت/تایم‌فریم",
    subtitle: "مقایسه همزمان مولتی‌تایم‌فرم دو جفت‌ارز یا دو نماد متفاوت در قالب یک مانیتور واحد",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: false,
    [ProductTier.ULTRA]: true
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "بیشتر در چه بازارهای مالی فعالیت می‌کنید یا قصد فعالیت دارید؟",
    options: [
      {
        text: "بورس ایران یا ارز دیجیتال به صورت هولدر بلندمدتی",
        points: { [ProductTier.STARTER]: 3, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "کریپتو و فارکس به طور مرتب و برای نوسان‌گیری با اندیکاتور",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 3, [ProductTier.ULTRA]: 1 }
      },
      {
        text: "تمام مارکت‌ها به طور موازی و در سطوح حساس بازار با ابزارهای اختصاصی",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 4 }
      }
    ]
  },
  {
    id: 2,
    text: "آیا به تایم‌فریم‌های بسیار کوتاه (مانند ۱ الی ۱۵ دقیقه‌ای - اسکالپ) نیاز دارید؟",
    options: [
      {
        text: "خیر، بیشتر تحلیل‌های روزانه و هفتگی برای سرمایه‌گذاری من کافی است",
        points: { [ProductTier.STARTER]: 3, [ProductTier.PRO]: 0, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "بله، سرعت بالا و جهت‌یابی دقیق صعودی/نزولی برای تحلیل چارت دقیقه حیاتی است",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 3, [ProductTier.ULTRA]: 2 }
      },
      {
        text: "کاملاً؛ همچنین به تحلیل‌های لحظه‌ای همزمان روی دو تایم‌فریم مختلف نیاز دارم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 4 }
      }
    ]
  },
  {
    id: 3,
    text: "برای گزارش‌ها و خروجی‌های تحلیلی ربات چه رویکردی دارید؟",
    options: [
      {
        text: "فقط دیدن آنلاین تحلیل جهت تصمیم‌گیری شخصی برایم کافی است",
        points: { [ProductTier.STARTER]: 4, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "نیاز به دریافت فایل PDF تحلیل دارم تا ذخیره یا ارسال کنم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 4, [ProductTier.ULTRA]: 1 }
      },
      {
        text: "می‌خواهم خروجی متن تمیز، فایل PDF بدون کپی‌رایت با برندینگ خودم ارائه دهم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 0, [ProductTier.ULTRA]: 5 }
      }
    ]
  }
];
