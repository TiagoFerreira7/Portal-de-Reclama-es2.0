import { CSSProperties } from "react";
import styled, {
  css,
  keyframes as styledKeyframes,
  createGlobalStyle,
} from "styled-components";

interface SuccessStylesInterface {
  successContainer: CSSProperties;
  successCard: CSSProperties;
  successIcon: CSSProperties;
  successTitle: CSSProperties;
  successMessage: CSSProperties;
  homeButton: CSSProperties;
  homeButtonHover: CSSProperties;
}

export const GlobalKeyframes = createGlobalStyle`
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

export const styles: SuccessStylesInterface = {
  successContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },

  successCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px black)",
    padding: "40px",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    animation: "fadeIn 0.8s ease forward<s",
  },

  successIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
    margin: "0 auto 20px",
    backgroundColor: "#4caf50",
    borderRadius: "50%",
    color: "white",
    animation: "scaleIn 1s ease forwards",
  },

  successTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "16px",
  },

  successMessage: {
    color: "#666",
    lineHeight: 1.6,
    marginBottom: "30px",
    animationDelay: "0.5s",
  },

  homeButton: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "2px solid #1976d2",
    borderRadius: "4px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  homeButtonHover: {
    backgroundColor: "#0d47a1",
    transform: "translateY(-3px)",
    boxShadow:
      "0 7px 14px rgba(0, 80, 255, 0.3), 0 0 10px rgba(0, 120, 255, 0.5)",
  },
};

export const drawCheckmarkAnimation = styledKeyframes`
  0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
  100% { stroke-dasharray: 100; stroke-dashoffset: 0; }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

export const SuccessCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 0.8s ease forwards;
`;

export const SuccessIconContainer = styled.div`
  background-color: #4caf50;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  animation: scaleIn 0.6s ease forwards;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.7);
`;

export const CheckmarkPath = styled.path`
  animation: ${drawCheckmarkAnimation} 0.8s ease forwards 0.5s;
`;

export const SuccessTitleHeading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const SuccessMessageParagraph = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

interface HomeButtonProps {
  $isHovering: boolean;
  as?: string;
}

export const HomeButtonWrapper = styled.div<HomeButtonProps>`
  text-decoration: none;
  display: inline-block;

  ${(props) =>
    props.$isHovering &&
    css`
      button,
      span {
        background-color: white;
        color: #1976d2;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `}
`;

export const HomeButton = styled.button`
  background-color: #1976d2;
  color: white;
  border: 2px solid #1976d2;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: buttonRgbBorder 3s infinite ease-in-out;
  text-decoration: none;
  display: inline-block;
`;
