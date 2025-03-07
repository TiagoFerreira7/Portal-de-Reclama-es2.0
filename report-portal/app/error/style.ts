import { CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";

interface ErrorStylesInterface {
  container: CSSProperties;
  title: CSSProperties;
  message: CSSProperties;
  button: CSSProperties;
  icon: CSSProperties;
}

export const styles: ErrorStylesInterface = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#dc3545",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    color: "#6c757d",
    marginBottom: "2rem",
    maxWidth: "600px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  icon: {
    fontSize: "4rem",
    color: "#dc3545",
    marginBottom: "1rem",
  },
};

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

export const ErrorCard = styled.div`
  background-color: #ffebee;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 0.8s ease forwards;
`;

export const ErrorIconContainer = styled.div`
  background-color: #f44336;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  animation: scaleIn 0.6s ease forwards;
`;

export const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #dc3545;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const HomeButtonError = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
