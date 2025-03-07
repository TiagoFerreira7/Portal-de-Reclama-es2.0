import styled, { keyframes } from "styled-components";
import { IoFilter } from "react-icons/io5";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeInStable = keyframes`
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

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const navFadeIn = keyframes`
  0% { opacity: 0; transform: translateX(-50%); }
  100% { opacity: 1; transform: translateX(-50%); }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0;
  background-color: white;
  animation: ${fadeIn} 1s ease-out;
`;

export const Nav = styled.nav`
  padding: 16px;
  text-align: center;
  background-color: #00008b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const NavText = styled.span`
  color: white;
  font-size: 18px;
  animation: ${slideUp} 0.8s ease-out;

  &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
  }
`;

export const LinkText = styled.a`
  color: #87cefa;
  text-decoration: underline;
  font-size: 18px;
  animation: ${slideUp} 1s ease-out;

  &:hover {
    animation: ${pulse} 1s infinite ease-in-out;
    color: white;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 60px;
  height: 120px;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation-fill-mode: forwards;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.3s;

  img {
    border-radius: 12px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const HeaderText = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.5s;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  transition: all 0.3s ease;
`;

export const NavLinks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  animation: ${navFadeIn} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.7s;
`;

export const NavLink = styled.a`
  margin: 0 30px;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  position: relative;

  &:after {
    content: "";
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
  cursor: pointer;
`;

export const Icon = styled(IoFilter)`
  font-size: 24px;
  color: #1976d2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Section = styled.section`
  padding: 40px;
  text-align: center;
  height: calc(50vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  animation: ${slideUp} 2s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #4b5563;
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  color: black;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
`;

export const SectionText = styled.p`
  font-size: 20px;
  color: #6b7280;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 2s ease-out;

  &:hover {
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

export const ComplaintSection = styled.section`
  padding: 40px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
  background-color: white;
  position: relative;
  z-index: 1;
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
