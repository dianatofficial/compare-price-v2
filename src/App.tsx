/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { PLANS } from "./data";
import { PlanDetail, ProductTier } from "./types";
import { PlanCard } from "./components/PlanCard";
import { ComparisonTable } from "./components/ComparisonTable";
import { CheckoutModal } from "./components/CheckoutModal";
import { 
  TrendingUp, 
  Coins, 
  Info, 
  Sparkles, 
  BadgeCheck, 
  Globe, 
  LineChart, 
  Smartphone, 
  Laptop, 
  Zap, 
  Flame, 
  ArrowRightLeft,
  ChevronLeft
} from "lucide-react";

export default function App() {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const [highlightedPlanId, setHighlightedPlanId] = useState<string | null>(null);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PlanDetail | null>(null);

  const handleHoverPlan = (id: string | null) => {
    setHighlightedPlanId(id);
  };

  const handleSelectPlanForCheckout = (plan: PlanDetail) => {
    setSelectedPlanForCheckout(plan);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-100 flex flex-col items-center justify-start selection:bg-[#bef264]/20 selection:text-[#bef264] antialiased rfont-sans w-full py-4 px-1 sm:px-4">
      
      {/* Visual Ambient Background Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#bef264]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#f43f5e]/5 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Main Core Content Wrapper: Strictly Mobile Dimensions & Mobile-First Centered Scale */}
      <div 
        className="w-full max-w-[428px] rounded-[28px] sm:rounded-[36px] bg-[#060606] border border-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative z-10"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 20px 50px -12px rgba(0,0,0,0.95)"
        }}
      >
        {/* Decorative Glossy Phone Camera/Mic Mesh Indicator (Without any Page Header) */}
        <div className="w-16 h-3.5 bg-neutral-900 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center border-x border-b border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 border border-white/5" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-6 pt-10 px-3 sm:px-4.5 pb-6">
          
          {/* A. Dynamic Promo & Title Banner */}
          <div className="flex flex-col items-center text-center mt-3 select-none">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-white/10 mb-2.5">
              <Sparkles className="w-3 h-3 text-[#bef264]" />
              <span className="text-[9px] font-black text-[#bef264] tracking-wider uppercase">تحلیل هوشمند و تخصصی بازارهای مالی</span>
            </div>
            
            <h2 className="text-xl font-black text-white tracking-tight leading-relaxed">
              مقایسه ربات‌های تحلیل تخصصی
            </h2>
          </div>

          {/* B. Billing Cycle Toggler (Monthly / Yearly) */}
          <div className="flex flex-col items-center justify-center gap-2 select-none bg-neutral-950/60 p-2.5 border border-white/5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-900/95 rounded-xl border border-white/5 w-full">
              <button
                id="billing-monthly-btn"
                onClick={() => setIsYearly(false)}
                className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-all duration-300 cursor-pointer text-center tracking-tight active:scale-98
                  ${!isYearly 
                    ? "bg-[#0ea5e9] text-white shadow-[0_3px_10px_rgba(14,165,233,0.3)] border-b-2 border-[#0284c7]" 
                    : "bg-transparent text-neutral-400 hover:text-white"
                  }`}
              >
                پرداخت ماهانــه
              </button>
              
              <button
                id="billing-yearly-btn"
                onClick={() => setIsYearly(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-black rounded-lg transition-all duration-300 cursor-pointer text-center tracking-tight active:scale-98
                  ${isYearly 
                    ? "bg-[#bef264] text-neutral-950 shadow-[0_3px_10px_rgba(190,242,100,0.4)] border-b-2 border-[#84cc16]" 
                    : "bg-transparent text-neutral-400 hover:text-white"
                  }`}
              >
                <span>پرداخت سالانــه</span>
                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md shadow-sm
                  ${isYearly ? "bg-neutral-950 text-[#bef264]" : "bg-neutral-850 text-neutral-400"}`}>
                  ۴۵٪ تخفیف
                </span>
              </button>
            </div>
            
            <span className="text-[9px] text-neutral-400 font-bold flex items-center gap-1 px-1">
              <Info className="w-3 h-3 text-[#bef264] shrink-0" />
              فعال‌سازی هوشمند اشتراک بلافاصله پس از سفارش
            </span>
          </div>

          {/* D. Plan Cards Grid in one row side-by-side (Separated 3D Section) */}
          <div className="p-3.5 rounded-2xl bg-[#090909]/70 border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.95),_inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col gap-3.5 select-none hover:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between border-r-2 border-[#bef264] pr-2">
              <h4 className="text-xs font-black text-white">انتخاب پلن و خرید مستقیم</h4>
              <span className="text-[9px] text-neutral-400">۳ سطح عملکردی</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 w-full">
              {PLANS.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isYearly={isYearly}
                  onSelect={handleSelectPlanForCheckout}
                  isFocused={highlightedPlanId === plan.id}
                  onHover={handleHoverPlan}
                  highlightedPlanId={highlightedPlanId}
                />
              ))}
            </div>
          </div>

          {/* E. Detailed Comparison Table (Separated 3D Section) */}
          <div className="p-3.5 rounded-2xl bg-[#090909]/70 border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.95),_inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col gap-3.5 hover:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between border-r-2 border-[#f43f5e] pr-2 select-none">
              <h4 className="text-xs font-black text-white">جدول تخصصی مقایسه دسترسی‌ها</h4>
              <span className="text-[9px] text-neutral-400">تفکیک امکانات سطوح رباتیک</span>
            </div>
            
            <ComparisonTable 
              onSelectPlan={handleSelectPlanForCheckout}
              highlightedPlanId={highlightedPlanId}
              onHoverPlan={handleHoverPlan}
            />
          </div>

        </div>
      </div>

      {/* 4. Checkout Simulation Modal overlay */}
      {selectedPlanForCheckout && (
        <CheckoutModal 
          plan={selectedPlanForCheckout}
          isYearly={isYearly}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}
    </div>
  );
}
