"use client";

import React, { useState, useEffect } from 'react';

export default function InputCard() {
  const [isLoading, setIsLoading] = useState(false);
  const fullText = "אני מנהל עסק של כושר ותזונה לחיילים בישראל...";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 50; // מהירות כתיבה
    const deletingSpeed = 30; // מהירות מחיקה
    const pauseBeforeDelete = 2000; // המתנה לפני מחיקה
    const pauseBeforeType = 500; // המתנה לפני כתיבה מחדש

    if (!isDeleting && currentIndex < fullText.length) {
      // מצב כתיבה
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // סיימנו לכתוב - המתן ואז התחל למחוק
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // מצב מחיקה
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, deletingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // סיימנו למחוק - התחל מחדש
      const timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeType);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isDeleting, fullText]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('תוכן נוצר בהצלחה!');
  };

  return (
    <section className="ai-input-card" aria-label="AI Automation Input">
      <div className="ai-card-container">
        <form onSubmit={onSubmit} className="ai-form">
          {/* Main Content */}
          <div className="ai-card-main">
            <div className="typing-animation">
              {displayedText}
              <span className="typing-cursor">|</span>
            </div>
          </div>
        </form>

        {/* Send Button - Bottom Left of Card */}
        <button 
          onClick={onSubmit}
          className={`fixed-create-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="loading-spinner-small"></div>
              <span>יוצר...</span>
            </>
          ) : (
            <>

              <span>צור תוכן</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}


