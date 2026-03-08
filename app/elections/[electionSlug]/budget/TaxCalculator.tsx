'use client';

import { useState } from 'react';
import type { BudgetData } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface Props {
  taxRates: BudgetData['taxRates'];
}

export default function TaxCalculator({ taxRates }: Props) {
  const [homeValue, setHomeValue] = useState(440000);

  const calculateTax = (rate: number, value: number) => (rate / 100) * value;

  const currentMunicipalTax = calculateTax(taxRates.current.municipal, homeValue);
  const proposedMunicipalTax = calculateTax(taxRates.proposed.municipal, homeValue);
  const municipalDifference = proposedMunicipalTax - currentMunicipalTax;

  const currentTotalTax = calculateTax(taxRates.current.totalHomestead, homeValue);
  const proposedTotalTax = calculateTax(taxRates.proposed.totalHomestead, homeValue);
  const totalDifference = proposedTotalTax - currentTotalTax;

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 border-2 border-sage-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-warmgray-800">Tax Calculator</h2>
          <p className="text-warmgray-500 text-sm">See what this budget means for your property taxes</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-warmgray-700 font-medium mb-2">Your Home Value</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400 font-medium">$</span>
          <input
            type="number"
            value={homeValue}
            onChange={(e) => setHomeValue(Number(e.target.value) || 0)}
            className="w-full pl-8 pr-4 py-3 text-lg font-medium border-2 border-warmgray-200 rounded-xl focus:border-sage-400 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
            placeholder="440000"
          />
        </div>
        <p className="text-warmgray-400 text-sm mt-2">
          Average South Burlington home: $440,000 | Average condo: $300,000
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-sage-50 rounded-xl p-4">
          <h3 className="font-semibold text-warmgray-700 mb-3">City Tax (Municipal Only)</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-warmgray-600">Current (FY2026)</span>
              <span className="font-medium">{formatCurrency(currentMunicipalTax, 2)}/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warmgray-600">Proposed (FY2027)</span>
              <span className="font-medium">{formatCurrency(proposedMunicipalTax, 2)}/year</span>
            </div>
            <div className="border-t border-sage-200 pt-2 flex justify-between">
              <span className="font-semibold text-warmgray-700">Difference</span>
              <span className={`font-bold ${municipalDifference > 0 ? 'text-terracotta-600' : 'text-sage-600'}`}>
                {municipalDifference >= 0 ? '+' : ''}{formatCurrency(municipalDifference, 2)}/year
              </span>
            </div>
          </div>
        </div>

        <div className="bg-terracotta-50 rounded-xl p-4">
          <h3 className="font-semibold text-warmgray-700 mb-3">Total Tax (City + Education est.)</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-warmgray-600">Current (FY2026)</span>
              <span className="font-medium">{formatCurrency(currentTotalTax, 2)}/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warmgray-600">Proposed (FY2027)</span>
              <span className="font-medium">{formatCurrency(proposedTotalTax, 2)}/year</span>
            </div>
            <div className="border-t border-terracotta-200 pt-2 flex justify-between">
              <span className="font-semibold text-warmgray-700">Difference</span>
              <span className={`font-bold ${totalDifference > 0 ? 'text-terracotta-600' : 'text-sage-600'}`}>
                {totalDifference >= 0 ? '+' : ''}{formatCurrency(totalDifference, 2)}/year
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-warmgray-400 text-xs mt-4">
        * Calculations based on homestead property tax rates. Non-homestead rates differ slightly.
        Tax rates are per $100 of assessed property value. FY2027 education rate is estimated based on
        the projected 8.76% increase; the final rate is set by the state after voters approve the school budget.
      </p>
    </div>
  );
}
