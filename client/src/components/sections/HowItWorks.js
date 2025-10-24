import React from 'react';
import { PenTool, Wand2, Download } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <PenTool size={32} />,
      title: 'Write Your Prompt',
      description: 'Describe your video idea in natural language. Our AI understands context and creative intent.'
    },
    {
      icon: <Wand2 size={32} />,
      title: 'AI Magic Happens',
      description: 'Our advanced AI processes your prompt and generates a professional video with effects and transitions.'
    },
    {
      icon: <Download size={32} />,
      title: 'Download & Share',
      description: 'Get your finished video in high quality and share it with the world or use it in your projects.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            How It Works in
            <span className="gradient-text"> 3 Simple Steps</span>
          </h2>
          <p className="section-description">
            Creating professional videos has never been easier. Our AI does the heavy lifting for you.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;