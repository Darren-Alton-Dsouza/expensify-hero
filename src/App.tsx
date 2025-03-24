
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExpenseSubmissionPage from "./pages/ExpenseSubmissionPage";
import ExpenseReviewPage from "./pages/ExpenseReviewPage";
import ExpensesPage from "./pages/ExpensesPage";
import InsightsPage from "./pages/InsightsPage";
import RewardsPage from "./pages/RewardsPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import NotificationPreferencesPage from "./pages/NotificationPreferencesPage";
import HelpSupportPage from "./pages/HelpSupportPage";
import ProfileSettings from "./components/profile/ProfileSettings";
import NotificationPreferences from "./components/profile/NotificationPreferences";
import HelpSupport from "./components/profile/HelpSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add-expense" element={<ExpenseSubmissionPage />} />
          <Route path="/review-expense" element={<ExpenseReviewPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/notification-preferences" element={<NotificationPreferences />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
