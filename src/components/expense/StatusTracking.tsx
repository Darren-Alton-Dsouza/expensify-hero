
import React, { useState } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { 
  CheckIcon, 
  CloseIcon, 
  StatusIcon, 
  MoreIcon, 
  ClockIcon,
  UserIcon,
  CalendarIcon
} from '@/assets/icons';
import { cn } from '@/lib/utils';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogClose
} from "@/components/ui/dialog";

const StatusTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedExpense, setSelectedExpense] = useState<any>(null);
  
  const tabOptions = [
    { id: 'all', label: 'All Expenses' },
    { id: 'approved', label: 'Approved' },
    { id: 'pending', label: 'Pending' },
    { id: 'rejected', label: 'Rejected' }
  ];
  
  const expenses = [
    {
      id: 'exp001',
      merchant: 'Office Supplies Co.',
      date: 'May 18, 2023',
      amount: '$124.50',
      status: 'approved',
      timeframe: 'Approved in 2 hours',
      icon: CheckIcon,
      iconColor: 'text-expensa-success',
      bgColor: 'bg-expensa-success/10',
      details: {
        category: 'Office Equipment',
        notes: 'Purchased new monitor and mouse for remote work setup.',
        approvedBy: 'Rajesh Kumar',
        approvalDate: 'May 18, 2023 at 2:15 PM',
        paymentMethod: 'Corporate Card',
        policyCompliance: 'Within limits',
        reimbursementStatus: 'Processed on May 20'
      }
    },
    {
      id: 'exp002',
      merchant: 'Business Lunch',
      date: 'May 15, 2023',
      amount: '$78.25',
      status: 'pending',
      timeframe: 'Estimated: 24 hours',
      icon: StatusIcon,
      iconColor: 'text-expensa-warning',
      bgColor: 'bg-expensa-warning/10',
      details: {
        category: 'Meals & Entertainment',
        notes: 'Lunch with client to discuss new project requirements.',
        reviewedBy: 'Pending Review',
        submittedOn: 'May 15, 2023 at 3:30 PM',
        paymentMethod: 'Personal Card',
        policyCompliance: 'Within limits',
        reimbursementStatus: 'Pending approval'
      }
    },
    {
      id: 'exp003',
      merchant: 'Taxi Ride',
      date: 'May 10, 2023',
      amount: '$35.00',
      status: 'rejected',
      timeframe: 'Missing receipt',
      icon: CloseIcon,
      iconColor: 'text-expensa-error',
      bgColor: 'bg-expensa-error/10',
      details: {
        category: 'Transportation',
        notes: 'Taxi from airport to conference venue.',
        rejectedBy: 'Sahil Patil',
        rejectionDate: 'May 12, 2023 at 10:45 AM',
        rejectionReason: 'Company policy requires original receipts for all transportation expenses. Please resubmit with the receipt image attached.',
        paymentMethod: 'Cash',
        policyCompliance: 'Missing documentation',
        resubmissionAllowed: true,
        resubmissionDeadline: 'May 19, 2023'
      }
    },
    {
      id: 'exp004',
      merchant: 'Hotel Stay',
      date: 'May 5, 2023',
      amount: '$450.00',
      status: 'approved',
      timeframe: 'Approved in 5 hours',
      icon: CheckIcon,
      iconColor: 'text-expensa-success',
      bgColor: 'bg-expensa-success/10',
      details: {
        category: 'Accommodation',
        notes: 'Two-night stay for quarterly sales conference.',
        approvedBy: 'Neha Gupta',
        approvalDate: 'May 5, 2023 at 4:20 PM',
        paymentMethod: 'Corporate Card',
        policyCompliance: 'Within limits',
        reimbursementStatus: 'Processed on May 8'
      }
    }
  ];
  
  const filteredExpenses = activeTab === 'all' 
    ? expenses 
    : expenses.filter(exp => exp.status === activeTab);
  
  const openExpenseDetails = (expense: any) => {
    setSelectedExpense(expense);
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Track Expenses
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Monitor the status of your submitted expenses
      </p>
      
      <div className="mb-6 flex overflow-x-auto scrollbar-hide space-x-2 pb-2 animate-slide-up">
        {tabOptions.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300",
              activeTab === tab.id
                ? "bg-expensa-blue text-white shadow-button"
                : "bg-white border border-expensa-gray-medium text-expensa-gray-dark hover:bg-expensa-gray"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-4 animate-slide-up delay-150">
        {filteredExpenses.length === 0 ? (
          <BlurContainer className="p-8 text-center">
            <p className="text-expensa-gray-dark">No expenses found in this category.</p>
          </BlurContainer>
        ) : (
          filteredExpenses.map(expense => {
            const Icon = expense.icon;
            
            return (
              <BlurContainer 
                key={expense.id} 
                className="p-4 hover:scale-[1.01] cursor-pointer transition-all duration-300"
                onClick={() => openExpenseDetails(expense)}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    expense.bgColor
                  )}>
                    <Icon size={20} className={expense.iconColor} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-expensa-black">
                      {expense.merchant}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-expensa-gray-dark">
                      <span>{expense.date}</span>
                      <span>{expense.amount}</span>
                      <span className={cn(
                        "text-xs font-medium",
                        expense.status === 'approved' ? "text-expensa-success" : 
                        expense.status === 'pending' ? "text-expensa-warning" : 
                        "text-expensa-error"
                      )}>
                        {expense.timeframe}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    className="p-1.5 rounded-full hover:bg-expensa-gray transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      openExpenseDetails(expense);
                    }}
                  >
                    <MoreIcon className="text-expensa-gray-dark" />
                  </button>
                </div>
              </BlurContainer>
            );
          })
        )}
      </div>
      
      {/* Expense Details Dialog */}
      <Dialog open={!!selectedExpense} onOpenChange={() => setSelectedExpense(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                selectedExpense?.bgColor
              )}>
                {selectedExpense?.icon && <selectedExpense.icon size={16} className={selectedExpense.iconColor} />}
              </div>
              {selectedExpense?.merchant}
            </DialogTitle>
            <DialogDescription className="text-expensa-gray-dark flex items-center gap-2">
              <CalendarIcon size={14} /> {selectedExpense?.date} • {selectedExpense?.amount}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {selectedExpense?.status === 'rejected' && (
              <div className="p-3 rounded-lg bg-expensa-error/10 border border-expensa-error/20">
                <h4 className="font-medium text-expensa-error mb-1">Rejection Reason</h4>
                <p className="text-sm text-expensa-gray-dark">
                  {selectedExpense?.details.rejectionReason}
                </p>
                {selectedExpense?.details.resubmissionAllowed && (
                  <div className="text-xs mt-2 font-medium text-expensa-gray-dark">
                    Resubmission allowed until: {selectedExpense?.details.resubmissionDeadline}
                  </div>
                )}
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <div className="text-xs text-expensa-gray-dark">Category</div>
                <div className="font-medium text-expensa-black">{selectedExpense?.details.category}</div>
              </div>
              <div>
                <div className="text-xs text-expensa-gray-dark">Payment Method</div>
                <div className="font-medium text-expensa-black">{selectedExpense?.details.paymentMethod}</div>
              </div>
              <div>
                <div className="text-xs text-expensa-gray-dark">Policy Compliance</div>
                <div className={cn(
                  "font-medium",
                  selectedExpense?.details.policyCompliance === 'Within limits' 
                    ? "text-expensa-success" 
                    : "text-expensa-error"
                )}>
                  {selectedExpense?.details.policyCompliance}
                </div>
              </div>
              <div>
                <div className="text-xs text-expensa-gray-dark">Reimbursement</div>
                <div className="font-medium text-expensa-black">{selectedExpense?.details.reimbursementStatus}</div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-expensa-gray-dark">Notes</div>
              <div className="text-sm text-expensa-black mt-1">{selectedExpense?.details.notes}</div>
            </div>
            
            <div className="border-t border-expensa-gray-medium/20 pt-3">
              <div className="flex items-center gap-2">
                <UserIcon size={14} className="text-expensa-gray-dark" />
                {selectedExpense?.status === 'approved' && (
                  <div className="text-sm">
                    <span className="text-expensa-gray-dark">Approved by </span>
                    <span className="font-medium text-expensa-black">{selectedExpense?.details.approvedBy}</span>
                    <span className="text-expensa-gray-dark"> on {selectedExpense?.details.approvalDate}</span>
                  </div>
                )}
                {selectedExpense?.status === 'pending' && (
                  <div className="text-sm">
                    <span className="text-expensa-gray-dark">Submitted on </span>
                    <span className="text-expensa-gray-dark">{selectedExpense?.details.submittedOn}</span>
                  </div>
                )}
                {selectedExpense?.status === 'rejected' && (
                  <div className="text-sm">
                    <span className="text-expensa-gray-dark">Rejected by </span>
                    <span className="font-medium text-expensa-black">{selectedExpense?.details.rejectedBy}</span>
                    <span className="text-expensa-gray-dark"> on {selectedExpense?.details.rejectionDate}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end mt-2">
              {selectedExpense?.status === 'rejected' && selectedExpense?.details.resubmissionAllowed && (
                <button className="py-2 px-4 bg-expensa-blue text-white rounded-lg shadow-button mr-2">
                  Resubmit
                </button>
              )}
              <DialogClose className="py-2 px-4 border border-expensa-gray-medium rounded-lg text-expensa-gray-dark">
                Close
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StatusTracking;
