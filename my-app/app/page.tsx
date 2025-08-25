"use client"
import React, { useState } from 'react';
import {
  Compass, Lightbulb, Users, BarChart2, Shield, FastForward, Scale, TrendingUp,
  Target, Calculator, ShoppingCart, Rocket, Star, Heart, Magnet, Play, RefreshCw,
  HelpCircle, AlertCircle, LineChart, FlaskConical, Gavel, Handshake, CheckCircle
} from 'lucide-react';

// Define the type for the props of the TitleSlide component
interface TitleSlideProps {
  presenterName: string;
}

// Corrected TitleSlide component with explicit typing
const TitleSlide = ({ presenterName }: TitleSlideProps) => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-xl shadow-lg transition-all duration-500">
    <Compass size={96} className="mb-8 animate-spin-slow" />
    <h1 className="text-5xl font-extrabold mb-4 leading-tight">The Power of Data: Driving Product Success</h1>
    <h2 className="text-2xl font-semibold mb-8">An Essential Guide for Everyone</h2>
    <p className="text-lg opacity-90">Presented by: <span className="font-bold">{presenterName}</span></p>
  </div>
);

// Slide 2: Introduction
const IntroductionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Listening to Our Users: Why Data Matters</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
      <div className="flex flex-col items-center text-center p-4 bg-red-50 rounded-lg shadow-md">
        <Lightbulb size={64} className="text-red-500 mb-3" />
        <p className="text-lg font-medium text-gray-700">Imagine a feature... and it flops. Why?</p>
      </div>
      <div className="text-5xl font-bold text-gray-400">→</div>
      <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg shadow-md">
        <BarChart2 size={64} className="text-green-600 mb-3" />
        <p className="text-lg font-medium text-gray-700">Data gives our users a voice!</p>
      </div>
    </div>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl">"As a Product Analyst, I translate numbers into a compelling story about our users, product, and business."</p>
    <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
      <span className="flex items-center gap-1 p-2 bg-gray-100 rounded-full"><Lightbulb size={16} /> Data Importance</span>
      <span className="flex items-center gap-1 p-2 bg-gray-100 rounded-full"><FlaskConical size={16} /> A/B Testing</span>
      <span className="flex items-center gap-1 p-2 bg-gray-100 rounded-full"><Target size={16} /> KPIs & Metrics</span>
      <span className="flex items-center gap-1 p-2 bg-gray-100 rounded-full"><LineChart size={16} /> Case Study</span>
    </div>
  </div>
);

// Slide 3: Data vs. Gut Feeling
const DataVsGutFeelingSlide = () => (
  <div className="flex flex-col md:flex-row items-center justify-around h-full p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-lg transition-all duration-500">
    <div className="flex flex-col items-center text-center md:w-5/12 p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Gut Feeling 🤔</h2>
      <Lightbulb size={80} className="text-yellow-500 mb-4" />
      <ul className="text-lg text-gray-600 list-disc list-inside space-y-2">
        <li>Great for ideas, risky for decisions.</li>
        <li>Often biased by what we *wish* was true.</li>
        <li>Leads to "HiPPO" (Highest Paid Person's Opinion).</li>
      </ul>
      <p className="mt-6 text-xl font-medium text-gray-700">"I <span className="text-red-500 font-bold">think</span>..."</p>
    </div>

    <div className="text-6xl font-extrabold text-blue-600 mx-8 hidden md:block">VS</div>
    <div className="text-6xl font-extrabold text-blue-600 mb-8 md:hidden">VS</div>


    <div className="flex flex-col items-center text-center md:w-5/12 p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Data Analytics 📊</h2>
      <BarChart2 size={80} className="text-blue-600 mb-4" />
      <ul className="text-lg text-gray-600 list-disc list-inside space-y-2">
        <li>Objective, unbiased view.</li>
        <li>Replaces assumptions with facts.</li>
        <li>Empowers evidence-based decisions.</li>
      </ul>
      <p className="mt-6 text-xl font-medium text-gray-700">"I <span className="text-green-600 font-bold">know</span> because the data shows..."</p>
    </div>
  </div>
);

// Slide 4: 4 Pillars of Data-Driven Product Management
const PillarsSlide = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-blue-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Driving Product Success: 4 Key Pillars</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <PillarItem
        icon={Users}
        title="Deep User Understanding"
        description="Who, what, and sometimes why users interact with your product."
        color="text-indigo-500"
      />
      <PillarItem
        icon={Lightbulb}
        title="Hypothesis Validation"
        description="Testing new features as hypotheses to confirm their value."
        color="text-yellow-500"
      />
      <PillarItem
        icon={ShoppingCart}
        title="Strategic Roadmap Prioritization"
        description="Focusing resources where they'll have the biggest impact."
        color="text-green-500"
      />
      <PillarItem
        icon={BarChart2}
        title="Objective Success Measurement"
        description="Quantifying outcomes of launches and experiments to track progress."
        color="text-red-500"
      />
    </div>
  </div>
);

