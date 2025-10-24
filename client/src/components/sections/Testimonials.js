import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "This platform has revolutionized how I create content. The AI understands exactly what I want and delivers professional results every time.",
      author: "Sarah Chen",
      role: "Content Creator",
      avatar: "SC",
      rating: 5
    },
    {
      id: 2,
      text: "I've saved hours of editing time with this tool. The quality is incredible and the 3D effects are mind-blowing.",
      author: "Michael Rodriguez",
      role: "Video Producer",
      avatar: "MR",
      rating: 5
    },
    {
      id: 3,
      text: "As a small business owner, this has been a game-changer. I can create professional marketing videos without hiring expensive editors.",
      author: "Emily Johnson",
      role: "Business Owner",
      avatar: "EJ",
      rating: 5
    },
    {
      id: 4,
      text: "The prompt-based editing is so intuitive. I can focus on creativity instead of technical details.",
      author: "David Kim",
      role: "Creative Director",
      avatar: "DK",
      rating: 5
    },
    {
      id: 5,
      text: "The AI-generated videos look like they were made by a professional studio. I'm amazed by the quality.",
      author: "Lisa Wang",
      role: "Marketing Manager",
      avatar: "LW",
      rating: 5
    },
    {
      id: 6,
      text: "This tool has made video creation accessible to everyone. The results speak for themselves.",
      author: "Alex Thompson",
      role: "Freelancer",
      avatar: "AT",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            What Our Users
            <span className="gradient-text"> Are Saying</span>
          </h2>
          <p className="section-description">
            Join thousands of satisfied users who are creating amazing videos with our platform.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;