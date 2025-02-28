'use client'
import { useState, useEffect } from "react";
import { Complaint, ComplaintList, ComplaintItem, ComplaintHeader, NoComplaints, DetailView, DetailSection, DetailHeader, DetailField, DetailLabel, DetailValue, BackButton, FilePreview, StatusBadge, HomeButton } from './style';
import { FaUser, FaEnvelope, FaClipboardList, FaCalendarAlt, FaUsers, FaChevronLeft, FaHome } from "react-icons/fa";
import { MdDescription, MdAttachFile, MdCategory } from "react-icons/md";
import Link from "next/link";

interface ComplaintData {
  id?: string;
  name: string;
  email: string;
  category: string;
  productIssue?: string;
  complaintSubject: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
  peopleList: string[];
  files?: FileData[];
  status?: 'new' | 'in-progress' | 'resolved' | 'closed';
  submittedAt?: string;
}

interface FileData {
  name: string;
  size: number;
  type: string;
  url: string;
}

export default function ComplaintListPage() {
  const [complaints, setComplaints] = useState<ComplaintData[]>([]);
  const [selectedComplaint, setSelectedComplaint] = useState<ComplaintData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = () => {
      setLoading(true);
      
      try {
        const savedComplaints = localStorage.getItem('submittedComplaints');
        
        if (savedComplaints) {
          const parsedComplaints = JSON.parse(savedComplaints);
          setComplaints(parsedComplaints);
        } else {
          setComplaints([]);
        }
      } catch (error) {
        console.error("Error loading complaints:", error);
        setComplaints([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleComplaintClick = (complaint: ComplaintData) => {
    setSelectedComplaint(complaint);
  };

  const backToList = () => {
    setSelectedComplaint(null);
  };

  // Format the datetime
  const formatDateTime = (date: string, time: string) => {
    return `${date} às ${time}`;
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'new': return 'Nova';
      case 'in-progress': return 'Em Análise';
      case 'resolved': return 'Resolvida';
      case 'closed': return 'Encerrada';
      default: return 'Nova';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return '#3498db';
      case 'in-progress': return '#f39c12';
      case 'resolved': return '#2ecc71';
      case 'closed': return '#7f8c8d';
      default: return '#3498db';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  if (loading) {
    return <div className="loading">Carregando reclamações...</div>;
  }

  return (
    <div className="complaint-page-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/" passHref>
          <HomeButton>
            <FaHome /> Voltar à Página Inicial
          </HomeButton>
        </Link>
      </div>

      {selectedComplaint ? (
        <DetailView>
          <BackButton onClick={backToList}>
            <FaChevronLeft /> Voltar para a lista
          </BackButton>
          
          <DetailHeader>
            <h1 style={{ fontSize: '28px' }}>Reclamação: {selectedComplaint.id || 'ID não atribuído'}</h1>
            {selectedComplaint.status && (
              <StatusBadge 
                style={{ 
                  backgroundColor: getStatusColor(selectedComplaint.status),
                  padding: '8px 16px',
                  fontSize: '14px'
                }}
              >
                {getStatusLabel(selectedComplaint.status || 'new')}
              </StatusBadge>
            )}
          </DetailHeader>
          
          <DetailSection>
            <h2 style={{ fontSize: '24px' }}>
              <FaClipboardList /> Assunto da Reclamação
            </h2>
            <p style={{ fontSize: '20px', fontWeight: '500' }}>{selectedComplaint.complaintSubject}</p>
          </DetailSection>
          
          <DetailSection>
            <h2 style={{ fontSize: '24px' }}>
              <FaUser /> Informações Pessoais
            </h2>
            <DetailField>
              <DetailLabel style={{ fontSize: '18px' }}>Nome:</DetailLabel>
              <DetailValue style={{ fontSize: '18px' }}>{selectedComplaint.name || 'Não informado'}</DetailValue>
            </DetailField>
            <DetailField>
              <DetailLabel style={{ fontSize: '18px' }}>Email:</DetailLabel>
              <DetailValue style={{ fontSize: '18px' }}>{selectedComplaint.email || 'Não informado'}</DetailValue>
            </DetailField>
          </DetailSection>
          
          <DetailSection>
            <h2 style={{ fontSize: '24px' }}>
              <MdCategory /> Classificação
            </h2>
            <DetailField>
              <DetailLabel style={{ fontSize: '18px' }}>Categoria:</DetailLabel>
              <DetailValue style={{ fontSize: '18px' }}>
                {selectedComplaint.category === 'produto' ? 'Produto' : 
                 selectedComplaint.category === 'servico' ? 'Serviço' : 
                 selectedComplaint.category === 'atendimento' ? 'Atendimento' : 
                 selectedComplaint.category}
              </DetailValue>
            </DetailField>
            {selectedComplaint.productIssue && (
              <DetailField>
                <DetailLabel style={{ fontSize: '18px' }}>Problema do Produto:</DetailLabel>
                <DetailValue style={{ fontSize: '18px' }}>
                  {selectedComplaint.productIssue === 'defeito' ? 'Produto com defeito' : 
                   selectedComplaint.productIssue === 'estragado/partido' ? 'Produto estragado/partido' : 
                   selectedComplaint.productIssue === 'atraso' ? 'Produto atrasado na entrega' : 
                   selectedComplaint.productIssue === 'errado' ? 'Produto errado/diferente do negociado' : 
                   selectedComplaint.productIssue === 'incompleto' ? 'Produto incompleto' : 
                   selectedComplaint.productIssue}
                </DetailValue>
              </DetailField>
            )}
          </DetailSection>
          
          <DetailSection>
            <h2 style={{ fontSize: '24px' }}>
              <MdDescription /> Descrição
            </h2>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '18px' }}>{selectedComplaint.description}</p>
          </DetailSection>
          
          <DetailSection>
            <h2 style={{ fontSize: '24px' }}>
              <FaCalendarAlt /> Período da Reclamação
            </h2>
            <DetailField>
              <DetailLabel style={{ fontSize: '18px' }}>De:</DetailLabel>
              <DetailValue style={{ fontSize: '18px' }}>{formatDateTime(selectedComplaint.dateFrom, selectedComplaint.timeFrom)}</DetailValue>
            </DetailField>
            <DetailField>
              <DetailLabel style={{ fontSize: '18px' }}>Até:</DetailLabel>
              <DetailValue style={{ fontSize: '18px' }}>{formatDateTime(selectedComplaint.dateTo, selectedComplaint.timeTo)}</DetailValue>
            </DetailField>
          </DetailSection>
          
          {selectedComplaint.peopleList && selectedComplaint.peopleList.length > 0 && (
            <DetailSection>
              <h2 style={{ fontSize: '24px' }}>
                <FaUsers /> Pessoas Envolvidas
              </h2>
              <ul style={{ paddingLeft: '20px', fontSize: '18px' }}>
                {selectedComplaint.peopleList.map((person, index) => (
                  <li key={index}>{person}</li>
                ))}
              </ul>
            </DetailSection>
          )}
          
        
          {selectedComplaint.files && selectedComplaint.files.length > 0 && (
  <DetailSection>
    <h2><MdAttachFile /> Arquivos Anexados</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {selectedComplaint.files.map((file, index) => (
        <FilePreview key={index}>
          {file.type.startsWith('image/') ? (
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <img src={file.url} alt={file.name} style={{ maxWidth: '150px', maxHeight: '120px' }} />
            </a>
          ) : (
            <div className="file-icon"><MdAttachFile size={50} /></div>
          )}
          <div className="file-info">
            <div className="file-name">{file.name}</div>
            <div className="file-size">{formatFileSize(file.size)}</div>
          </div>
        </FilePreview>
      ))}
    </div>
  </DetailSection>
)}

          
          {selectedComplaint.submittedAt && (
            <DetailSection style={{ fontSize: '16px', color: '#666' }}>
              <DetailField>
                <DetailLabel>Data de Submissão:</DetailLabel>
                <DetailValue>{new Date(selectedComplaint.submittedAt).toLocaleString()}</DetailValue>
              </DetailField>
            </DetailSection>
          )}
        </DetailView>
      ) : (
        <>
          <ComplaintHeader>
            <h1 style={{ fontSize: '30px' }}>Lista de Reclamações</h1>
          </ComplaintHeader>
          
          {complaints.length === 0 ? (
            <NoComplaints>
              <p style={{ fontSize: '18px' }}>Nenhuma reclamação encontrada.</p>
              <p style={{ fontSize: '18px' }}>Utilize o formulário de reclamação para registrar uma nova reclamação.</p>
            </NoComplaints>
          ) : (
            <ComplaintList>
              {complaints.map((complaint, index) => (
                <ComplaintItem 
                  key={index} 
                  onClick={() => handleComplaintClick(complaint)}
                  style={{ 
                    padding: '18px', 
                    marginBottom: '15px',
                    height: 'auto',
                    minHeight: '80px'
                  }}
                >
                  <div className="complaint-id" style={{ fontSize: '18px', fontWeight: 'bold' }}>{complaint.id || `REC-${index + 1}`}</div>
                  <div className="complaint-subject" style={{ fontSize: '18px', fontWeight: '500', flex: '2' }}>{complaint.complaintSubject}</div>
                  <div className="complaint-category" style={{ fontSize: '16px' }}>
                    <span>
                      {complaint.category === 'produto' ? 'Produto' : 
                       complaint.category === 'servico' ? 'Serviço' : 
                       complaint.category === 'atendimento' ? 'Atendimento' : 
                       complaint.category}
                    </span>
                  </div>
               
                  {complaint.status && (
                    <div className="complaint-status">
                      <span style={{ 
                        backgroundColor: getStatusColor(complaint.status),
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '14px'
                      }}>
                        {getStatusLabel(complaint.status)}
                      </span>
                    </div>
                  )}
                </ComplaintItem>
              ))}
            </ComplaintList>
          )}
        </>
      )}
    </div>
  );
}