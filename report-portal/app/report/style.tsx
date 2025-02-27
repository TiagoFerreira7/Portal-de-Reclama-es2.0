import styled, { keyframes } from 'styled-components';

// EXISTING ANIMATIONS
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glowingBorder = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); }
  50% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.5); }
  100% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); }
`;

const highlight = keyframes`
  0% { background-color: transparent; opacity: 1; }
  50% { background-color: rgba(255, 255, 150, 0.3); opacity: 1; }
  100% { background-color: transparent; opacity: 1; }
`;

const rippleEffect = keyframes`
  0% { 
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  100% { 
    box-shadow: 0 0 0 20px rgba(0, 123, 255, 0);
  }
`;

const textGlow = keyframes`
  0% { text-shadow: 0 0 0px rgba(0, 123, 255, 0); }
  50% { text-shadow: 0 0 10px rgba(0, 123, 255, 0.6); }
  100% { text-shadow: 0 0 0px rgba(0, 123, 255, 0); }
`;

const wiggle = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const scaleUpDown = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// EXISTING FAQ ANIMATIONS
const expandCollapse = keyframes`
  0% { max-height: 0; opacity: 0; }
  100% { max-height: 500px; opacity: 1; }
`;

const arrowRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(90deg); }
`;

const borderWave = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 10px; }
  100% { border-radius: 5px; }
`;

// NEW ANIMATIONS
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const wobble = keyframes`
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-5px) rotate(-2deg); }
  30% { transform: translateX(4px) rotate(2deg); }
  45% { transform: translateX(-3px) rotate(-1deg); }
  60% { transform: translateX(2px) rotate(1deg); }
  75% { transform: translateX(-1px) rotate(-0.5deg); }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }

  &:focus-within {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const FormTitle = styled.h1`
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  transition: color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  
  &:hover {
    color: #007bff;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 20px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  &:hover {
    color: #007bff;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 1;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  transition: transform 0.2s ease, color 0.2s ease;
  
  &:hover {
    transform: translateX(3px);
    color: #007bff;
    animation: ${textGlow} 1.5s ease infinite;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 1;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    transform: translateY(-2px);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 100px;
  opacity: 1;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    transform: translateY(-2px);
  }
`;

export const SubmitButton = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 200px; 
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.7s;
  opacity: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, blue, #0056b3, blue);
    background-size: 50% 100%;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 255, 0.3);
  }
  
  &:hover::before {
    animation: shimmerEffect 2s infinite linear;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    animation: none;
  }

  @keyframes shimmerEffect {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(50%);
    }
  }
`;

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

export const FileUploadInfo = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
  
  &:hover {
    color: #007bff;
    animation: ${scaleUpDown} 1s ease-in-out;
  }
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 1s infinite ease-in-out;
  }
  
  &:active {
    animation: ${clickAnimation} 0.2s ease, ${rippleEffect} 0.8s ease-out;
  }
`;

export const FilePreviewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  border: 1px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
    animation: ${highlight} 2s ease-in-out;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.span`
  font-size: 0.9rem;
  color: #333;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:hover {
    color: #007bff;
    animation: ${wiggle} 0.5s ease-in-out;
  }
`;

export const FileSize = styled.span`
  font-size: 0.8rem;
  color: #555;
  
  &:hover {
    color: #007bff;
  }
`;

export const RemoveFileButton = styled.button`
  background-color: transparent;
  border: none;
  color: #dc3545;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #c82333;
    transform: scale(1.1);
    animation: ${rotate} 1s ease-in-out;
  }
  
  &:active {
    animation: ${clickAnimation} 0.2s ease;
  }
`;

export const FileErrors = styled.div`
  margin-top: 10px;
  color: #dc3545;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.p`
  margin: 5px 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 15px;
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;
  
  &:hover {
    transform: translateX(3px);
    color: #007bff;
    animation: ${textGlow} 1.5s ease infinite;
  }
  
  input:checked + span {
    animation: ${pulse} 0.5s ease-out;
  }
`;

export const DateTimeGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateTimePair = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  gap: 20px;
`;

export const DateTimeLabel = styled.span`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #007bff;
    transform: translateX(3px);
    animation: ${wiggle} 0.5s ease-in-out;
  }
`;

export const InputPair = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const DateInput = styled(Input)`
  flex: 1;
`;

export const TimeInput = styled(Input)`
  flex: 1; 
`;

export const FormSectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  &:hover {
    color: #007bff;
  }
`;

export const FileIcon = styled.div`
  font-size: 2rem;
  color: #888;
  margin-right: 10px;
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(15deg);
    color: #007bff;
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: #0056b3;
  }
  
  option:hover {
    background-color: #007bff;
    color: white;
  }
`;

// ANIMATED COMPONENTS
export const SuccessMessage = styled.div`
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid rgba(0, 123, 255, 0.3);
  border-radius: 50%;
  border-top-color: #007bff;
  animation: ${rotate} 1s infinite linear;
  margin: 0 auto;
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover > div {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(10px);
  
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
  margin: 10px 0;
  overflow: hidden;
`;

interface ProgressFillProps {
  progress: string;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  width: ${props => props.progress || '0%'};
  transition: width 0.5s ease-in-out;
  animation: ${shimmer} 2s infinite linear;
  background-size: 200% 100%;
`;

export const FloatingLabel = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
    background: none;
    transition: border-color 0.3s ease, padding-top 0.3s;
    
    &:focus, &:not(:placeholder-shown) {
      padding-top: 20px;
      border-color: #007bff;
      outline: none;
    }
    
    &:focus ~ label, &:not(:placeholder-shown) ~ label {
      transform: translateY(-20px) scale(0.8);
      color: #007bff;
    }
  }
  
  label {
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: transform 0.3s ease, color 0.3s;
    color: #555;
  }
`;

// ENHANCED FAQ COMPONENTS
export const FaqContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

export const FaqItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  animation: ${fadeInScale} 0.5s ease-out forwards;
  opacity: 0;
  transform-origin: center;
  
  &:nth-child(odd) {
    animation-delay: calc(0.1s * var(--index, 1));
  }
  
  &:nth-child(even) {
    animation-delay: calc(0.15s * var(--index, 1));
  }
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    animation: ${borderWave} 2s infinite ease-in-out;
  }
`;


export const FaqQuestion = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #e9ecef;
    color: #007bff;
    animation: ${wobble} 0.8s ease;
  }
  
  &.active {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

export const FaqArrow = styled.span`
  transform: rotate(0deg);
  transition: transform 0.3s ease;
  
  &.active {
    transform: rotate(90deg);
    animation: ${arrowRotate} 0.3s ease-out;
  }
`;

export const FaqAnswer = styled.div`
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
  background-color: #fff;
  
  &.active {
    padding: 15px;
    max-height: 500px;
    animation: ${expandCollapse} 0.5s ease-out, ${slideInRight} 0.4s ease-out;
  }
  
  p {
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &.active p {
    opacity: 1;
    animation: ${fadeIn} 0.5s ease-out 0.1s forwards;
  }
  
  &:hover p {
    animation: ${pulse} 1s ease-in-out;
  }
`;

const FaqTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  transition: color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  
  &:hover {
    color: #007bff;
    animation: ${textGlow} 1.5s ease infinite;
  }
`;