
import React from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import ExpenseSubmission from '@/components/expense/ExpenseSubmission';

const ExpenseSubmissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="px-4 sm:px-6 pt-24 pb-24 animate-fade-in">
        <ExpenseSubmission />
      </main>
      <FooterNav />
    </div>
  );
};

export default ExpenseSubmissionPage;