// Define the type for the PillarItem component props
interface PillarItemProps {
  icon: React.ComponentType<{ size: number, className: string }>;
  title: string;
  description: string;
  color: string;
}

const PillarItem = ({ icon: Icon, title, description, color }: PillarItemProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 border-b-4 border-transparent hover:border-blue-500">
    <Icon size={64} className={`${color} mb-4`} />
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-md text-gray-600">{description}</p>
  </div>
);

// Slide 5: A/B Testing Introduction
const ABTestingIntroSlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 bg-white rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">A/B Testing: Your Product Science Lab 🧪</h1>
    <p className="text-xl text-gray-600 mb-12 max-w-3xl text-center">
      A randomized controlled experiment comparing two (or more) versions of a product element
      to determine which performs better against a predefined metric.
    </p>
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-blue-50 p-6 rounded-xl shadow-inner">
      <div className="flex flex-col items-center">
        <Users size={48} className="text-blue-600 mb-2" />
        <p className="font-semibold text-gray-700">Incoming Users</p>
      </div>
      <div className="text-4xl text-gray-400">→</div>
      <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm w-48 h-32 justify-center">
        <span className="text-2xl font-bold text-gray-800">Version A</span>
        <p className="text-sm text-gray-500 mt-2">(Control)</p>
      </div>
      <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm w-48 h-32 justify-center">
        <span className="text-2xl font-bold text-gray-800">Version B</span>
        <p className="text-sm text-gray-500 mt-2">(Variant)</p>
      </div>
      <div className="text-4xl text-gray-400">→</div>
      <div className="flex flex-col items-center">
        <BarChart2 size={48} className="text-green-600 mb-2" />
        <p className="font-semibold text-gray-700">Measure Results</p>
      </div>
      <div className="text-4xl text-gray-400">→</div>
      <div className="flex flex-col items-center">
        <CheckCircle size={48} className="text-purple-600 mb-2" />
        <p className="font-semibold text-gray-700">Optimal Outcome</p>
      </div>
    </div>
  </div>
);

// Slide 6: Why A/B Testing is Critical
const WhyABTestingSlide = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">The Power of A/B Testing: Why It's Essential</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <FeatureCard
        icon={Shield}
        title="Risk Reduction"
        description="Test on small user segments; minimize impact of potential failures."
        color="text-blue-500"
      />
      <FeatureCard
        icon={FastForward}
        title="Accelerated Learning"
        description="Get quick, quantifiable answers to 'what if' questions, learn faster."
        color="text-green-500"
      />
      <FeatureCard
        icon={Scale}
        title="Bias Elimination"
        description="Objective tie-breaker in debates; let data, not opinions, decide."
        color="text-yellow-500"
      />
      <FeatureCard
        icon={TrendingUp}
        title="Incremental Improvement"
        description="Small, data-validated changes accumulate into significant product enhancements."
        color="text-red-500"
      />
    </div>
  </div>
);

// Define the type for the FeatureCard component props
interface FeatureCardProps {
  icon: React.ComponentType<{ size: number, className: string }>;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => (
  <div className="flex items-start p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 border-l-4 border-transparent hover:border-purple-500">
    <Icon size={48} className={`${color} mr-4 flex-shrink-0`} />
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-md text-gray-600">{description}</p>
    </div>
  </div>
);

// Slide 7: How A/B Testing Works (Flow)
const ABTestingFlowSlide = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-indigo-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Your A/B Test Playbook 🚀</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <FlowStep icon={Lightbulb} step="1" title="Formulate Hypothesis" description="Define what you believe will happen: 'We believe X will lead to Y.'" />
      <FlowStep icon={Target} step="2" title="Define Key Metric" description="Identify the specific, measurable outcome you're tracking." />
      <FlowStep icon={Play} step="3" title="Create Variants" description="Develop Control (A) and Variant (B) versions of the element." />
      <FlowStep icon={FlaskConical} step="4" title="Run Experiment" description="Randomly split users, expose them to variants, and collect data." />
      <FlowStep icon={BarChart2} step="5" title="Analyze Results" description="Compare performance, ensure statistical significance (e.g., p < 0.01)." />
      <FlowStep icon={RefreshCw} step="6" title="Decide & Iterate" description="Implement the winner, or learn from results and formulate a new test." />
    </div>
  </div>
);

