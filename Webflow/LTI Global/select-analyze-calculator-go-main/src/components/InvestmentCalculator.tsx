
import { useState, useEffect } from 'react';
import { RiskSelector } from './RiskSelector';
import { AccountSizeSelector } from './AccountSizeSelector';
import { ResultsDisplay } from './ResultsDisplay';
import { CalculatorData } from '@/types';

export const InvestmentCalculator = () => {
  const [selectedRisk, setSelectedRisk] = useState('low');
  const [selectedAccountSize, setSelectedAccountSize] = useState(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    averageWinRate: '84%',
    percentageReturn: '8%-15%',
    maxOverallDrawdown: '10%',
    averageTradesPerMonth: 140,
    newsTrading: 'Yes',
    targetedMonthlyProfits: 1150.00,
    compoundYearlyReturn: 5350.25
  });

  // Update calculator data based on risk and account size
  useEffect(() => {
    const calculateData = () => {
      let data: CalculatorData = {
        averageWinRate: '84%',
        percentageReturn: '8%-15%',
        maxOverallDrawdown: '10%',
        averageTradesPerMonth: 140,
        newsTrading: 'Yes',
        targetedMonthlyProfits: 0,
        compoundYearlyReturn: 0
      };
      
      // Base monthly return rate depends on risk level
      let monthlyReturnRate = 0;
      switch (selectedRisk) {
        case 'low':
          monthlyReturnRate = 0.08;
          data.percentageReturn = '8%-15%';
          break;
        case 'moderate':
          monthlyReturnRate = 0.12;
          data.percentageReturn = '12%-20%';
          break;
        case 'high':
          monthlyReturnRate = 0.15;
          data.percentageReturn = '15%-25%';
          break;
      }
      
      // Calculate targeted monthly profits based on account size and risk
      const accountSize = customAmount ? parseFloat(customAmount) : selectedAccountSize;
      data.targetedMonthlyProfits = Number((accountSize * monthlyReturnRate).toFixed(2));
      
      // Calculate compound yearly return (simplified)
      data.compoundYearlyReturn = Number((data.targetedMonthlyProfits * 12 * (1 + monthlyReturnRate/2)).toFixed(2));
      
      setCalculatorData(data);
    };
    
    calculateData();
  }, [selectedRisk, selectedAccountSize, customAmount]);

  const handleRiskChange = (risk: string) => {
    setSelectedRisk(risk);
  };

  const handleAccountSizeChange = (size: number | string) => {
    if (size === 'custom') {
      setCustomAmount('');
      setSelectedAccountSize(0);
    } else {
      setSelectedAccountSize(size as number);
      setCustomAmount('');
    }
  };

  const handleCustomAmountChange = (amount: string) => {
    setCustomAmount(amount);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
      <div className="flex-1">
        <RiskSelector selectedRisk={selectedRisk} onRiskChange={handleRiskChange} />
      </div>
      <div className="flex-1">
        <AccountSizeSelector 
          selectedAccountSize={selectedAccountSize} 
          onAccountSizeChange={handleAccountSizeChange}
          customAmount={customAmount}
          onCustomAmountChange={handleCustomAmountChange}
        />
      </div>
      <div className="flex-1">
        <ResultsDisplay data={calculatorData} />
      </div>
    </div>
  );
};
