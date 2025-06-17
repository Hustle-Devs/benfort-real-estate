
import { useState } from 'react';

interface AccountSizeSelectorProps {
  selectedAccountSize: number;
  onAccountSizeChange: (size: number | string) => void;
  customAmount: string;
  onCustomAmountChange: (amount: string) => void;
}

export const AccountSizeSelector = ({ 
  selectedAccountSize, 
  onAccountSizeChange,
  customAmount,
  onCustomAmountChange
}: AccountSizeSelectorProps) => {
  const accountSizes = [
    { value: 500, label: '£500' },
    { value: 1000, label: '£1,000' },
    { value: 2500, label: '£2,500' },
    { value: 5000, label: '£5,000' },
    { value: 10000, label: '£10,000' },
    { value: 'custom', label: 'Enter Amount' },
  ];

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    onCustomAmountChange(value);
  };

  return (
    <div className="flex flex-col space-y-4">
      {accountSizes.map((size) => (
        <div 
          key={size.value}
          className="relative"
        >
          <div 
            onClick={() => onAccountSizeChange(size.value)}
            className={`
              flex justify-between items-center px-6 py-4 rounded-full cursor-pointer
              ${(size.value === selectedAccountSize || 
                 (size.value === 'custom' && customAmount !== '')) 
                ? 'bg-blue-500 text-white' 
                : 'bg-zinc-900 text-white'}
            `}
          >
            <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full">Account Size</span>
            
            {size.value === 'custom' && customAmount ? (
              <span>£{parseFloat(customAmount).toLocaleString()}</span>
            ) : (
              <span>{size.label}</span>
            )}
            
            <div 
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
              ${(size.value === selectedAccountSize || 
                 (size.value === 'custom' && customAmount !== '')) 
                ? 'border-white bg-blue-500' 
                : 'border-white bg-transparent'}`}
            >
              {(size.value === selectedAccountSize || 
                (size.value === 'custom' && customAmount !== '')) && (
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              )}
            </div>
          </div>

          {size.value === 'custom' && customAmount !== '' && (
            <div className="mt-2 px-6">
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomInputChange}
                placeholder="Enter amount"
                className="w-full bg-transparent border-b border-gray-600 pb-2 text-white outline-none"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
