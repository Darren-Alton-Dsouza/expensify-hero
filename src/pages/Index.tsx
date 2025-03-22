
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import AIAssistant from '@/components/dashboard/AIAssistant';
import QuickActions from '@/components/dashboard/QuickActions';
import SnapshotCard from '@/components/dashboard/SnapshotCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="animate-fade-in">
        <div className="px-4 sm:px-6 pt-24 pb-24 max-w-7xl mx-auto">
          <AIAssistant />
          <QuickActions />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <SnapshotCard type="expense" />
            <SnapshotCard type="rewards" delay={100} />
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default Index;
