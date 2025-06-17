
import { useState, useEffect } from 'react';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <InvestmentCalculator />
    </div>
  );
};

export default Index;
