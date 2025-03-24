
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserIcon, DollarIcon, CreditCardIcon } from '@/assets/icons';

interface ProfileSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white p-6 max-w-2xl">
        <DialogTitle className="text-xl mb-6 flex items-center gap-2">
          <UserIcon className="text-expensa-blue" />
          Profile Settings
        </DialogTitle>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-32 w-32 border border-expensa-gray-medium mb-4">
              <AvatarFallback className="text-3xl bg-expensa-blue text-white">AS</AvatarFallback>
            </Avatar>
            <button className="text-sm text-expensa-blue hover:underline">Change Photo</button>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
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
            
            <div className="grid grid-cols-2 gap-4">
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
                <div className="border border-expensa-gray-medium/30 rounded-lg p-4">
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
                
                <div className="border border-expensa-gray-medium/30 rounded-lg p-4">
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
        
        <div className="flex justify-end mt-6">
          <Button 
            onClick={() => onOpenChange(false)}
            className="bg-expensa-blue text-white"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;
