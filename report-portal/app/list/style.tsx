import styled from 'styled-components';

export const Complaint = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ComplaintHeader = styled.div`
  margin-bottom: 20px;
  
  h1 {
    color: #333;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const ComplaintList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ComplaintItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 15px;
  height: auto;
  min-height: 80px;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  
  .complaint-id {
    font-weight: bold;
    font-size: 18px;
    min-width: 100px;
  }
  
  .complaint-subject {
    flex: 2;
    font-size: 18px;
    font-weight: 500;
  }
  
  .complaint-category {
    font-size: 16px;
    min-width: 120px;
    text-align: center;
    
    span {
      padding: 4px 8px;
      border-radius: 4px;
      background-color: #f0f0f0;
    }
  }
  
  .complaint-status {
    min-width: 120px;
    text-align: center;
  }
`;

export const NoComplaints = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 20px;
  
  p {
    margin: 10px 0;
    font-size: 18px;
    color: #666;
  }
`;

export const DetailView = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  h1 {
    margin: 0;
    color: #333;
    font-size: 28px;
  }
`;

export const DetailSection = styled.section`
  margin-bottom: 30px;
  
  h2 {
    color: #444;
    font-size: 24px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  p {
    color: #555;
    line-height: 1.6;
    font-size: 18px;
  }
`;

export const DetailField = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const DetailLabel = styled.div`
  width: 180px;
  font-weight: 600;
  color: #555;
  font-size: 18px;
`;

export const DetailValue = styled.div`
  flex: 1;
  color: #333;
  font-size: 18px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #3498db;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HomeButton = styled.button`
  background-color: #3498db;
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
    background-color: #2980b9;
  }
`;

export const StatusBadge = styled.div`
  background-color: #3498db;
  color: white;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
`;

export const FilePreview = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  
  img {
    max-width: 150px;
    max-height: 120px;
    object-fit: contain;
  }
  
  .file-icon {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
  }
  
  .file-info {
    width: 100%;
    padding-top: 10px;
    text-align: center;
  }
  
  .file-name {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .file-size {
    font-size: 14px;
    color: #7f8c8d;
    margin-top: 4px;
  }
`;