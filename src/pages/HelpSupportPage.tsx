
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileIcon, AlertIcon, TargetIcon, SearchIcon, ArrowLeftIcon } from '@/assets/icons';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

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

const HelpSupportPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmitRequest = () => {
    toast({
      title: "Support request submitted",
      description: "We'll get back to you within 24 hours.",
      duration: 3000,
    });
  };

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
              <AlertIcon className="text-expensa-blue" />
              Help & Support
            </h1>
          </div>

          <Tabs defaultValue="faq" className="w-full">
            {isMobile ? (
              <TabsList className="w-full mb-4 flex overflow-x-auto space-x-2 pb-1">
                <TabsTrigger value="faq" className="flex-1 min-w-[80px]">FAQs</TabsTrigger>
                <TabsTrigger value="guides" className="flex-1 min-w-[140px]">Guides & Tutorials</TabsTrigger>
                <TabsTrigger value="contact" className="flex-1 min-w-[120px]">Contact Support</TabsTrigger>
              </TabsList>
            ) : (
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
                <TabsTrigger value="contact">Contact Support</TabsTrigger>
              </TabsList>
            )}
            
            <TabsContent value="faq" className="mt-4">
              <div className="mb-4 relative">
                <SearchIcon className="absolute left-3 top-2.5 text-expensa-gray-dark" size={16} />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-expensa-gray-medium/20 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-expensa-blue/30"
                    >
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
                  <Card 
                    key={index} 
                    className="overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer transform hover:translate-y-[-2px]"
                  >
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
                  <div className="bg-expensa-blue/5 rounded-lg aspect-video flex flex-col items-center justify-center p-4 hover:bg-expensa-blue/10 transition-colors cursor-pointer">
                    <FileIcon className="text-expensa-blue mb-2" size={24} />
                    <p className="text-expensa-black font-medium">Submitting Your First Expense</p>
                    <p className="text-xs text-expensa-gray-dark mt-1">3:45 min</p>
                  </div>
                  <div className="bg-expensa-blue/5 rounded-lg aspect-video flex flex-col items-center justify-center p-4 hover:bg-expensa-blue/10 transition-colors cursor-pointer">
                    <FileIcon className="text-expensa-blue mb-2" size={24} />
                    <p className="text-expensa-black font-medium">Managing Corporate Cards</p>
                    <p className="text-xs text-expensa-gray-dark mt-1">4:20 min</p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <Button 
                        className="bg-expensa-blue text-white"
                        onClick={handleSubmitRequest}
                      >
                        Submit Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default HelpSupportPage;
