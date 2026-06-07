import React, { useState } from "react";
import { PlanDetail } from "../types";
import { X, ShieldCheck, CheckCircle2, Ticket, CreditCard, Lock, Sparkles, FileText, Share2, Copy, Check } from "lucide-react";

interface CheckoutModalProps {
  plan: PlanDetail;
  isYearly: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  isYearly,
  onClose,
}) => {
  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  // Math variables
  const originalPriceNumber = Number(isYearly 
    ? plan.priceYearly.replace(/,/g, "") 
    : plan.priceMonthly.replace(/,/g, "")
  );
  
  const couponDiscountAmount = couponApplied ? Math.round(originalPriceNumber * 0.2) : 0; // 20% coupon discount
  const finalPriceValue = originalPriceNumber - couponDiscountAmount;
  const finalPriceText = finalPriceValue.toLocaleString("fa-IR");

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "لطفاً نام و نام خانوادگی خود را وارد کنید.";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "وارد کردن شماره موبایل الزامی است.";
    } else if (!/^09\d{9}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = "فرمت شماره وارد شده نامعتبر است (مثال: 09123456789).";
    }
    if (!formData.email.trim()) {
      errors.email = "وارد کردن آدرس ایمیل الزامی است.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "آدرس ایمیل وارد شده معتبر نیست.";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "GOLDEN" || couponCode.trim().toUpperCase() === "GIFT") {
      setCouponApplied(true);
      setCouponError(false);
    } else {
      setCouponError(true);
      setCouponApplied(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStep("processing");
    setTimeout(() => {
      setStep("success");
    }, 2000); // Simulate transaction processing
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div id="checkout-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel border shadow-2xl transition-all duration-500"
        style={{ borderColor: `${plan.accentColor}30` }}
      >
        {/* Glow corner indicator */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: plan.accentColor }} />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-2 border-b border-white/5 relative z-10 select-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: plan.accentColor }} />
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">پرداخت امن اشتراک ربات</span>
          </div>
          <h4 className="text-lg font-black text-white flex items-center justify-between">
            <span>درخواست اشتراک {plan.name}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${plan.accentTextColor}`} style={{ backgroundColor: `${plan.accentColor}10` }}>
              نسخه {plan.badge}
            </span>
          </h4>
        </div>

        {/* Modal content body based on step */}
        {step === "form" && (
          <form onSubmit={handleFormSubmit} className="p-6 flex flex-col gap-4">
            
            {/* Selected pricing overview */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold">پلن و دوره کلاینت:</span>
                <span className="text-xs font-bold text-white mt-1">
                  ربات تحلیلگر {plan.name} • {isYearly ? "دوره ۱۲ ماهه سالانه" : "دوره ۱ ماهه ماهانه"}
                </span>
                {isYearly && (
                  <span className="text-[9px] text-emerald-400 font-semibold mt-0.5">
                    تخفیف پیش‌فرض {plan.priceDiscount} اعمال شده است.
                  </span>
                )}
              </div>
              <div className="text-left font-black text-sm" style={{ color: plan.accentColor }}>
                {plan.priceMonthly ? (isYearly ? plan.priceYearly : plan.priceMonthly) : "0"} تومان
              </div>
            </div>

            {/* Form Inputs */}
            <div className="flex flex-col gap-3.5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-neutral-400">نام و نام خانوادگی:</label>
                <input
                  type="text"
                  required
                  placeholder="محمد حسینی"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-neutral-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#bef264]/40 transition-colors"
                />
                {formErrors.fullName && <p className="text-[10px] text-red-500 font-semibold">{formErrors.fullName}</p>}
              </div>

              {/* Phone number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-neutral-400">شماره موبایل جهت دریافت پیامکی فعال‌سازی:</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: 09121234567 (باید با 09 شروع شود)"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full bg-neutral-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-left text-white focus:outline-none focus:border-[#bef264]/40 transition-colors placeholder:text-neutral-600"
                />
                {formErrors.phoneNumber && <p className="text-[10px] text-red-500 font-semibold">{formErrors.phoneNumber}</p>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-neutral-400">آدرس ایمیل جهت هماهنگی فاکتور:</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-left text-white focus:outline-none focus:border-[#bef264]/40 transition-colors placeholder:text-neutral-600"
                />
                {formErrors.email && <p className="text-[10px] text-red-500 font-semibold">{formErrors.email}</p>}
              </div>
            </div>

            {/* Coupon / Promo input */}
            <div className="flex flex-col gap-1.5 border-t border-white/5 pt-3.5">
              <label className="text-[11px] font-bold text-neutral-400">کد تخفیف ویژه (کد پیشنهادی: <span className="text-[#bef264] font-black tracking-wider text-xs">GOLDEN</span>)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="کد تخفیف را وارد کنید"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-neutral-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-center tracking-widest text-[#bef264] font-bold focus:outline-none uppercase placeholder:text-neutral-600 placeholder:tracking-normal placeholder:font-normal"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-4 bg-neutral-900 border border-white/10 rounded-xl text-xs font-bold text-neutral-300 hover:text-white cursor-pointer hover:bg-neutral-800 transition-colors"
                >
                  اعمال کد
                </button>
              </div>
              {couponApplied && (
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                  ✓ تخفیف ۲۰٪ ویژه ربات متاتریدر با موفقیت اعمال گردید!
                </p>
              )}
              {couponError && (
                <p className="text-[10px] text-red-400 font-semibold mt-0.5">
                  ⚠ کد تخفیف وارد شده منقضی یا نامعتبر است.
                </p>
              )}
            </div>

            {/* Price Calculations */}
            <div className="mt-2 border-t border-white/5 pt-3.5 space-y-2 select-none">
              <div className="flex justify-between text-xs text-neutral-400 font-medium">
                <span>قیمت پایه دوره:</span>
                <span>{plan.priceMonthly ? (isYearly ? plan.priceYearly : plan.priceMonthly) : "0"} تومان</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                  <span>تخفیف افزوده تفکیکی (۲۰٪):</span>
                  <span>- {couponDiscountAmount.toLocaleString("fa-IR")} تومان</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-white/5 font-black text-sm">
                <span className="text-white">مبلغ کل قابل پرداخت نهایی:</span>
                <span style={{ color: plan.accentColor }}>{finalPriceText} تومان</span>
              </div>
            </div>

            {/* Submit Trigger Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="submit"
                id="btn-checkout-submit"
                className="w-full py-3.5 px-4 rounded-xl font-black text-sm transition-all duration-300 cursor-pointer text-center shiny-btn flex items-center justify-center gap-2"
                style={{ backgroundColor: plan.accentColor, color: plan.id === "ULTRA" ? "white" : "#030303" }}
              >
                <CreditCard className="w-4 h-4" />
                <span>اتصال به درگاه و نهایی‌سازی سفارش</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[9px] text-neutral-500 mt-1">
                <Lock className="w-3 h-3 text-emerald-500/80" />
                <span>پرداخت ایمن تحت شبکه شتاب شاپرک</span>
              </div>
            </div>

          </form>
        )}

        {/* PROCESSING LOADER STEP */}
        {step === "processing" && (
          <div className="p-10 flex flex-col items-center justify-center text-center gap-6 select-none h-[420px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-neutral-900 border-t-current animate-spin" style={{ color: plan.accentColor }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-neutral-400 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-sm font-black text-white">در حال ارتباط با پروتکل امن بانکی...</h5>
              <p className="text-[10px] text-neutral-500 max-w-xs leading-relaxed">
                لطفاً صفحه را نبندید یا رفرش نکنید. در حال فعال‌سازی اشتراک و احراز تراکنش هستیم.
              </p>
            </div>
            
            <div className="text-xs font-mono text-neutral-600 bg-neutral-950/60 py-1.5 px-4 rounded-full border border-white/5">
              TRX_SECURE_AUTH_NODE_03
            </div>
          </div>
        )}

        {/* SUCCESS STATE */}
        {step === "success" && (
          <div className="p-6 flex flex-col gap-5 select-none text-right">
            
            <div className="flex flex-col items-center text-center gap-2 mt-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1">
                <CheckCircle2 className="w-8 h-8 fill-current text-neutral-950" />
              </div>
              <h5 className="text-base font-black text-emerald-400">پرداخت شما با موفقیت تایید شد!</h5>
              <p className="text-[11px] text-neutral-400 max-w-xs">
                اشتراک ربات تحلیل‌گر شما فعال شد و شناسه دسترسی به شماره موبایل شما پیامک گردید.
              </p>
            </div>

            {/* Invoice & Credentials Summary */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 space-y-3.5">
              
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                <span className="text-neutral-400">شناسه تراکنش بانکی (شماره پیگیری):</span>
                <span className="font-mono font-bold text-white">79301294875</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                <span className="text-neutral-400">نوع اشتراک فعال‌شده:</span>
                <span className="font-bold text-white" style={{ color: plan.accentColor }}>{plan.name} {plan.badge}</span>
              </div>

              {/* License Code Display */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-neutral-500 font-bold">کد کاربری انحصاری جهت ورود به پنل:</span>
                <div className="flex gap-2">
                  <div className="flex-1 bg-neutral-900 border border-white/5 rounded-xl px-3 py-2.5 font-mono text-xs text-emerald-400 text-center tracking-wider font-semibold select-all">
                    RB-{plan.id.slice(0,3)}-7X92-LM14-WS80
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(`RB-${plan.id.slice(0,3)}-7X92-LM14-WS80`)}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center shrink-0"
                  >
                    {copiedKey ? <Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={onClose}
                className="w-full py-3 bg-white text-neutral-950 hover:bg-neutral-100 rounded-xl font-bold text-xs transition-colors cursor-pointer text-center"
              >
                مشاهده مجدد جدول مقایسه
              </button>
              
              <div className="flex justify-center items-center text-[10px] text-neutral-500 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/80" />
                  بستر امن کلاینت تحت وب
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
