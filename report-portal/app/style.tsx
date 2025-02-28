import styled, { keyframes } from 'styled-components';
import { IoFilter } from 'react-icons/io5';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 20px;
  background-color: #f9fafb;
  animation: ${fadeIn} 1s ease-out;
`;

export const Nav = styled.nav`
  padding: 16px;
  text-align: left;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const NavText = styled.span`
  color: #4b5563;
  font-size: 18px;
  animation: ${slideUp} 0.8s ease-out;
  
  &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const LinkText = styled.a`
  color: blue;
  text-decoration: underline;
  font-size: 18px;
  animation: ${slideUp} 1s ease-out;
  
  &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 40px 60px;
  height: 150px;
  margin-bottom: 0;
  animation: ${fadeIn} 1s ease-out;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  margin-right: 30px;
  animation: ${slideUp} 1.2s ease-out;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const HeaderText = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  animation: ${slideUp} 1.4s ease-out;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLinks = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  animation: ${slideUp} 1.6s ease-out;
`;

export const NavLink = styled.a`
  margin: 0 30px;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: blue;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  animation: ${slideUp} 1.8s ease-out;
  
  &:hover {
    animation: ${rotate} 2s infinite linear;
  }
`;

export const Icon = styled(IoFilter)`
  font-size: 30px;
  color: black;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const Section = styled.section`
  padding: 40px;
  text-align: center;
  height: calc(50vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slideUp} 2s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  color: #4b5563;
`;

export const MainTitle = styled.h1`
  font-size: 72px;
  color: black;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
`;

export const SectionText = styled.p`
  font-size: 24px;
  color: #6b7280;
  animation: ${fadeIn} 2s ease-out;
  
  &:hover {
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

export const ComplaintSection = styled.section`
  padding: 40px;
  text-align: center;
  margin-top: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  animation: ${slideUp} 2.2s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ComplaintTitle = styled.h2`
  font-size: 36px;
  color: #4b5563;
  margin-bottom: 20px;
`;

export const ComplaintText = styled.p`
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 30px;
  animation: ${fadeIn} 2s ease-out;
`;

export const ComplaintButton = styled.a`
  padding: 14px 28px;
  font-size: 18px;
  color: white;
  background: linear-gradient(90deg, blue, darkblue, blue);
  background-size: 200% auto;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s ease;
  animation: ${shimmer} 3s infinite linear;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
