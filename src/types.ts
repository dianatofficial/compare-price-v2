/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ProductTier {
  STARTER = "STARTER",
  PRO = "PRO",
  ULTRA = "ULTRA"
}

export type FeatureValue = boolean | string;

export interface PlanDetail {
  id: ProductTier;
  name: string;
  badge: string;
  priceMonthly: string; // formatted price in IRR/Toman or generic unit
  priceYearly: string;
  priceDiscount: string; // discount percentage
  description: string;
  accentColor: string; // hex
  accentTextColor: string; // css class
  borderColor: string; // css class
  glowColor: string; // css shadow style/class
  btnBgColor: string; // css class
  btnTextColor: string; // css class
  recommeded?: boolean;
}

export interface ComparisonRow {
  id: string;
  title: string;
  subtitle?: string; // Standard & clear explanation
  category: "markets" | "timeframes" | "biases" | "outputs";
  categoryLabel: string;
  [ProductTier.STARTER]: boolean;
  [ProductTier.PRO]: boolean;
  [ProductTier.ULTRA]: boolean;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    points: { [key in ProductTier]: number };
  }[];
}
