import { CSSProperties } from 'react';

interface StylesInterface {
  successContainer: CSSProperties;
  successCard: CSSProperties;
  successIcon: CSSProperties;
  successTitle: CSSProperties;
  successMessage: CSSProperties;
  homeButton: CSSProperties;
  homeButtonHover: CSSProperties;
}

export const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes scaleIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes drawCheckmark {
    0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
    100% { stroke-dasharray: 100; stroke-dashoffset: 0; }
  }
  
  @keyframes blueShift {
    0% { background-color: #1976d2; }
    50% { background-color: #0d47a1; }
    100% { background-color: #1976d2; }
  }
  
  @keyframes rgbFlow {
    0% { box-shadow: 0 0 10px rgba(0, 0, 255, 0.7); }
    33% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.7); }
    66% { box-shadow: 0 0 10px rgba(0, 128, 255, 0.7); }
    100% { box-shadow: 0 0 10px rgba(0, 0, 255, 0.7); }
  }
  
  @keyframes buttonRgbBorder {
    0% { border-color: #1976d2; }
    33% { border-color: #00b0ff; }
    66% { border-color: #2979ff; }
    100% { border-color: #1976d2; }
  }
`;

export const styles: StylesInterface = {
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  
  successCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    animation: 'fadeIn 0.8s ease forwards, rgbFlow 3s infinite ease-in-out',
  },
  
  successIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    backgroundColor: '#4caf50',
    borderRadius: '50%',
    color: 'white',
    animation: 'scaleIn 0.5s ease forwards',
  },
  
  successTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '16px',
    animation: 'fadeIn 0.5s ease forwards',
    animationDelay: '0.3s',
  },
  
  successMessage: {
    color: '#666',
    lineHeight: 1.6,
    marginBottom: '30px',
    animation: 'fadeIn 0.5s ease forwards',
    animationDelay: '0.5s',
  },
  
  homeButton: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: '2px solid #1976d2',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: 'fadeIn 0.5s ease forwards, blueShift 3s infinite, buttonRgbBorder 2s infinite ease-in-out',
    animationDelay: '0.7s, 1s, 0.5s',
  },
  
  homeButtonHover: {
    backgroundColor: '#0d47a1',
    transform: 'translateY(-3px)',
    boxShadow: '0 7px 14px rgba(0, 80, 255, 0.3), 0 0 10px rgba(0, 120, 255, 0.5)',
  }
};
