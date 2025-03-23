
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import StatusTracking from '@/components/expense/StatusTracking';

const ExpensesPage: React.FC = () => {
  // Handle any URL parameters or state passed to this page
  useEffect(() => {
    // Check if we need to auto-open a specific expense
    const expenseIdFromSearch = sessionStorage.getItem('selectedExpenseFromSearch');
    if (expenseIdFromSearch) {
      // This will be handled by the StatusTracking component
      sessionStorage.setItem('selectedExpenseId', expenseIdFromSearch);
      sessionStorage.removeItem('selectedExpenseFromSearch');
    }
  }, []);

  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="px-4 sm:px-6 pt-24 pb-24 animate-fade-in">
        <StatusTracking />
      </main>
      <FooterNav />
    </div>
  );
};

export default ExpensesPage;
