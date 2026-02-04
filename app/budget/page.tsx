'use client';

import { useState } from 'react';
import Link from 'next/link';
import budgetData from '@/data/budget.json';

// Format currency
const formatCurrency = (amount: number, decimals = 0) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

// Format percentage
const formatPercent = (value: number) => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export default function BudgetPage() {
  const [homeValue, setHomeValue] = useState(440000);
  const { cityBudget, taxRates, sources } = budgetData;

  // Calculate taxes based on home value
  const calculateTax = (rate: number, value: number) => {
    return (rate / 100) * value;
  };

  const currentMunicipalTax = calculateTax(taxRates.current.municipal, homeValue);
  const proposedMunicipalTax = calculateTax(taxRates.proposed.municipal, homeValue);
  const municipalDifference = proposedMunicipalTax - currentMunicipalTax;

  const currentTotalTax = calculateTax(taxRates.current.totalHomestead, homeValue);
  const proposedTotalTax = calculateTax(taxRates.proposed.totalHomestead, homeValue);
  const totalDifference = proposedTotalTax - currentTotalTax;

  // Calculate max for bar chart
  const maxBreakdown = Math.max(...cityBudget.breakdown.map(b => b.amount));

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Voter Guide
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
              Article 2
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            FY2027 City Budget
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-sage-100 text-sm">Total Budget</p>
              <p className="font-display font-bold text-2xl">{formatCurrency(cityBudget.total)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-sage-100 text-sm">General Fund</p>
              <p className="font-display font-bold text-2xl">{formatCurrency(cityBudget.generalFund)}</p>
            </div>
            <div className="bg-terracotta-500/80 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-terracotta-100 text-sm">Change from Last Year</p>
              <p className="font-display font-bold text-2xl">{formatPercent(cityBudget.percentIncrease)}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tax Calculator */}
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
            <label className="block text-warmgray-700 font-medium mb-2">
              Your Home Value
            </label>
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
            {/* Municipal Tax (City Only) */}
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

            {/* Total Tax (City + Education) */}
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

        {/* Where Your Money Goes */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            Where Your Money Goes
          </h2>
          <p className="text-warmgray-600 mb-6">
            General Fund breakdown by department ({formatCurrency(cityBudget.generalFund)} total)
          </p>

          <div className="space-y-4">
            {cityBudget.breakdown.map((item, index) => (
              <div key={item.category}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-warmgray-700">{item.category}</span>
                  <span className="text-warmgray-600">{formatCurrency(item.amount)}</span>
                </div>
                <div className="h-4 bg-warmgray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      index % 2 === 0 ? 'bg-sage-400' : 'bg-sage-500'
                    }`}
                    style={{ width: `${(item.amount / maxBreakdown) * 100}%` }}
                  />
                </div>
                <p className="text-warmgray-400 text-sm mt-1">{item.percentOfGeneral}% of general fund</p>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Tax Rates */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            Tax Rate History
          </h2>
          <p className="text-warmgray-600 mb-6">
            How municipal tax rates have changed over the past 5 years (per $100 of property value)
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-warmgray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-warmgray-700">Year</th>
                  <th className="text-right py-2 px-4 font-semibold text-warmgray-700">Municipal</th>
                  <th className="text-right py-2 px-4 font-semibold text-warmgray-700">Education</th>
                  <th className="text-right py-2 pl-4 font-semibold text-warmgray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sage-200 bg-sage-50">
                  <td className="py-2 pr-4 font-medium text-sage-700">2026-27 (Estimated)</td>
                  <td className="text-right py-2 px-4 font-medium text-sage-700">${taxRates.proposed.municipal.toFixed(4)}</td>
                  <td className="text-right py-2 px-4 font-medium text-sage-700">${taxRates.proposed.homesteadEducation.toFixed(4)}</td>
                  <td className="text-right py-2 pl-4 font-bold text-sage-700">${taxRates.proposed.totalHomestead.toFixed(4)}</td>
                </tr>
                {taxRates.historical.map((rate) => (
                  <tr key={rate.year} className="border-b border-warmgray-100">
                    <td className="py-2 pr-4 text-warmgray-700">{rate.year}</td>
                    <td className="text-right py-2 px-4 text-warmgray-600">${rate.municipal.toFixed(4)}</td>
                    <td className="text-right py-2 px-4 text-warmgray-600">${rate.homesteadEd.toFixed(4)}</td>
                    <td className="text-right py-2 pl-4 font-medium text-warmgray-700">${rate.totalHomestead.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Utility Rate Changes */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">
            Utility Rate Changes
          </h2>
          <p className="text-warmgray-600 mb-4">
            {cityBudget.enterpriseFunds.note}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {cityBudget.enterpriseFunds.funds.map((fund) => (
              <div key={fund.name} className="bg-cream-100 rounded-xl p-4 text-center">
                <p className="text-warmgray-600 text-sm mb-1">{fund.name}</p>
                <p className={`font-bold text-lg ${fund.rateIncrease > 0 ? 'text-terracotta-600' : 'text-sage-600'}`}>
                  {fund.rateIncrease > 0 ? '+' : ''}{fund.rateIncrease}%
                </p>
              </div>
            ))}
          </div>

          <p className="text-warmgray-500 text-sm">
            Estimated annual increase for most residents: ~${cityBudget.enterpriseFunds.estimatedAnnualIncrease}
            (or ~${cityBudget.enterpriseFunds.minimumAccountIncrease} for accounts paying minimum fees)
          </p>
        </div>

        {/* School Budget & Education Tax */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 border-2 border-terracotta-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-terracotta-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">The Other Half of Your Tax Bill</h2>
              <p className="text-warmgray-500 text-sm">School budget drives the majority of property taxes</p>
            </div>
          </div>

          <div className="bg-terracotta-50 rounded-xl p-4 mb-4">
            <p className="text-warmgray-700 text-sm leading-relaxed">
              The city budget (above) is only <strong>part</strong> of your property tax bill. Education taxes typically make up
              about <strong>70-75%</strong> of the total. The school district&apos;s FY2027 budget is a separate ballot question on March 3.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-cream-100 rounded-xl p-4 text-center">
              <p className="text-warmgray-500 text-sm mb-1">School Budget</p>
              <p className="font-display font-bold text-2xl text-warmgray-800">$73.9M</p>
              <p className="text-warmgray-500 text-xs mt-1">up 3.4% from $71.5M</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-4 text-center">
              <p className="text-warmgray-500 text-sm mb-1">Education Tax Impact</p>
              <p className="font-display font-bold text-2xl text-terracotta-600">+8.76%</p>
              <p className="text-warmgray-500 text-xs mt-1">even 0% spending = +4.24%</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-4 text-center">
              <p className="text-warmgray-500 text-sm mb-1">Board Vote</p>
              <p className="font-display font-bold text-2xl text-warmgray-800">4-3</p>
              <p className="text-warmgray-500 text-xs mt-1">not unanimous</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <h3 className="font-semibold text-warmgray-700">Why are education taxes rising even with modest spending?</h3>
            <p className="text-warmgray-600 text-sm leading-relaxed">
              Two factors outside the district&apos;s control are pushing taxes up regardless of spending decisions:
              a <strong>3.5% drop in equalized pupil weights</strong> (from Act 127 changes) and
              a <strong>4.7% drop in Common Level of Appraisal (CLA)</strong>, which adjusts tax rates based on
              how assessed property values compare to market values. Together, these mean residents would face
              a ~4.24% education tax increase even with zero new spending.
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <h3 className="font-semibold text-warmgray-700">Where the school money goes</h3>
            <p className="text-warmgray-600 text-sm leading-relaxed">
              About <strong>75% of the school budget</strong> goes to employee salaries and benefits.
              Salaries are increasing 8.4% and benefits 6.2%. To partially offset costs, the district
              is cutting ~$1.9M in central office positions (Communications Director, Technology Director,
              one additional leadership role, and one nurse FTE).
            </p>
          </div>

          <div className="bg-warmgray-50 rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-warmgray-700 mb-2">If voters reject the school budget</h3>
            <p className="text-warmgray-600 text-sm leading-relaxed">
              The board plans to hold a revote with a level-funded (0% increase) option. That would still
              carry a ~4.24% tax increase but would require cutting 4-5 positions at the high school
              and 3-4 at the middle school.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-terracotta-50 rounded-lg px-3 py-1.5">
              <span className="text-terracotta-700 text-xs font-medium">Combined tax increase (city + school): ~7.4%</span>
            </div>
            <div className="bg-sage-50 rounded-lg px-3 py-1.5">
              <span className="text-sage-700 text-xs font-medium">City portion: ~3.3% | Education portion: ~8.76%</span>
            </div>
          </div>

          <div className="border-t border-warmgray-100 pt-3">
            <p className="text-warmgray-400 text-xs">
              Sources:{' '}
              <a href="https://www.vtcng.com/otherpapersbvt/community/education/south-burlington-school-board-approves-spending-increase/article_f10c6a32-1524-4b76-9725-51ff0c6d90a0.html" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">The Other Paper</a>
              {' '}&middot;{' '}
              <a href="https://www.sbschools.net/article/2528222" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">SB School District</a>
            </p>
          </div>
        </div>

        {/* Sources & Fine Print */}
        <div className="bg-warmgray-50 rounded-2xl p-6 mb-8">
          <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 hover:underline text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Also on Ballot */}
        <div className="bg-white rounded-2xl shadow-soft p-6">
          <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">
            Also on Your Ballot
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/fire-station-bond"
              className="flex items-center gap-3 p-4 bg-terracotta-50 rounded-xl hover:bg-terracotta-100 transition-colors"
            >
              <div className="w-10 h-10 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-warmgray-800">Fire Station Bond</p>
                <p className="text-sm text-warmgray-500">$2.3M addition - Article 3</p>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl hover:bg-sage-100 transition-colors"
            >
              <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-warmgray-800">City Council Race</p>
                <p className="text-sm text-warmgray-500">2 candidates - contested</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warmgray-100 border-t border-warmgray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-warmgray-500 text-sm">
            South Burlington Voter Guide 2026 &middot; A nonpartisan community resource
          </p>
        </div>
      </footer>
    </main>
  );
}
