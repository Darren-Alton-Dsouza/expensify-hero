
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BlurContainer from '@/components/ui/BlurContainer';
import { UploadIcon, CameraIcon, CreditCardIcon, CheckIcon, ArrowRightIcon, CloseIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ExpenseSubmission: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showCardTransactions, setShowCardTransactions] = useState(false);
  const [showOcrResults, setShowOcrResults] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const options = [
    {
      id: 'upload',
      title: 'Upload Receipt',
      description: 'Scan or upload an existing receipt',
      icon: UploadIcon,
    },
    {
      id: 'camera',
      title: 'Take Photo',
      description: 'Capture a new receipt with your camera',
      icon: CameraIcon,
    },
    {
      id: 'card',
      title: 'Corporate Card',
      description: 'Select from detected card transactions',
      icon: CreditCardIcon,
      badge: '3 new'
    }
  ];

  const cardTransactions = [
    {
      id: 'card001',
      merchant: 'Coffee Shop',
      date: '2023-05-22',
      amount: '$24.50',
      category: 'Meals & Entertainment',
      items: [
        { name: 'Cappuccino', price: '$5.50' },
        { name: 'Latte', price: '$4.75' },
        { name: 'Croissant', price: '$3.25' },
        { name: 'Sandwich', price: '$11.00' }
      ]
    },
    {
      id: 'card002',
      merchant: 'Uber',
      date: '2023-05-21',
      amount: '$18.75',
      category: 'Transportation',
    },
    {
      id: 'card003',
      merchant: 'Office Supply Store',
      date: '2023-05-20',
      amount: '$45.65',
      category: 'Office Supplies',
    }
  ];

  const ocrData = {
    merchant: "COFFEE SHOP",
    date: "05/22/2023",
    time: "10:15 AM",
    total: "$24.50",
    items: [
      { name: "Cappuccino", price: "$5.50" },
      { name: "Latte", price: "$4.75" },
      { name: "Croissant", price: "$3.25" },
      { name: "Sandwich", price: "$11.00" }
    ],
    tax: "$2.00",
    suggestions: [
      { type: "category", value: "Meals & Entertainment" },
      { type: "project", value: "Client Meeting" },
    ]
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setShowCamera(true);
      toast({
        title: "Camera activated",
        description: "Position your receipt in the frame and tap to capture",
      });
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast({
        title: "Camera error",
        description: "Could not access camera. Please check permissions.",
        variant: "destructive"
      });
      
      // Since camera access might fail in the iframe, let's provide a fallback
      setCapturedImage('/placeholder.svg');
      simulateProcessReceipt('/placeholder.svg');
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      
      // Draw video frame to canvas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to data URL
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(imageDataUrl);
      
      // Stop camera stream
      const stream = video.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
      
      setShowCamera(false);
      
      // Simulate processing receipt
      simulateProcessReceipt(imageDataUrl);
    } else {
      // Fallback if video or canvas is not available
      setCapturedImage('/placeholder.svg');
      simulateProcessReceipt('/placeholder.svg');
      setShowCamera(false);
    }
  };
  
  const closeCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    }
    setShowCamera(false);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setCapturedImage(event.target.result as string);
          simulateProcessReceipt(event.target.result as string);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const simulateProcessReceipt = (imageData: string) => {
    setIsUploading(true);
    
    // Simulate OCR and data extraction with a delay
    setTimeout(() => {
      setIsUploading(false);
      setShowOcrResults(true);
      toast({
        title: "Receipt processed!",
        description: "AI has extracted the details successfully",
      });
    }, 2000);
  };
  
  const handleSelectOption = (id: string) => {
    setSelectedOption(id);
    
    if (id === 'camera') {
      startCamera();
    } else if (id === 'card') {
      setShowCardTransactions(true);
    }
  };
  
  const handleSelectCardTransaction = (transaction: any) => {
    setSelectedTransaction(transaction);
    
    toast({
      title: "Transaction selected",
      description: `Processing ${transaction.merchant} transaction...`,
    });
    
    // Simulate processing with a delay
    setTimeout(() => {
      // Navigate to review page with the selected transaction
      sessionStorage.setItem('selectedTransaction', JSON.stringify(transaction));
      navigate('/review-expense', { state: { transaction } });
    }, 1000);
  };
  
  const handleReviewOcrResults = () => {
    // Store OCR data in session or pass via navigation state
    sessionStorage.setItem('ocrData', JSON.stringify(ocrData));
    navigate('/review-expense', { state: { ocrData } });
  };
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Submit Expense
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Select how you'd like to add your expense
      </p>
      
      {showCamera ? (
        <div className="relative animate-fade-in">
          <div className="overflow-hidden rounded-xl relative">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-auto"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            <button 
              onClick={closeCamera}
              className="absolute top-3 right-3 p-2 bg-black/50 rounded-full text-white"
            >
              <CloseIcon size={20} />
            </button>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button
              onClick={takePhoto}
              className="bg-expensa-blue hover:bg-expensa-blue-dark text-white rounded-full w-16 h-16 flex items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white"></div>
            </Button>
          </div>
        </div>
      ) : showCardTransactions ? (
        <div className="animate-fade-in space-y-4">
          <h3 className="font-medium text-expensa-black">Recent Corporate Card Transactions</h3>
          <p className="text-sm text-expensa-gray-dark">Select a transaction to continue</p>
          
          {cardTransactions.map((transaction) => (
            <BlurContainer 
              key={transaction.id}
              className="p-4 hover:scale-[1.01] cursor-pointer transition-all duration-300 solid-panel"
              onClick={() => handleSelectCardTransaction(transaction)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-expensa-blue/10 flex items-center justify-center text-expensa-blue">
                  <CreditCardIcon size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-expensa-black">{transaction.merchant}</h4>
                  <div className="flex items-center gap-2 text-sm text-expensa-gray-dark">
                    <span>{transaction.date}</span>
                    <span>•</span>
                    <span className="font-medium">{transaction.amount}</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-expensa-gray-medium flex items-center justify-center">
                </div>
              </div>
            </BlurContainer>
          ))}
          
          <button 
            className="w-full py-2 px-4 text-expensa-gray-dark border border-expensa-gray-medium rounded-lg mt-2"
            onClick={() => setShowCardTransactions(false)}
          >
            Go Back
          </button>
        </div>
      ) : capturedImage ? (
        <div className="animate-fade-in">
          <BlurContainer className="p-4 mb-4 solid-panel">
            <div className="text-center">
              <h3 className="font-medium text-expensa-black mb-2">Receipt Captured</h3>
              {isUploading ? (
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="w-10 h-10 border-4 border-expensa-blue border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-expensa-gray-dark text-sm">Processing receipt...</p>
                </div>
              ) : showOcrResults ? (
                <div className="text-left">
                  <div className="relative mb-4">
                    <img src={capturedImage} alt="Captured receipt" className="max-h-40 mx-auto rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <div className="text-lg font-bold">{ocrData.merchant}</div>
                      <div className="text-sm">{ocrData.date} • {ocrData.total}</div>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-2">AI Extracted Data:</h4>
                  
                  <div className="space-y-2 mb-3">
                    {ocrData.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-expensa-blue/10 rounded-lg">
                        <div className="p-1 bg-expensa-blue rounded-full text-white">
                          <CheckIcon size={12} />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-expensa-gray-dark">Suggested {suggestion.type}:</span> 
                          <span className="font-medium ml-1">{suggestion.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleReviewOcrResults}
                    className="w-full bg-expensa-blue text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    Review Expense <ArrowRightIcon size={16} />
                  </button>
                </div>
              ) : (
                <img src={capturedImage} alt="Captured receipt" className="max-h-64 mx-auto rounded-lg" />
              )}
            </div>
          </BlurContainer>
        </div>
      ) : (
        <div className="space-y-4 animate-slide-up">
          {options.map((option) => {
            const Icon = option.icon;
            
            return (
              <BlurContainer 
                key={option.id}
                className={cn(
                  "p-4 transition-all duration-300 solid-panel",
                  selectedOption === option.id ? "ring-2 ring-expensa-blue" : ""
                )}
                hoverEffect
                onClick={() => handleSelectOption(option.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 relative",
                    selectedOption === option.id ? "bg-expensa-blue" : "bg-expensa-gray"
                  )}>
                    <Icon size={24} />
                    
                    {option.badge && (
                      <div className="absolute -top-2 -right-2 bg-expensa-error text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                        {option.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-expensa-black">{option.title}</h3>
                    <p className="text-sm text-expensa-gray-dark">{option.description}</p>
                  </div>
                  
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    selectedOption === option.id 
                      ? "border-expensa-blue bg-expensa-blue text-white" 
                      : "border-expensa-gray-medium"
                  )}>
                    {selectedOption === option.id && <CheckIcon size={14} />}
                  </div>
                </div>
              </BlurContainer>
            );
          })}
          
          {selectedOption === 'upload' && (
            <div className="mt-4 animate-fade-in">
              <label className="block w-full py-3 rounded-xl font-medium text-white bg-expensa-blue hover:bg-expensa-blue-dark shadow-button hover:shadow-button-hover transition-all duration-300 text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <span className="flex items-center justify-center gap-2">
                  <UploadIcon size={18} /> Choose Receipt
                </span>
              </label>
            </div>
          )}
        </div>
      )}
      
      {!showCamera && !capturedImage && !showCardTransactions && selectedOption && selectedOption !== 'upload' && (
        <button 
          className={cn(
            "w-full mt-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 animate-fade-in",
            "bg-expensa-blue text-white hover:bg-expensa-blue-dark shadow-button hover:shadow-button-hover"
          )}
          onClick={() => {
            if (selectedOption === 'camera') {
              startCamera();
            } else if (selectedOption === 'card') {
              setShowCardTransactions(true);
            }
          }}
        >
          Continue <ArrowRightIcon size={18} />
        </button>
      )}
    </div>
  );
};

export default ExpenseSubmission;
