import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      icon: <Zap size={24} />,
      features: [
        '5 videos per month',
        '720p resolution',
        'Basic templates',
        'Standard support',
        'Watermark included'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      icon: <Crown size={24} />,
      features: [
        'Unlimited videos',
        '1080p resolution',
        'Premium templates',
        '3D effects',
        'Priority support',
        'No watermark',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      icon: <Rocket size={24} />,
      features: [
        'Everything in Pro',
        '4K resolution',
        'Custom templates',
        'Advanced 3D effects',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'Team collaboration'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Choose Your
            <span className="gradient-text"> Perfect Plan</span>
          </h2>
          <p className="section-description">
            Start creating amazing videos today. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
              <div className="pricing-header">
                <div className="plan-icon">
                  {plan.icon}
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                  {plan.price !== 'Free' && <span className="currency">$</span>}
                </div>
                <p className="pricing-period">{plan.period}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <Check size={16} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`pricing-button ${plan.popular ? 'featured' : ''}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p className="pricing-note">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;