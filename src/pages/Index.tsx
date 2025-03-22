
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import AIAssistant from '@/components/dashboard/AIAssistant';
import QuickActions from '@/components/dashboard/QuickActions';
import SnapshotCard from '@/components/dashboard/SnapshotCard';
import ExpenseSubmission from '@/components/expense/ExpenseSubmission';
import ExpenseReview from '@/components/expense/ExpenseReview';
import StatusTracking from '@/components/expense/StatusTracking';
import RewardsProgress from '@/components/rewards/RewardsProgress';

// Dashboard component
const ExpenseDashboard = () => (
  <div className="px-4 sm:px-6 pt-24 pb-24 max-w-7xl mx-auto">
    <AIAssistant />
    <QuickActions />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <SnapshotCard type="expense" />
      <SnapshotCard type="rewards" delay={100} />
    </div>
  </div>
);

// Insights component (placeholder for now)
const Insights = () => (
  <div className="px-4 sm:px-6 pt-24 pb-24 max-w-lg mx-auto">
    <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
      Expense Insights
    </h2>
    <p className="text-expensa-gray-dark mb-6 animate-slide-down">
      Track your spending patterns and optimize your expenses
    </p>
    <div className="animate-slide-up">
      <div className="glass-panel p-6 text-center">
        <p className="text-expensa-gray-dark">Insights dashboard coming soon!</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      
      <main 
        className={`page-transition-${transitionStage}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<ExpenseDashboard />} />
          <Route path="/add-expense" element={
            <div className="px-4 sm:px-6 pt-24 pb-24">
              <ExpenseSubmission />
            </div>
          } />
          <Route path="/review-expense" element={
            <div className="px-4 sm:px-6 pt-24 pb-24">
              <ExpenseReview />
            </div>
          } />
          <Route path="/expenses" element={
            <div className="px-4 sm:px-6 pt-24 pb-24">
              <StatusTracking />
            </div>
          } />
          <Route path="/insights" element={
            <div className="px-4 sm:px-6 pt-24 pb-24">
              <Insights />
            </div>
          } />
          <Route path="/rewards" element={
            <div className="px-4 sm:px-6 pt-24 pb-24">
              <RewardsProgress />
            </div>
          } />
        </Routes>
      </main>
      
      <FooterNav />
    </div>
  );
};

export default Index;
