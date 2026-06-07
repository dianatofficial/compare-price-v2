import React, { useState } from "react";
import { COMPARISON_ROWS, PLANS } from "../data";
import { ComparisonRow, ProductTier, PlanDetail } from "../types";
import { Check, X, Layers } from "lucide-react";

interface ComparisonTableProps {
  onSelectPlan: (plan: PlanDetail) => void;
  highlightedPlanId: string | null;
  onHoverPlan: (id: string | null) => void;
}

type CategoryFilter = "all" | "markets" | "timeframes" | "biases" | "outputs";

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  onSelectPlan,
  highlightedPlanId,
  onHoverPlan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const categories = [
    { id: "all", label: "همه" },
    { id: "markets", label: "بازارها" },
    { id: "timeframes", label: "تایم‌فریم" },
    { id: "biases", label: "استراتژی" },
    { id: "outputs", label: "خروجی‌ها" }
  ];

  const filteredRows = selectedCategory === "all" 
    ? COMPARISON_ROWS 
    : COMPARISON_ROWS.filter(row => row.category === selectedCategory);

  const renderCheckIcon = (tier: ProductTier, value: boolean) => {
    if (!value) {
      return (
        <div className="flex justify-center items-center">
          <div className="p-1 rounded-full bg-red-500/10 border border-red-500/25 shadow-inner">
            <X className="w-4 h-4 text-red-500 stroke-[3.5]" />
          </div>
        </div>
      );
    }

    let checkColor = "";
    if (tier === ProductTier.STARTER) {
      checkColor = "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]";
    } else if (tier === ProductTier.PRO) {
      checkColor = "text-[#bef264] bg-[#bef264]/10 shadow-[0_0_10px_rgba(190,242,100,0.2)]";
    } else {
      checkColor = "text-[#f43f5e] bg-[#f43f5e]/10 shadow-[0_0_10px_rgba(244,63,94,0.25)]";
    }

    return (
      <div className="flex justify-center items-center">
        <div className={`p-1 rounded-full ${checkColor}`}>
          <Check className="w-4.5 h-4.5 stroke-[3]" />
        </div>
      </div>
    );
  };

  return (
    <div id="comparison-table-section" className="w-full flex flex-col gap-4">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 border-b border-white/5 rtl:space-x-reverse scroll-smooth w-full select-none">
        <div className="flex items-center gap-1 text-[10px] text-neutral-500 pl-2 shrink-0 font-bold">
          <Layers className="w-3.5 h-3.5 text-[#bef264]" />
          <span>دسته‌بندی:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
              className={`px-2.5 py-1 text-[11px] font-black rounded-lg shrink-0 transition-all duration-200 cursor-pointer border active:scale-95
                ${selectedCategory === cat.id 
                  ? "bg-white border-white text-neutral-950 shadow-[0_4px_12px_rgba(255,255,255,0.15)]" 
                  : "bg-neutral-950/80 border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Layout */}
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 select-none relative shadow-[0_20px_50px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(255,255,255,0.03),_inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#080808]/80">
        <div className="w-full overflow-x-auto no-scrollbar md:overflow-x-visible">
          <table className="w-full min-w-[340px] text-right border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-neutral-950 border-b border-white/10 select-none">
                <th className="py-4.5 px-3.5 text-xs font-black text-neutral-400 min-w-[120px] md:min-w-[160px] border-l border-white/5">
                  ویژگی تخصصی ربات
                </th>
                
                {/* Starter Header */}
                <th 
                  className={`py-4 text-center text-[10px] font-black tracking-wider cursor-pointer transition-colors duration-300 w-[22%] border-l border-white/5
                    ${highlightedPlanId === ProductTier.STARTER ? "bg-white/10 text-white" : "text-neutral-400"}`}
                  onMouseEnter={() => onHoverPlan(ProductTier.STARTER)}
                  onMouseLeave={() => onHoverPlan(null)}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-extrabold uppercase text-[9px]">Starter</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white block shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
                  </div>
                </th>

                {/* PRO Header */}
                <th 
                  className={`py-4 text-center text-[10px] font-black tracking-wider cursor-pointer transition-colors duration-300 w-[22%] border-l border-white/5
                    ${highlightedPlanId === ProductTier.PRO ? "bg-[#bef264]/10 text-[#bef264]" : "text-neutral-400"}`}
                  onMouseEnter={() => onHoverPlan(ProductTier.PRO)}
                  onMouseLeave={() => onHoverPlan(null)}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-extrabold uppercase text-[#bef264] text-[9px]">PRO</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] block shadow-[0_0_8px_rgba(190,242,100,0.8)]" />
                  </div>
                </th>

                {/* ULTRA Header */}
                <th 
                  className={`py-4 text-center text-[10px] font-black tracking-wider cursor-pointer transition-colors duration-300 w-[22%]
                    ${highlightedPlanId === ProductTier.ULTRA ? "bg-[#f43f5e]/10 text-[#f43f5e]" : "text-neutral-400"}`}
                  onMouseEnter={() => onHoverPlan(ProductTier.ULTRA)}
                  onMouseLeave={() => onHoverPlan(null)}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-extrabold uppercase text-[#f43f5e] text-[9px]">ULTRA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] block shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse" />
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/10 text-[11px]">
              {filteredRows.map((row, index) => {
                return (
                  <tr 
                    key={row.id}
                    className={`group transition-colors duration-150 select-none
                      ${index % 2 === 0 ? "bg-neutral-950/20" : "bg-neutral-900/40"}
                      hover:bg-neutral-800/40`}
                  >
                    {/* Name of the feature */}
                    <td className="py-3.5 px-3 font-medium text-white/90 border-l border-white/5">
                      <div className="flex items-center gap-1.5 max-w-xs">
                        <span className="text-xs font-bold text-neutral-200 group-hover:text-white transition-colors">
                          {row.title}
                        </span>
                      </div>
                    </td>

                    {/* Starter Value */}
                    <td 
                      className={`py-3 text-center transition-colors duration-150 border-l border-white/5
                        ${highlightedPlanId === ProductTier.STARTER ? "bg-white/5" : ""}
                        ${!row[ProductTier.STARTER] ? "opacity-50" : ""}`}
                    >
                      {renderCheckIcon(ProductTier.STARTER, row[ProductTier.STARTER])}
                    </td>

                    {/* PRO Value */}
                    <td 
                      className={`py-3 text-center transition-colors duration-150 border-l border-white/5
                        ${highlightedPlanId === ProductTier.PRO ? "bg-[#bef264]/5" : ""}
                        ${!row[ProductTier.PRO] ? "opacity-50" : ""}`}
                    >
                      {renderCheckIcon(ProductTier.PRO, row[ProductTier.PRO])}
                    </td>

                    {/* ULTRA Value */}
                    <td 
                      className={`py-3 text-center transition-colors duration-150
                        ${highlightedPlanId === ProductTier.ULTRA ? "bg-[#f43f5e]/5" : ""}
                        ${!row[ProductTier.ULTRA] ? "opacity-50" : ""}`}
                    >
                      {renderCheckIcon(ProductTier.ULTRA, row[ProductTier.ULTRA])}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Floating Quick Action Row in Table Footer */}
        <div className="bg-neutral-950/95 py-3.5 px-3 border-t border-white/10">
          <div className="grid grid-cols-3 gap-2 w-full font-bold">
            {PLANS.map((plan) => (
              <button
                key={plan.id}
                id={`table-footer-purchase-${plan.id.toLowerCase()}`}
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-2 px-1.5 rounded-xl text-center cursor-pointer transition-all duration-300 active:scale-95 border border-white/15 shadow-[0_4px_10px_rgba(0,0,0,0.5),_inset_0_1px_0px_rgba(255,255,255,0.1)] hover:brightness-110 active:brightness-95
                  ${plan.id === ProductTier.STARTER ? "bg-neutral-900 border-white/20 text-white" : ""}
                  ${plan.id === ProductTier.PRO ? "bg-[#bef264] border-[#bef264]/20 text-neutral-950" : ""}
                  ${plan.id === ProductTier.ULTRA ? "bg-[#f43f5e] border-[#f43f5e]/20 text-white" : ""}
                `}
              >
                <div className="flex flex-col items-center justify-center leading-tight gap-0.5 select-none">
                  <span className="text-[9px] font-black opacity-80 tracking-wide">خرید اشتراک</span>
                  <span className="text-[11px] font-black tracking-wider uppercase">{plan.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
