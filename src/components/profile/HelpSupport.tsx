
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileIcon, AlertIcon, TargetIcon, SearchIcon } from '@/assets/icons';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface HelpSupportProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const faqData = [
  {
    question: "How do I submit an expense?",
    answer: "To submit an expense, navigate to the Add Expense page from the home screen. You can either take a photo of your receipt or upload an existing image. Fill in the required details and submit."
  },
  {
    question: "What happens after I submit an expense?",
    answer: "After submission, your expense will be reviewed by your manager. You can track the status on the Expenses page. You'll receive a notification once it's approved or if additional information is needed."
  },
  {
    question: "How long does expense approval take?",
    answer: "Expenses are typically reviewed within 24-48 hours. Complex expenses or those requiring additional approval may take longer."
  },
  {
    question: "Can I edit an expense after submitting it?",
    answer: "You cannot edit an expense after submission. If you need to make changes, wait for it to be rejected with feedback, then resubmit with corrections."
  },
  {
    question: "How do I earn rewards?",
    answer: "Rewards are earned by consistently submitting compliant expenses on time. You'll earn points for each approved expense, with bonus points for using recommended expense categories and submitting within 48 hours."
  },
  {
    question: "When will I receive my reimbursement?",
    answer: "Reimbursements are processed within 3-5 business days after approval and are paid out according to your company's payment schedule, typically in the next payroll cycle."
  }
];

const guides = [
  {
    title: "Getting Started",
    description: "Learn the basics of Expensa",
    icon: <TargetIcon className="text-expensa-blue" />
  },
  {
    title: "Submitting Expenses",
    description: "A complete guide to expense submission",
    icon: <FileIcon className="text-expensa-blue" />
  },
  {
    title: "Tracking & Reports",
    description: "How to track and report on expenses",
    icon: <FileIcon className="text-expensa-blue" />
  },
  {
    title: "Mobile App Guide",
    description: "Using Expensa on your mobile device",
    icon: <FileIcon className="text-expensa-blue" />
  }
];

const HelpSupport: React.FC<HelpSupportProps> = ({ open, onOpenChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white p-6 max-w-3xl">
        <DialogTitle className="text-xl mb-6 flex items-center gap-2">
          <AlertIcon className="text-expensa-blue" />
          Help & Support
        </DialogTitle>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            <div className="mb-4 relative">
              <SearchIcon className="absolute left-3 top-2.5 text-expensa-gray-dark" size={16} />
              <Input
                placeholder="Search FAQs..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="border border-expensa-gray-medium/20 rounded-lg p-4">
                    <h3 className="font-medium text-expensa-black mb-2">{faq.question}</h3>
                    <p className="text-sm text-expensa-gray-dark">{faq.answer}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <p className="text-expensa-gray-dark">No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try different keywords or browse our guides</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guides.map((guide, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1 bg-expensa-blue/10 p-2 rounded-md">
                      {guide.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-expensa-black group-hover:text-expensa-blue transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-expensa-gray-dark mt-1">{guide.description}</p>
                      <p className="text-xs text-expensa-blue mt-2 group-hover:underline">View Guide</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 border-t border-expensa-gray-medium/20 pt-6">
              <h3 className="font-medium text-lg mb-4">Video Tutorials</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-expensa-gray/20 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-expensa-gray-dark">Tutorial: Submitting Your First Expense</p>
                </div>
                <div className="bg-expensa-gray/20 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-expensa-gray-dark">Tutorial: Managing Corporate Cards</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="space-y-6">
              <div className="bg-expensa-blue/5 border border-expensa-blue/20 rounded-lg p-4">
                <h3 className="font-medium text-expensa-black mb-2">Need urgent help?</h3>
                <p className="text-sm text-expensa-gray-dark mb-3">Our support team is available Monday-Friday, 9am-5pm ET.</p>
                <div className="flex items-center gap-3">
                  <Button className="bg-expensa-blue text-white">Chat Now</Button>
                  <span className="text-expensa-gray-dark text-sm">or call</span>
                  <a href="tel:+18005551234" className="text-expensa-blue hover:underline">+1 (800) 555-1234</a>
                </div>
              </div>
              
              <div className="border-t border-expensa-gray-medium/20 pt-4">
                <h3 className="font-medium text-lg mb-4">Email Support</h3>
                <p className="text-sm text-expensa-gray-dark mb-4">
                  Send us a detailed message and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input defaultValue="Arvind Sharma" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" defaultValue="arvind.sharma@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What is your issue about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea 
                      className="w-full p-2 rounded-lg border border-expensa-gray-medium focus:outline-none focus:ring-2 focus:ring-expensa-blue transition-all duration-300 min-h-[120px]"
                      placeholder="Please describe your issue in detail..."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-expensa-blue text-white">Submit Request</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end mt-6 border-t border-expensa-gray-medium/20 pt-4">
          <Button 
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpSupport;
