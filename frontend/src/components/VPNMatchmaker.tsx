"use client";

import React, { useState } from 'react';
import { Shield, Tv, Wallet, Smartphone, Users, Zap, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import currentData from '@/data/current_data.json';
import { CTAButton } from './CTAButton';

type Question = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    icon: React.ReactNode;
    scores: { nordvpn: number; cyberghost: number; surfshark: number };
  }[];
};

const questions: Question[] = [
  {
    id: 'goal',
    question: "What's your primary reason for getting a VPN?",
    options: [
      { id: 'streaming', text: 'Streaming & Unblocking', icon: <Tv className="w-6 h-6 mb-2" />, scores: { nordvpn: 1, cyberghost: 3, surfshark: 0 } },
      { id: 'privacy', text: 'Maximum Security', icon: <Shield className="w-6 h-6 mb-2" />, scores: { nordvpn: 3, cyberghost: 1, surfshark: 0 } },
      { id: 'value', text: 'Best Value for Money', icon: <Wallet className="w-6 h-6 mb-2" />, scores: { nordvpn: 0, cyberghost: 0, surfshark: 3 } },
    ]
  },
  {
    id: 'devices',
    question: "How many devices do you need to protect?",
    options: [
      { id: 'personal', text: 'Just mine (1-4)', icon: <Smartphone className="w-6 h-6 mb-2" />, scores: { nordvpn: 1, cyberghost: 1, surfshark: 0 } },
      { id: 'family', text: 'Whole family (5+)', icon: <Users className="w-6 h-6 mb-2" />, scores: { nordvpn: 0, cyberghost: 0, surfshark: 4 } },
    ]
  },
  {
    id: 'tech',
    question: "What's your technical experience level?",
    options: [
      { id: 'beginner', text: 'Beginner (Keep it simple)', icon: <Zap className="w-6 h-6 mb-2" />, scores: { nordvpn: 1, cyberghost: 2, surfshark: 1 } },
      { id: 'advanced', text: 'Advanced (I want settings)', icon: <Settings className="w-6 h-6 mb-2" />, scores: { nordvpn: 2, cyberghost: 0, surfshark: 1 } },
    ]
  }
];

export function VPNMatchmaker() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is start screen
  const [scores, setScores] = useState({ nordvpn: 0, cyberghost: 0, surfshark: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setCurrentStep(0);
  };

  const handleAnswer = (optionScores: { nordvpn: number; cyberghost: number; surfshark: number }) => {
    setScores(prev => ({
      nordvpn: prev.nordvpn + optionScores.nordvpn,
      cyberghost: prev.cyberghost + optionScores.cyberghost,
      surfshark: prev.surfshark + optionScores.surfshark,
    }));
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsAnimating(false);
    }, 400);
  };

  const resetQuiz = () => {
    setScores({ nordvpn: 0, cyberghost: 0, surfshark: 0 });
    setCurrentStep(-1);
  };

  // Start Screen
  if (currentStep === -1) {
    return (
      <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 sm:p-12 text-center shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Not sure which VPN to choose?</h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Take our 30-second interactive quiz. We'll analyze your specific needs and instantly recommend the perfect VPN for you.
        </p>
        <button 
          onClick={handleStart}
          className="relative z-10 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl flex items-center gap-2 mx-auto"
        >
          Find My Perfect VPN <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  // Result Screen
  if (currentStep >= questions.length) {
    const winnerId = Object.keys(scores).reduce((a, b) => scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b);
    const winner = (currentData as any)[winnerId];

    return (
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">We found your match!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Based on your answers, here is the absolute best VPN for your specific needs:</p>
        
        <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <img src={winner.image} alt={winner.name} className="w-32 h-32 object-contain mx-auto mb-4 mix-blend-multiply dark:mix-blend-normal" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{winner.name}</h3>
          <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-4">Starting at ${winner.price}/mo</p>
          <ul className="text-left text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            {winner.features?.slice(0, 3).map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <CTAButton href={winner.url} text={`Get ${winner.name} Now`} className="w-full" />
        </div>
        
        <button onClick={resetQuiz} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
          Retake the quiz
        </button>
      </div>
    );
  }

  // Question Screen
  const question = questions[currentStep];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-bold text-indigo-600">Question {currentStep + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, idx) => (
            <div key={idx} className={`w-8 h-2 rounded-full ${idx <= currentStep ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>
      </div>
      
      <div className={`transition-all duration-400 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-8">
          {question.question}
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.scores)}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all text-gray-900 dark:text-white text-center group"
            >
              <div className="text-gray-400 group-hover:text-indigo-600 transition-colors">
                {option.icon}
              </div>
              <span className="font-bold">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
