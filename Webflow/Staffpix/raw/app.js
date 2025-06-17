// Helper: format number with commas
function formatNumber(num) {
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // Elements
    const form = document.getElementById('calculator-form');
    const resultsDiv = document.getElementById('results');
    const currentCostEl = document.getElementById('currentCost');
    const offshoreCostEl = document.getElementById('offshoreCost');
    const annualSavingsEl = document.getElementById('annualSavings');
    const savingsPctEl = document.getElementById('savingsPct');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    // Input fields
    const salaryInput = document.getElementById('recruiterSalary');
    const countInput = document.getElementById('recruitersCount');
    const agencyInput = document.getElementById('agencySpend');
    
    // Initialize defaults
    salaryInput.value = "150,000";
    countInput.value = 1;
    agencyInput.value = "100,000";
    
    calculateBtn.addEventListener('click', () => {
    const salary = Number(salaryInput.value.replace(/,/g, ''));
    const count = Number(countInput.value);
    const agency = Number(agencyInput.value.replace(/,/g, ''));
    
    if (salary <= 0 || count <= 0) {
    alert('Please enter positive values for all fields.');
    return;
    }
    
    // Calculations
    const benefitsMultiplier = 1.3;
    const currentSalaryCost = salary * count * benefitsMultiplier;
    const currentTotalCost = currentSalaryCost + agency;
    const offshoreCostPerRecruiter = 36000 * 1.1;
    const offshoreTotalCost = offshoreCostPerRecruiter * count;
    const annualSavings = currentTotalCost - offshoreTotalCost;
    const savingsPercentage = (annualSavings / currentTotalCost) * 100;
    
    // Render results
    currentCostEl.textContent = "$" + formatNumber(currentTotalCost);
    offshoreCostEl.textContent = "$" + formatNumber(offshoreTotalCost);
    annualSavingsEl.textContent = "$" + formatNumber(annualSavings);
    savingsPctEl.textContent = savingsPercentage.toFixed(0);
    
    form.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    });
    
    resetBtn.addEventListener('click', () => {
    form.classList.remove('hidden');
    resultsDiv.classList.add('hidden');
    });