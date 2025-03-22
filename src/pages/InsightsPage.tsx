
import React from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import BlurContainer from '@/components/ui/BlurContainer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InsightsPage: React.FC = () => {
  const expenseData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1800 },
    { month: 'Mar', amount: 1500 },
    { month: 'Apr', amount: 2200 },
    { month: 'May', amount: 1900 },
    { month: 'Jun', amount: 2400 },
  ];

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
          
          <BlurContainer className="p-6 mb-6 animate-slide-up">
            <h3 className="font-medium text-expensa-black mb-4">Monthly Expense Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`$${value}`, 'Amount']}
                  />
                  <Bar dataKey="amount" fill="#0a84ff" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </BlurContainer>

          <BlurContainer className="p-6 animate-slide-up delay-150">
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
    </div>
  );
};

export default InsightsPage;
