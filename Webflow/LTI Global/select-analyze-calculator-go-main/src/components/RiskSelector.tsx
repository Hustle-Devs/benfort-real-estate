
import { useState } from 'react';

interface RiskSelectorProps {
  selectedRisk: string;
  onRiskChange: (risk: string) => void;
}

export const RiskSelector = ({ selectedRisk, onRiskChange }: RiskSelectorProps) => {
  const riskOptions = [
    { id: 'low', label: 'Low Risk' },
    { id: 'moderate', label: 'Moderate Risk' },
    { id: 'high', label: 'High Risk' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {riskOptions.map((option) => (
        <div 
          key={option.id}
          onClick={() => onRiskChange(option.id)}
          className={`
            flex justify-between items-center px-6 py-4 rounded-full cursor-pointer 
            ${selectedRisk === option.id ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-white'}
          `}
        >
          <span className="font-medium">{option.label}</span>
          <div 
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${selectedRisk === option.id 
              ? 'border-white bg-blue-500' 
              : 'border-white bg-transparent'}`}
          >
            {selectedRisk === option.id && (
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-4 bg-zinc-900 p-5 rounded-lg text-gray-400 text-sm">
        <p>
          Depending on the selected risk type, members can achieve varying target goals. We recommend 
          contacting us for a tailored risk plan and expert guidance on the best strategies to align with your 
          financial objectives.
        </p>
      </div>
    </div>
  );
};
