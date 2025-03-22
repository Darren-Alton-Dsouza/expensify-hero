
import React, { useState } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { AlertIcon, CheckIcon, FileIcon, CalendarIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const ExpenseReview: React.FC = () => {
  const [acceptedSuggestions, setAcceptedSuggestions] = useState<string[]>([]);
  
  const expenseData = {
    merchantName: 'Coffee Shop',
    date: '2023-05-15',
    amount: '$24.50',
    category: 'Meals & Entertainment',
    notes: '',
    receipt: '/placeholder.svg'
  };
  
  const suggestions = [
    {
      id: 'category',
      field: 'Category',
      currentValue: 'Uncategorized',
      suggestedValue: 'Meals & Entertainment',
      confidence: 95
    },
    {
      id: 'amount',
      field: 'Amount',
      currentValue: '$24.00',
      suggestedValue: '$24.50',
      confidence: 98
    }
  ];
  
  const handleAcceptSuggestion = (id: string) => {
    if (!acceptedSuggestions.includes(id)) {
      setAcceptedSuggestions([...acceptedSuggestions, id]);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Review Expense
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        AI has analyzed your receipt. Please verify the information below.
      </p>
      
      <div className="space-y-6">
        <BlurContainer className="p-5 animate-slide-up">
          <h3 className="font-medium text-expensa-black mb-4 flex items-center gap-2">
            <CheckIcon className="text-expensa-success" />
            Extracted Information
          </h3>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="text-xs font-medium text-expensa-gray-dark block mb-1">
                Merchant
              </label>
              <input 
                type="text" 
                value={expenseData.merchantName} 
                className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300"
              />
            </div>
            
            <div>
              <label className="text-xs font-medium text-expensa-gray-dark block mb-1">
                Date
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  value={expenseData.date} 
                  className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300"
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-expensa-gray-dark" />
              </div>
            </div>
            
            <div>
              <label className="text-xs font-medium text-expensa-gray-dark block mb-1">
                Amount
              </label>
              <input 
                type="text" 
                value={acceptedSuggestions.includes('amount') ? suggestions[1].suggestedValue : suggestions[1].currentValue} 
                className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300"
              />
            </div>
            
            <div>
              <label className="text-xs font-medium text-expensa-gray-dark block mb-1">
                Category
              </label>
              <select 
                value={acceptedSuggestions.includes('category') ? suggestions[0].suggestedValue : suggestions[0].currentValue} 
                className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300"
              >
                <option value="Uncategorized">Uncategorized</option>
                <option value="Meals & Entertainment">Meals & Entertainment</option>
                <option value="Travel">Travel</option>
                <option value="Office Supplies">Office Supplies</option>
              </select>
            </div>
            
            <div className="col-span-2">
              <label className="text-xs font-medium text-expensa-gray-dark block mb-1">
                Notes
              </label>
              <textarea 
                placeholder="Add any additional details here..." 
                className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300 min-h-[80px]"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <div className="border border-expensa-gray-medium rounded-lg p-2 w-32 h-40 flex items-center justify-center">
              <FileIcon size={32} className="text-expensa-gray-dark" />
            </div>
          </div>
        </BlurContainer>
        
        <BlurContainer className="p-5 animate-slide-up delay-150">
          <h3 className="font-medium text-expensa-black mb-4 flex items-center gap-2">
            <AlertIcon className="text-expensa-warning" />
            AI Suggestions
          </h3>
          
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <div 
                key={suggestion.id}
                className={cn(
                  "p-3 rounded-lg border transition-all duration-300",
                  acceptedSuggestions.includes(suggestion.id)
                    ? "border-expensa-success bg-expensa-success/5"
                    : "border-expensa-warning bg-expensa-warning/5"
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-expensa-black">
                      Update {suggestion.field}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      <span className="text-expensa-gray-dark line-through">{suggestion.currentValue}</span>
                      <span className="text-expensa-black font-medium">{suggestion.suggestedValue}</span>
                      <span className="text-xs text-expensa-gray-dark">{suggestion.confidence}% confidence</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAcceptSuggestion(suggestion.id)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",
                      acceptedSuggestions.includes(suggestion.id)
                        ? "bg-expensa-success text-white"
                        : "bg-white border border-expensa-warning text-expensa-warning hover:bg-expensa-warning hover:text-white"
                    )}
                  >
                    {acceptedSuggestions.includes(suggestion.id) ? 'Accepted' : 'Accept'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </BlurContainer>
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <button className="py-2.5 px-4 rounded-lg border border-expensa-gray-medium text-expensa-gray-dark hover:bg-expensa-gray transition-all duration-300">
          Cancel
        </button>
        <button className="py-2.5 px-4 rounded-lg bg-expensa-blue text-white hover:bg-expensa-blue-dark shadow-button hover:shadow-button-hover transition-all duration-300">
          Submit Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseReview;
