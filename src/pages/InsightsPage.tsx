
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import BlurContainer from '@/components/ui/BlurContainer';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LockIcon, StarIcon } from '@/assets/icons';

const InsightsPage: React.FC = () => {
  const [premiumDialogOpen, setPremiumDialogOpen] = useState(false);
  
  useEffect(() => {
    // Show the premium feature dialog when the page loads
    const timer = setTimeout(() => {
      setPremiumDialogOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="px-4 sm:px-6 pt-24 pb-24 animate-fade-in">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
            Expense Insights
          </h2>
          <p className="text-expensa-gray-dark mb-6 animate-slide-down">
            Track your spending patterns and optimize your expenses
          </p>
          
          <BlurContainer className="p-6 mb-6 animate-slide-up relative overflow-hidden">
            {/* Premium feature overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white flex flex-col items-center justify-center z-10">
              <div className="w-16 h-16 rounded-full bg-expensa-warning/10 flex items-center justify-center mb-4">
                <LockIcon size={32} className="text-expensa-warning" />
              </div>
              <h3 className="text-xl font-semibold text-expensa-black mb-2">Premium Feature</h3>
              <p className="text-expensa-gray-dark text-center max-w-xs mb-4">
                Expense insights are available exclusively for premium users
              </p>
              <button 
                onClick={() => setPremiumDialogOpen(true)}
                className="px-5 py-2.5 bg-expensa-blue text-white rounded-lg shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                Learn More
              </button>
            </div>
            
            <h3 className="font-medium text-expensa-black mb-4">Monthly Expense Trends</h3>
            <div className="h-64 flex items-center justify-center">
              <div className="w-full h-36 bg-expensa-gray/30 rounded-lg flex items-center justify-center">
                <p className="text-expensa-gray-dark">Chart data will appear here</p>
              </div>
            </div>
          </BlurContainer>

          <BlurContainer className="p-6 animate-slide-up delay-150 relative overflow-hidden">
            {/* Premium feature overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white flex flex-col items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-expensa-warning/10 flex items-center justify-center mb-2">
                <LockIcon size={24} className="text-expensa-warning" />
              </div>
              <h3 className="text-lg font-semibold text-expensa-black mb-1">Premium Analysis</h3>
              <p className="text-expensa-gray-dark text-center text-sm max-w-xs">
                Upgrade to see detailed expense categories
              </p>
            </div>
            
            <h3 className="font-medium text-expensa-black mb-4">Expense Categories</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-expensa-gray-dark">Meals & Entertainment</span>
                <span className="font-medium text-expensa-black">42%</span>
              </div>
              <div className="w-full bg-expensa-gray-medium/20 rounded-full h-2">
                <div className="bg-expensa-blue h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-expensa-gray-dark">Travel</span>
                <span className="font-medium text-expensa-black">28%</span>
              </div>
              <div className="w-full bg-expensa-gray-medium/20 rounded-full h-2">
                <div className="bg-expensa-warning h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-expensa-gray-dark">Office Supplies</span>
                <span className="font-medium text-expensa-black">15%</span>
              </div>
              <div className="w-full bg-expensa-gray-medium/20 rounded-full h-2">
                <div className="bg-expensa-success h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-expensa-gray-dark">Other</span>
                <span className="font-medium text-expensa-black">15%</span>
              </div>
              <div className="w-full bg-expensa-gray-medium/20 rounded-full h-2">
                <div className="bg-expensa-gray-dark h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </BlurContainer>
        </div>
      </main>
      <FooterNav />
      
      <Dialog open={premiumDialogOpen} onOpenChange={setPremiumDialogOpen}>
        <DialogContent className="bg-white p-6 max-w-md">
          <div className="text-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-expensa-blue to-indigo-500 mx-auto flex items-center justify-center mb-3">
              <StarIcon size={32} className="text-white" />
            </div>
            <DialogTitle className="text-xl mb-2">Upgrade to Expensa Premium</DialogTitle>
            <DialogDescription className="text-expensa-gray-dark">
              This is a prototype version of our product. Advanced analytics and reporting features 
              will be available to full-time customers.
            </DialogDescription>
          </div>
          
          <div className="space-y-3 my-5">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-expensa-blue/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-expensa-blue text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-expensa-black">Advanced Analytics</h4>
                <p className="text-sm text-expensa-gray-dark">Track spending patterns across categories and time periods</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-expensa-blue/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-expensa-blue text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-expensa-black">Custom Reports</h4>
                <p className="text-sm text-expensa-gray-dark">Generate detailed expense reports for accounting and tax purposes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-expensa-blue/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-expensa-blue text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-expensa-black">Budget Forecasting</h4>
                <p className="text-sm text-expensa-gray-dark">Predict future expenses based on historical data</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => setPremiumDialogOpen(false)}
              className="flex-1 py-2.5 border border-expensa-gray-medium text-expensa-gray-dark rounded-lg hover:bg-expensa-gray/10 transition-colors"
            >
              Maybe Later
            </button>
            <button 
              onClick={() => setPremiumDialogOpen(false)}
              className="flex-1 py-2.5 bg-expensa-blue text-white rounded-lg shadow-button hover:bg-expensa-blue-dark transition-colors"
            >
              I'm Interested
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InsightsPage;
