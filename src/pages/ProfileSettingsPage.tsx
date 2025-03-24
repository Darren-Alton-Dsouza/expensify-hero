
import React from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserIcon, DollarIcon, CreditCardIcon, ArrowLeftIcon } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';

const ProfileSettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="px-4 sm:px-6 pt-20 pb-24 max-w-4xl mx-auto animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
          <div className="flex items-center gap-2 mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-expensa-gray/50 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 text-expensa-gray-dark" />
            </button>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <UserIcon className="text-expensa-blue" />
              Profile Settings
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32 border border-expensa-gray-medium mb-4">
                <AvatarFallback className="text-3xl bg-expensa-blue text-white">AS</AvatarFallback>
              </Avatar>
              <button className="text-sm text-expensa-blue hover:underline">Change Photo</button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value="Arvind" readOnly className="bg-expensa-gray/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value="Sharma" readOnly className="bg-expensa-gray/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value="arvind.sharma@example.com" readOnly className="bg-expensa-gray/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Job Position</Label>
                <Input id="position" value="Senior Networking Engineer" readOnly className="bg-expensa-gray/50" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input id="employeeId" value="EMP-1245-789" readOnly className="bg-expensa-gray/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" value="1991-05-15" readOnly className="bg-expensa-gray/50" />
                </div>
              </div>
              
              <div className="border-t border-expensa-gray-medium/20 pt-4 mt-6">
                <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
                  <CreditCardIcon className="text-expensa-blue" />
                  Payment Methods
                </h3>
                
                <div className="space-y-4">
                  <div className="border border-expensa-gray-medium/30 rounded-lg p-4 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-expensa-blue/10 p-2 rounded-md">
                          <CreditCardIcon className="text-expensa-blue" />
                        </div>
                        <div>
                          <p className="font-medium">Corporate Card</p>
                          <p className="text-sm text-expensa-gray-dark">VISA ••••7890</p>
                        </div>
                      </div>
                      <span className="text-xs bg-expensa-success/10 text-expensa-success px-2 py-1 rounded-full">Primary</span>
                    </div>
                  </div>
                  
                  <div className="border border-expensa-gray-medium/30 rounded-lg p-4 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-expensa-gray/30 p-2 rounded-md">
                          <DollarIcon className="text-expensa-gray-dark" />
                        </div>
                        <div>
                          <p className="font-medium">Direct Deposit</p>
                          <p className="text-sm text-expensa-gray-dark">Bank of America ••••4567</p>
                        </div>
                      </div>
                      <span className="text-xs bg-expensa-gray/20 text-expensa-gray-dark px-2 py-1 rounded-full">Reimbursement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-expensa-blue text-white"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default ProfileSettingsPage;
