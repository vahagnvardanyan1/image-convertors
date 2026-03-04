import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface HowToProps {
  steps: Step[];
}

const HowTo: React.FC<HowToProps> = ({ steps }) => {
  return (
    <section className="how-it-works">
      <header className="how-it-works-header">How it works</header>
      <div>
        {steps.map((step, index) => (
          <div key={index} className="how-it-works-step">
            <h3 className="how-it-works-step-title">{step.title}</h3>
            <p className="how-it-works-step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowTo;
