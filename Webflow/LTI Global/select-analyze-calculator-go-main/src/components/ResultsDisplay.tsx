
import { CalculatorData } from '@/types';

interface ResultsDisplayProps {
  data: CalculatorData;
}

export const ResultsDisplay = ({ data }: ResultsDisplayProps) => {
  const metrics = [
    { label: 'Average Win Rate', value: data.averageWinRate },
    { label: 'Percentage Return', value: data.percentageReturn },
    { label: 'Max Overall Drawdown', value: data.maxOverallDrawdown },
    { label: 'Average Trades Per Month', value: data.averageTradesPerMonth },
    { label: 'News Trading', value: data.newsTrading },
    { label: 'Targeted Monthly Profits', value: `£${data.targetedMonthlyProfits.toLocaleString('en-UK', {minimumFractionDigits: 2, maximumFractionDigits: 2})}` },
    { label: 'Compound Yearly Return', value: `£${data.compoundYearlyReturn.toLocaleString('en-UK', {minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
  ];

  return (
    <div className="bg-blue-500 rounded-lg p-6 text-white flex flex-col">
      {metrics.map((metric, index) => (
        <div 
          key={metric.label} 
          className={`flex justify-between items-center py-4 ${
            index < metrics.length - 1 ? 'border-b border-blue-400' : ''
          }`}
        >
          <span>{metric.label}</span>
          <span className="font-medium">{metric.value}</span>
        </div>
      ))}

      <button 
        className="mt-6 bg-blue-300 hover:bg-blue-200 transition-colors text-blue-800 font-medium py-3 px-8 rounded-full w-full"
      >
        Get Started
      </button>
    </div>
  );
};
