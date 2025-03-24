
import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BellIcon, ClockIcon, AlertIcon, CheckIcon, ExpenseIcon, RewardsIcon, ArrowLeftIcon } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const NotificationPreferences: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [notificationSettings, setNotificationSettings] = React.useState({
    expenseApproved: true,
    expenseRejected: true,
    expenseReminder: true,
    rewardEarned: true,
    emailNotifications: true,
    pushNotifications: true,
    weeklyDigest: false,
    securityAlerts: true
  });

  const handleToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    toast({
      title: "Notification preferences saved",
      description: "Your notification preferences have been updated successfully.",
      duration: 3000,
    });
    navigate('/');
  };

  const notificationGroups = [
    {
      title: "Expense Notifications",
      icon: <ExpenseIcon className="text-expensa-blue" />,
      settings: [
        { 
          id: "expenseApproved", 
          label: "Expense Approved", 
          description: "Get notified when your expenses are approved",
          value: notificationSettings.expenseApproved 
        },
        { 
          id: "expenseRejected", 
          label: "Expense Rejected", 
          description: "Get notified when your expenses are rejected",
          value: notificationSettings.expenseRejected 
        },
        { 
          id: "expenseReminder", 
          label: "Submission Reminders", 
          description: "Get reminders about pending expense submissions",
          value: notificationSettings.expenseReminder 
        }
      ]
    },
    {
      title: "Reward Notifications",
      icon: <RewardsIcon className="text-expensa-blue" />,
      settings: [
        { 
          id: "rewardEarned", 
          label: "Rewards Earned", 
          description: "Get notified when you earn new rewards",
          value: notificationSettings.rewardEarned 
        }
      ]
    },
    {
      title: "General Settings",
      icon: <BellIcon className="text-expensa-blue" />,
      settings: [
        { 
          id: "emailNotifications", 
          label: "Email Notifications", 
          description: "Receive notifications via email",
          value: notificationSettings.emailNotifications 
        },
        { 
          id: "pushNotifications", 
          label: "Push Notifications", 
          description: "Receive push notifications in the app",
          value: notificationSettings.pushNotifications 
        },
        { 
          id: "weeklyDigest", 
          label: "Weekly Digest", 
          description: "Receive a weekly summary of your expenses",
          value: notificationSettings.weeklyDigest 
        },
        { 
          id: "securityAlerts", 
          label: "Security Alerts", 
          description: "Get notified about security-related events",
          value: notificationSettings.securityAlerts 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-expensa-gray">
      <Header />
      <main className="px-4 sm:px-6 pt-20 pb-24 max-w-3xl mx-auto animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
          <div className="flex items-center gap-2 mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-expensa-gray/50 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 text-expensa-gray-dark" />
            </button>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <BellIcon className="text-expensa-blue" />
              Notification Preferences
            </h1>
          </div>

          <div className="space-y-6">
            {notificationGroups.map((group, index) => (
              <div key={index} className={index > 0 ? "pt-6 border-t border-expensa-gray-medium/20" : ""}>
                <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
                  {group.icon}
                  {group.title}
                </h3>
                
                <div className="space-y-4">
                  {group.settings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between hover:bg-expensa-gray/5 p-2 rounded-lg transition-colors">
                      <div>
                        <Label htmlFor={setting.id} className="text-base font-medium">
                          {setting.label}
                        </Label>
                        <p className="text-sm text-expensa-gray-dark">
                          {setting.description}
                        </p>
                      </div>
                      <Switch
                        id={setting.id}
                        checked={setting.value}
                        onCheckedChange={() => handleToggle(setting.id as keyof typeof notificationSettings)}
                        className="bg-expensa-gray-medium/30 data-[state=checked]:bg-expensa-blue"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-4 mt-8">
            <Button 
              variant="outline"
              onClick={() => {
                setNotificationSettings({
                  expenseApproved: true,
                  expenseRejected: true,
                  expenseReminder: true,
                  rewardEarned: true,
                  emailNotifications: true,
                  pushNotifications: true,
                  weeklyDigest: false,
                  securityAlerts: true
                });
              }}
            >
              Reset to Default
            </Button>
            <Button 
              onClick={handleSave}
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

export default NotificationPreferences;
