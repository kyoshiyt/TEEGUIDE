import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { categories } from '../data';
import { ArrowRight, RotateCcw } from 'lucide-react';
import clsx from 'clsx';

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const questions = [
    {
      id: 'purpose',
      title: 'What will you mainly use this T-shirt for?',
      options: [
        { id: 'everyday', label: 'Everyday casual wear', categoryMap: 'basic' },
        { id: 'gym', label: 'Gym and running', categoryMap: 'gym' },
        { id: 'streetwear', label: 'Streetwear style', categoryMap: 'oversized' },
        { id: 'work', label: 'Work or physical labor', categoryMap: 'heavyweight' },
        { id: 'summer', label: 'Surviving hot weather', categoryMap: 'summer' }
      ]
    },
    {
      id: 'fit',
      title: 'How do you want it to fit?',
      options: [
        { id: 'fitted', label: 'Fitted / Athletic', categoryMap: 'basic' },
        { id: 'classic', label: 'Classic / Regular', categoryMap: 'cotton' },
        { id: 'relaxed', label: 'Relaxed / Roomy', categoryMap: 'heavyweight' },
        { id: 'oversized', label: 'Oversized / Drop-shoulder', categoryMap: 'oversized' }
      ]
    },
    {
      id: 'weight',
      title: 'Do you prefer a thick or thin fabric?',
      options: [
        { id: 'light', label: 'Light and breathable', categoryMap: 'summer' },
        { id: 'mid', label: 'Midweight (standard)', categoryMap: 'basic' },
        { id: 'heavy', label: 'Thick and structured', categoryMap: 'heavyweight' }
      ]
    }
  ];

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setStep(0);
  };

  const getRecommendation = () => {
    // Simple logic to find best category based on answers
    // In a real app, this would be more sophisticated
    let tally: Record<string, number> = {};
    Object.entries(answers).forEach(([qId, oId]) => {
      const question = questions.find(q => q.id === qId);
      const option = question?.options.find(o => o.id === oId);
      if (option?.categoryMap) {
        tally[option.categoryMap] = (tally[option.categoryMap] || 0) + 1;
      }
    });

    let topCategorySlug = 'basic';
    let max = 0;
    Object.entries(tally).forEach(([slug, count]) => {
      if (count > max) {
        max = count;
        topCategorySlug = slug;
      }
    });

    return categories.find(c => c.slug === topCategorySlug) || categories[4]; // fallback to basic
  };

  return (
    <>
      <SEO 
        title="Find Your Perfect T-Shirt - Interactive Quiz" 
        description="Take our quick quiz to get personalized T-shirt recommendations based on your preferences, lifestyle, and climate." 
      />

      <div className="bg-[#FAFAF9] min-h-[calc(100vh-64px)] py-12 lg:py-24 border-b border-stone-200 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {step < questions.length ? (
            <div className="bg-white p-8 md:p-16 rounded-none border border-stone-200 shadow-sm text-center">
              <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-10 pb-4 border-b border-stone-100 inline-block">
                Question {step + 1} of {questions.length}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight mb-12 leading-tight">
                {questions[step].title}
              </h1>
              
              <div className="grid grid-cols-1 gap-4">
                {questions[step].options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(questions[step].id, option.id)}
                    className={clsx(
                      "w-full text-center p-6 rounded-none border border-stone-200 transition-all font-medium text-lg tracking-wide",
                      answers[questions[step].id] === option.id 
                        ? "border-stone-900 bg-stone-900 text-white" 
                        : "text-stone-600 hover:border-stone-900 hover:text-stone-900"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              {step > 0 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="mt-10 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900 pb-1"
                >
                  Go Back
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white p-8 md:p-16 rounded-none border border-stone-200 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-none border border-stone-200 bg-[#FAFAF9] text-stone-900 mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight mb-6">
                We've found your match
              </h1>
              <p className="text-lg text-stone-600 mb-12">
                Based on your answers, we recommend starting here:
              </p>
              
              <div className="bg-[#FAFAF9] p-10 rounded-none border border-stone-200 mb-12">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">
                  {getRecommendation().name}
                </h2>
                <p className="text-stone-600 mb-10 text-lg leading-relaxed">
                  {getRecommendation().description}
                </p>
                <Link 
                  to={`/tshirts/${getRecommendation().slug}`}
                  className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors"
                >
                  View Recommendations
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <button 
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900 pb-1"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
