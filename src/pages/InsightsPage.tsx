
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import BlurContainer from '@/components/ui/BlurContainer';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LockIcon, TargetIcon, CheckIcon } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const InsightsPage: React.FC = () => {
  const [developmentDialogOpen, setDevelopmentDialogOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: []
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Show the development feature dialog when the page loads
    const timer = setTimeout(() => {
      setDevelopmentDialogOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormState(prev => {
      const interests = [...(prev.interests as string[])];
      
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        if (index !== -1) {
          interests.splice(index, 1);
        }
      }
      
      return {
        ...prev,
        interests
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    setFormSubmitted(true);
    toast({
      title: "Interest Form Submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
      duration: 3000,
    });
    
    setTimeout(() => {
      setDevelopmentDialogOpen(false);
    }, 2000);
  };

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
            {/* Development feature overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white flex flex-col items-center justify-center z-10">
              <div className="w-16 h-16 rounded-full bg-expensa-blue/10 flex items-center justify-center mb-4">
                <LockIcon size={32} className="text-expensa-blue" />
              </div>
              <h3 className="text-xl font-semibold text-expensa-black mb-2">Development in Progress</h3>
              <p className="text-expensa-gray-dark text-center max-w-xs mb-4">
                This feature is under development for our MVP product
              </p>
              <button 
                onClick={() => setDevelopmentDialogOpen(true)}
                className="px-5 py-2.5 bg-expensa-blue text-white rounded-lg shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                I'm Interested
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
            {/* Development feature overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white flex flex-col items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-expensa-blue/10 flex items-center justify-center mb-2">
                <LockIcon size={24} className="text-expensa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-expensa-black mb-1">Coming Soon</h3>
              <p className="text-expensa-gray-dark text-center text-sm max-w-xs">
                Register your interest to get early access
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
      
      <Dialog open={developmentDialogOpen} onOpenChange={setDevelopmentDialogOpen}>
        <DialogContent className="bg-white p-6 max-w-md">
          {!formSubmitted ? (
            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-expensa-blue to-indigo-500 mx-auto flex items-center justify-center mb-3">
                  <TargetIcon size={32} className="text-white" />
                </div>
                <DialogTitle className="text-xl mb-2">Register Your Interest</DialogTitle>
                <DialogDescription className="text-expensa-gray-dark">
                  This feature is currently under development. Register your interest to be among the first to access it when released.
                </DialogDescription>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <input 
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <select 
                      name="role"
                      value={formState.role as string}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue"
                    >
                      <option value="">Select Role</option>
                      <option value="Finance Manager">Finance Manager</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Employee">Employee</option>
                      <option value="Executive">Executive</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">I'm interested in (select all that apply)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input 
                        type="checkbox"
                        name="interests"
                        value="Expense Tracking"
                        checked={(formState.interests as string[])?.includes('Expense Tracking')}
                        onChange={handleCheckboxChange}
                        className="rounded border-expensa-gray-medium text-expensa-blue"
                      />
                      Expense Tracking
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input 
                        type="checkbox"
                        name="interests"
                        value="Budget Analytics"
                        checked={(formState.interests as string[])?.includes('Budget Analytics')}
                        onChange={handleCheckboxChange}
                        className="rounded border-expensa-gray-medium text-expensa-blue"
                      />
                      Budget Analytics
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input 
                        type="checkbox"
                        name="interests"
                        value="Receipt Scanner"
                        checked={(formState.interests as string[])?.includes('Receipt Scanner')}
                        onChange={handleCheckboxChange}
                        className="rounded border-expensa-gray-medium text-expensa-blue"
                      />
                      Receipt Scanner
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input 
                        type="checkbox"
                        name="interests"
                        value="Policy Compliance"
                        checked={(formState.interests as string[])?.includes('Policy Compliance')}
                        onChange={handleCheckboxChange}
                        className="rounded border-expensa-gray-medium text-expensa-blue"
                      />
                      Policy Compliance
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setDevelopmentDialogOpen(false)}
                    className="flex-1"
                  >
                    Maybe Later
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-expensa-blue text-white"
                  >
                    Submit Interest
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-expensa-success mx-auto flex items-center justify-center mb-4">
                <CheckIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-expensa-gray-dark">
                Your interest has been registered. We'll notify you as soon as this feature becomes available.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InsightsPage;
