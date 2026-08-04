'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [hoursSaved, setHoursSaved] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);

  const monthlySavings = employees * hoursSaved * hourlyRate;
  const annualSavings = monthlySavings * 12;
  const estimatedImplementationCost = 45000;
  
  const roiPercentage = ((annualSavings - estimatedImplementationCost) / estimatedImplementationCost) * 100;
  const paybackPeriod = estimatedImplementationCost / monthlySavings;

  return (
    <div className="my-12 p-8 bg-white border border-gray-100 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sliders */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-syncopate font-bold text-gray-900 mb-2">Interactive ROI Calculator</h3>
            <p className="text-sm text-gray-500 mb-8">Estimate the financial impact of custom workflow automation.</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Team Size</label>
                <span className="text-sm font-bold text-blue-600">{employees} Employees</span>
              </div>
              <input 
                type="range" min="5" max="500" value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Hours Saved Per Employee / Month</label>
                <span className="text-sm font-bold text-blue-600">{hoursSaved} Hours</span>
              </div>
              <input 
                type="range" min="1" max="40" value={hoursSaved} 
                onChange={(e) => setHoursSaved(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Average Hourly Rate ($)</label>
                <span className="text-sm font-bold text-blue-600">${hourlyRate} / hr</span>
              </div>
              <input 
                type="range" min="10" max="150" value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center transform transition-transform duration-100 hover:scale-[1.02]">
              <div className="text-xs font-mono-caps text-gray-500 uppercase tracking-widest mb-1">Projected Annual Savings</div>
              <div className="text-4xl font-syncopate font-bold text-green-500">
                ${annualSavings.toLocaleString()}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="text-[10px] font-mono-caps text-gray-500 uppercase tracking-widest mb-1">Payback Period</div>
                <div className="text-xl font-bold text-gray-900">{paybackPeriod.toFixed(1)} Months</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="text-[10px] font-mono-caps text-gray-500 uppercase tracking-widest mb-1">1st Year ROI</div>
                <div className="text-xl font-bold text-gray-900">{roiPercentage > 0 ? '+' : ''}{roiPercentage.toFixed(0)}%</div>
              </div>
            </div>

            <div className="pt-4">
              <a href="/contact" className="block w-full py-3 bg-black text-white text-center text-sm font-bold rounded-lg hover:bg-gray-800 transition-colors">
                Request Custom Technical Audit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