// Define the type for the FlowStep component props
interface FlowStepProps {
  icon: React.ComponentType<{ size: number, className: string }>;
  step: string;
  title: string;
  description: string;
}

const FlowStep = ({ icon: Icon, step, title, description }: FlowStepProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border-t-4 border-indigo-300 hover:border-indigo-500 transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white text-xl font-bold mb-4">
      {step}
    </div>
    <Icon size={48} className="text-indigo-600 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-md text-gray-600">{description}</p>
  </div>
);

// Slide 8: Metrics & KPIs
const MetricsKPIsSlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 bg-yellow-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">What Gets Measured, Gets Managed: Metrics & KPIs 📈</h1>
    <div className="flex flex-col md:flex-row items-center justify-around gap-12 w-full max-w-4xl">
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 border-l-4 border-blue-400">
        <div className="relative mb-6">
          <Target size={80} className="text-blue-500" />
          <BarChart2 size={32} className="absolute -bottom-2 -right-2 text-green-500 bg-white rounded-full p-1 border-2 border-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Metrics vs. KPIs</h2>
        <ul className="text-lg text-gray-600 list-disc list-inside space-y-2">
          <li>**Performance Metrics:** Raw data points (e.g., Page Views). The "what."</li>
          <li>**KPIs:** Most important metrics aligned with business goals. The "why" and "how well."</li>
        </ul>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 border-l-4 border-red-400">
        <AlertCircle size={80} className="text-red-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Beware of Vanity Metrics!</h2>
        <p className="text-lg text-gray-600">
          Metrics that look good but don't genuinely reflect business value or user behavior
          (e.g., total downloads without active users). Focus on *actionable* and *impactful* metrics.
        </p>
      </div>
    </div>
  </div>
);

// Slide 9: Essential Metrics & KPIs
const EssentialMetricsKPIsSlide = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-blue-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Product's Health Check: Key Stages 🩺</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <StageCard
        icon={Magnet}
        title="Acquisition"
        metrics={["New User Sign-ups", "Website Traffic"]}
        kpis={["Cost Per Acquisition (CPA)", "Conversion Rate"]}
        color="bg-purple-100 border-purple-500"
      />
      <StageCard
        icon={Play}
        title="Activation"
        metrics={["Time to First Action", "Feature Completion Rate"]}
        kpis={["Activation Rate", "Feature Adoption Rate"]}
        color="bg-green-100 border-green-500"
      />
      <StageCard
        icon={Heart}
        title="Engagement"
        metrics={["Page Views/Session", "Session Duration"]}
        kpis={["DAU/WAU", "Stickiness (DAU/MAU)"]}
        color="bg-yellow-100 border-yellow-500"
      />
      <StageCard
        icon={RefreshCw}
        title="Retention"
        metrics={["User Churn Rate", "Repeat Purchases"]}
        kpis={["User Retention Rate", "Cohort Retention"]}
        color="bg-blue-100 border-blue-500"
      />
      <StageCard
        icon={Calculator}
        title="Monetization"
        metrics={["Paid Subscriptions", "Transaction Volume"]}
        kpis={["ARPU", "Customer Lifetime Value (CLV)"]}
        color="bg-red-100 border-red-500"
      />
      {/* Filler for layout if less than 6 */}
      <div className="hidden lg:flex items-center justify-center p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-gray-300">
        <HelpCircle size={48} className="text-gray-400" />
      </div>
    </div>
  </div>
);

// Define the type for the StageCard component props
interface StageCardProps {
  icon: React.ComponentType<{ size: number, className?: string }>;
  title: string;
  metrics: string[];
  kpis: string[];
  color: string;
}

const StageCard = ({ icon: Icon, title, metrics, kpis, color }: StageCardProps) => (
  <div className={`flex flex-col p-6 rounded-xl shadow-md border-l-4 ${color} transform hover:scale-105 transition-transform duration-300`}>
    <div className="flex items-center mb-4">
      <Icon size={32} className={`mr-3 ${color.split(' ')[0].replace('bg-', 'text-')}`} />
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="mb-4">
      <p className="font-semibold text-gray-700">Metrics:</p>
      <ul className="list-disc list-inside text-gray-600 text-sm">
        {metrics.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
    <div>
      <p className="font-semibold text-gray-700">KPIs:</p>
      <ul className="list-disc list-inside text-gray-600 text-sm">
        {kpis.map((k, i) => <li key={i}>{k}</li>)}
      </ul>
    </div>
  </div>
);

// Slide 10: North Star Metric
const NorthStarMetricSlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg transition-all duration-500">
    <Star size={120} className="text-yellow-400 mb-8 animate-pulse" />
    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center leading-tight">The North Star Metric: Your Guiding Light ✨</h1>
    <p className="text-xl text-gray-700 mb-8 max-w-3xl text-center">
      A single, unifying metric that best captures the core value your product delivers to customers,
      aligning the entire team towards a common goal.
    </p>
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Spotify</h3>
        <p className="text-lg text-gray-600">"Time Spent Listening to Music"</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Airbnb</h3>
        <p className="text-lg text-gray-600">"Nights Booked"</p>
      </div>
    </div>
    <p className="text-xl font-semibold text-gray-800">
      "If you had to pick <span className="text-purple-600">one metric</span> that defines your product's success, what would it be?"
    </p>
  </div>
);

