import styled, { keyframes } from "styled-components";
import { Icon as IconifyIcon } from "@iconify/react";
import { IoFilter } from "react-icons/io5";
import { HeaderProps, ScrollProps } from "../../types";

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

const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 60px;
  height: 110px;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #f8f9fa;
  justify-content: space-between;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.3s;

  img {
    border-radius: 12px;
  }
`;

export const HeaderText = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slideUp} 1.4s ease-out;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.5s;
`;

export const NavLinks = styled.nav`
  position: absolute;
  left: 35%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.7s;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
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

export const Complaint = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ComplaintHeader = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.9s;
  margin-top: 10px;

  h1 {
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 26px;
    font-weight: 600;
    border-bottom: 2px solid #eaeaea;
    padding-bottom: 10px;
  }
`;

export const ComplaintList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ComplaintListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px 25px;
  margin-bottom: 12px;
  font-weight: bold;
  color: #555;
  border-bottom: 2px solid #eee;
  font-size: 15px;
  width: 100%;

  .header-name {
    width: 14%;
  }

  .header-email {
    width: 24%;
  }

  .header-category {
    width: 14%;
  }

  .header-subject {
    width: 33%;
  }

  .header-date {
    width: 15%;
    text-align: right;
  }
`;

export const ComplaintItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px 25px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 8px;
  height: auto;
  min-height: 80px;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    background-color: #f8f9ff;
  }

  .complaint-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    width: 14%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .complaint-email {
    font-size: 15px;
    color: #666;
    width: 24%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .complaint-category {
    font-size: 15px;
    color: #555;
    text-transform: capitalize;
    width: 14%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .complaint-subject {
    font-size: 15px;
    font-weight: 500;
    color: #444;
    width: 33%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .complaint-date {
    font-size: 14px;
    color: #777;
    width: 15%;
    text-align: right;
    white-space: nowrap;
  }

  .not-informed {
    color: #999;
    font-style: italic;
    font-weight: normal;
  }
`;

export const NoComplaints = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px dashed #ddd;

  p {
    margin: 10px 0;
    font-size: 16px;
    color: #666;

    &:first-child {
      font-size: 18px;
      font-weight: 500;
      color: #444;
    }
  }
`;

export const DetailView = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DetailHeader = styled.div`
  margin-bottom: 18px;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 12px;
  width: 100%;

  h2 {
    font-size: 22px;
    color: #333;
    margin: 0;
    font-weight: 600;
  }
`;

export const DetailSection = styled.div`
  margin-bottom: 12px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
  flex: 1 1 calc(50% - 10px);
  min-width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 17px;
    color: #444;
    margin-bottom: 10px;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;

    svg {
      color: #4a6fa5;
      font-size: 19px;
    }
  }
`;

export const DetailField = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px dashed #eee;
  font-size: 14px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const DetailLabel = styled.div`
  font-weight: 600;
  color: #555;
  width: 130px;
  flex-shrink: 0;
`;

export const DetailValue = styled.div`
  color: #333;
  flex-grow: 1;
  line-height: 1.5;
  word-break: break-word;

  .not-informed {
    color: #999;
    font-style: italic;
  }
`;

export const BackButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #4a6fa5;
  cursor: pointer;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background-color: #e9ecef;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    color: #2c4c7c;
  }
`;

export const HomeButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkblue;
  }
`;

export const StatusBadge = styled.div`
  background-color: blue;
  color: white;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
`;

export const FilePreview = styled.div`
  margin-top: 15px;
  display: block;

  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    object-fit: contain;
  }
`;

export const PageContainer = styled.div`
  display: block;
  justify-content: center;
  padding: 160px 40px 20px 40px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
`;

export const ListColumn = styled.div<{ hasSelectedComplaint: boolean }>`
  width: ${(props) => (props.hasSelectedComplaint ? "40%" : "100%")};
  max-width: 1400px;
  padding-right: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const DetailColumn = styled.div`
  width: 60%;
  overflow-y: auto;
  border-left: 1px solid #eee;
  padding-left: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  color: #333;
`;

export const HomeButtonContainer = styled.div`
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 1.1s;
  margin-top: -5px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  flex: 1;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darkblue;
  }

  svg {
    margin-right: 5px;
  }
`;

export const ClearSearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c82333;
  }

  svg {
    margin-right: 5px;
  }
`;

export const SearchInfo = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  color: #666;
  font-size: 16px;
  text-align: center;
`;

export const ComplaintDetailOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 20px;
  overflow-y: auto;
  cursor: pointer;
`;

export const ComplaintDetailContainer = styled.div`
  background-color: #f9f9fa;
  border-radius: 10px;
  width: 100%;
  max-width: 1100px;
  height: 90vh;
  padding: 25px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  animation: ${slideUp} 0.4s ease-out;
  cursor: default;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
`;

export const ListColumnStyled = styled(ListColumn)<{
  hasSelectedComplaint: boolean;
}>`
  width: ${(props) => (props.hasSelectedComplaint ? "40%" : "100%")};
  filter: ${(props) => (props.hasSelectedComplaint ? "blur(4px)" : "none")};
  pointer-events: ${(props) => (props.hasSelectedComplaint ? "none" : "auto")};
`;