// Slide 11: Case Study
const CaseStudySlide = () => (
  <div className="flex flex-col justify-center h-full p-8 bg-green-50 rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Case Study: E-commerce Checkout Optimization 🛒</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <CaseStudyStep
        icon={ShoppingCart}
        title="The Problem (Data-Driven)"
        description="High 65% cart abandonment rate detected via analytics, impacting revenue."
        color="text-red-500"
      />
      <CaseStudyStep
        icon={Lightbulb}
        title="Our Hypothesis"
        description="Long 5-step checkout is confusing. A single-page design will boost conversion."
        color="text-yellow-500"
      />
      <CaseStudyStep
        icon={FlaskConical}
        title="The A/B Test"
        description="Control (A): 5-step flow. Variant (B): New single-page design. KPI: Checkout Conversion Rate."
        color="text-blue-500"
      />
      <CaseStudyStep
        icon={Rocket}
        title="Action & Impact!"
        description="Variant B led to a 12% increase in conversion (p < 0.01)! Rolled out, increased revenue."
        color="text-green-500"
      />
    </div>
  </div>
);

// Define the type for the CaseStudyStep component props
interface CaseStudyStepProps {
  icon: React.ComponentType<{ size: number, className: string }>;
  title: string;
  description: string;
  color: string;
}

const CaseStudyStep = ({ icon: Icon, title, description, color }: CaseStudyStepProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 border-b-4 border-transparent hover:border-green-500">
    <Icon size={64} className={`${color} mb-4`} />
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-md text-gray-600">{description}</p>
  </div>
);

// Slide 12: Conclusion
const ConclusionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-xl shadow-lg transition-all duration-500">
    <h1 className="text-5xl font-extrabold mb-8 leading-tight">Your Data-Driven Product Journey</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
      <RecapItem icon={Gavel} title="Data is Your Bedrock" />
      <RecapItem icon={FlaskConical} title="A/B Testing is Your Tool" />
      <RecapItem icon={Compass} title="KPIs are Your Compass" />
    </div>
    <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
      "As Product Analysts, we are the interpreters of the data. We give voice to our users,
      guiding our products not by opinion, but by objective truth. Embrace the power of data
      to build products that truly resonate and succeed."
    </p>
  </div>
);

// Define the type for the RecapItem component props
interface RecapItemProps {
  icon: React.ComponentType<{ size: number, className: string }>;
  title: string;
}

const RecapItem = ({ icon: Icon, title }: RecapItemProps) => (
  <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg shadow-inner border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
    <Icon size={48} className="text-white mb-3" />
    <p className="text-lg font-semibold">{title}</p>
  </div>
);

// Slide 13: Q&A
const QASlide = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-xl shadow-lg transition-all duration-500">
    <HelpCircle size={120} className="text-purple-600 mb-8 animate-bounce" />
    <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Questions & Discussion</h1>
    <p className="text-2xl text-gray-600 mb-8">Your turn to ask!</p>
    <div className="p-4 bg-purple-50 rounded-lg shadow-inner">
      <p className="text-lg text-gray-700">Feel free to share your thoughts or any challenges you've faced with data in product analysis.</p>
    </div>
  </div>
);

// Main App Component
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const presenterName = "Arju Singh"; // Customize this

  const slides = [
    <TitleSlide presenterName={presenterName} />,
    <IntroductionSlide />,
    <DataVsGutFeelingSlide />,
    <PillarsSlide />,
    <ABTestingIntroSlide />,
    <WhyABTestingSlide />,
    <ABTestingFlowSlide />,
    <MetricsKPIsSlide />,
    <EssentialMetricsKPIsSlide />,
    <NorthStarMetricSlide />,
    <CaseStudySlide />,
    <QASlide />,
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center font-sans">
      <div className="slide-container relative my-8">
        {slides[currentSlide]}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={goToPrevSlide}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Previous
        </button>
        <button
          onClick={goToNextSlide}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Next
        </button>
      </div>
      <p className="mt-4 text-gray-600">Slide {currentSlide + 1} of {slides.length}</p>
    </div>
  );
}

export default App;