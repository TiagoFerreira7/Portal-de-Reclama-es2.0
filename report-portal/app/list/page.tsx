"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaEnvelope, FaClipboardList, FaCalendarAlt, FaUsers, FaChevronLeft, FaSearch, FaTimes, FaFilter, } from "react-icons/fa";
import { MdDescription, MdAttachFile, MdCategory } from "react-icons/md";
import { PageContainer, ComplaintHeader, ComplaintList, ComplaintItem, NoComplaints, DetailView, DetailSection, DetailHeader, DetailField, DetailLabel, DetailValue, BackButton, FilePreview, SearchContainer, SearchInput, SearchButton, ClearSearchButton, SearchInfo, ComplaintDetailOverlay, ComplaintDetailContainer, ListColumn, Header as StyledHeader, LogoContainer, HeaderTitle, NavLinks, NavLink, FilterIcon, Icon, ComplaintListHeader, } from "./style";
import { ComplaintData, FileData } from "../../types";

function HeaderComponent() {
  const router = useRouter();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/report", label: "Criar Reclamação" },
    { href: "/list", label: "Listagem" },
  ];

  return (
    <StyledHeader>
      <LogoContainer>
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          priority={true}
        />
        <HeaderTitle>INSERTPAGE</HeaderTitle>
      </LogoContainer>

      <NavLinks>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref legacyBehavior>
            <NavLink>{link.label}</NavLink>
          </Link>
        ))}
      </NavLinks>

      <FilterIcon>
        <Icon />
      </FilterIcon>
    </StyledHeader>
  );
}

export default function ComplaintListPage() {
  const [complaints, setComplaints] = useState<ComplaintData[]>([]);
  const [filteredComplaints, setFilteredComplaints] = useState<ComplaintData[]>(
    []
  );
  const [selectedComplaint, setSelectedComplaint] =
    useState<ComplaintData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const fetchComplaints = () => {
    setLoading(true);

    try {
      const savedComplaints = localStorage.getItem("submittedComplaints");

      if (savedComplaints) {
        const parsedComplaints = JSON.parse(savedComplaints);
        setComplaints(parsedComplaints);
        setFilteredComplaints(parsedComplaints);
      } else {
        setComplaints([]);
        setFilteredComplaints([]);
      }
    } catch (error) {
      console.error("Error loading complaints:", error);
      setComplaints([]);
      setFilteredComplaints([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setIsSearched(true);
    const filtered = complaints.filter(
      (complaint) =>
        (!searchName ||
          complaint.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!searchEmail ||
          complaint.email.toLowerCase().includes(searchEmail.toLowerCase()))
    );
    setFilteredComplaints(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const resetSearch = () => {
    setSearchName("");
    setSearchEmail("");
    setFilteredComplaints(complaints);
    setIsSearched(false);
  };

  const handleComplaintClick = (complaint: ComplaintData) => {
    setSelectedComplaint(complaint);
  };

  const backToList = () => {
    setSelectedComplaint(null);
  };

  const formatDateTime = (date: string, time: string) => {
    return `${date} às ${time}`;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  if (loading) {
    return <div className="loading">Carregando reclamações...</div>;
  }

  return (
    <PageContainer>
      <HeaderComponent />
      <ListColumn hasSelectedComplaint={!!selectedComplaint}>
        <ComplaintHeader>
          <h1>Lista de Reclamações</h1>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar por Nome"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SearchInput
              type="text"
              placeholder="Buscar por Email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SearchButton onClick={handleSearch}>
              <FaSearch /> Pesquisar
            </SearchButton>
            {isSearched && (
              <ClearSearchButton onClick={resetSearch}>
                <FaTimes /> Limpar
              </ClearSearchButton>
            )}
          </SearchContainer>

          {isSearched && filteredComplaints.length > 0 && (
            <SearchInfo>
              {filteredComplaints.length} reclamaç
              {filteredComplaints.length !== 1 ? "ões" : ""} encontrada
              {filteredComplaints.length !== 1 ? "s" : ""}
            </SearchInfo>
          )}

          {filteredComplaints.length === 0 ? (
            <NoComplaints>
              <p>Nenhuma reclamação encontrada.</p>
              <p>
                {isSearched
                  ? "Tente ajustar seus critérios de pesquisa."
                  : "Utilize o formulário de reclamação para registrar uma nova reclamação."}
              </p>
            </NoComplaints>
          ) : (
            <ComplaintList>
              <ComplaintListHeader>
                <div className="header-name">Nome</div>
                <div className="header-email">Email</div>
                <div className="header-category">Categoria</div>
                <div className="header-subject">Assunto</div>
                <div className="header-date">Data</div>
              </ComplaintListHeader>
              {filteredComplaints.map((complaint, index) => (
                <ComplaintItem
                  key={index}
                  onClick={() => handleComplaintClick(complaint)}
                >
                  <div className="complaint-name">
                    {complaint.name ? (
                      complaint.name
                    ) : (
                      <span className="not-informed">Não informado</span>
                    )}
                  </div>
                  <div className="complaint-email">
                    {complaint.email ? (
                      complaint.email
                    ) : (
                      <span className="not-informed">Não informado</span>
                    )}
                  </div>
                  <div className="complaint-category">{complaint.category}</div>
                  <div className="complaint-subject">
                    {complaint.complaintSubject}
                  </div>
                  <div className="complaint-date">
                    {formatDateTime(complaint.dateFrom, complaint.timeFrom)}
                  </div>
                </ComplaintItem>
              ))}
            </ComplaintList>
          )}
        </ComplaintHeader>
      </ListColumn>

      {selectedComplaint && (
        <ComplaintDetailOverlay
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              backToList();
            }
          }}
        >
          <ComplaintDetailContainer>
            <BackButton onClick={backToList}>
              <FaChevronLeft /> Voltar para a lista
            </BackButton>
            <DetailView>
              <DetailHeader>
                <h2>Detalhes da Reclamação</h2>
              </DetailHeader>

              <DetailSection>
                <h3>
                  <FaUser /> Informações Pessoais
                </h3>
                <DetailField>
                  <DetailLabel>Nome:</DetailLabel>
                  <DetailValue>
                    {selectedComplaint.name || "Não informado"}
                  </DetailValue>
                </DetailField>
                <DetailField>
                  <DetailLabel>Email:</DetailLabel>
                  <DetailValue>
                    {selectedComplaint.email || "Não informado"}
                  </DetailValue>
                </DetailField>
              </DetailSection>

              <DetailSection>
                <h3>
                  <MdCategory /> Classificação
                </h3>
                <DetailField>
                  <DetailLabel>Categoria:</DetailLabel>
                  <DetailValue>{selectedComplaint.category}</DetailValue>
                </DetailField>
                {selectedComplaint.productIssue && (
                  <DetailField>
                    <DetailLabel>Problema do Produto:</DetailLabel>
                    <DetailValue>{selectedComplaint.productIssue}</DetailValue>
                  </DetailField>
                )}
              </DetailSection>

              <DetailSection>
                <h3>
                  <FaClipboardList /> Detalhes da Reclamação
                </h3>
                <DetailField>
                  <DetailLabel>Tema:</DetailLabel>
                  <DetailValue>
                    {selectedComplaint.complaintSubject}
                  </DetailValue>
                </DetailField>
                <DetailField>
                  <DetailLabel>Descrição:</DetailLabel>
                  <DetailValue>{selectedComplaint.description}</DetailValue>
                </DetailField>
              </DetailSection>

              <DetailSection>
                <h3>
                  <FaCalendarAlt /> Período da Ocorrência
                </h3>
                <DetailField>
                  <DetailLabel>De:</DetailLabel>
                  <DetailValue>
                    {formatDateTime(
                      selectedComplaint.dateFrom,
                      selectedComplaint.timeFrom
                    )}
                  </DetailValue>
                </DetailField>
                <DetailField>
                  <DetailLabel>Até:</DetailLabel>
                  <DetailValue>
                    {formatDateTime(
                      selectedComplaint.dateTo,
                      selectedComplaint.timeTo
                    )}
                  </DetailValue>
                </DetailField>
              </DetailSection>

              {selectedComplaint.peopleList &&
                selectedComplaint.peopleList.length > 0 && (
                  <DetailSection>
                    <h3>
                      <FaUsers /> Outras Pessoas Envolvidas
                    </h3>
                    {selectedComplaint.peopleList.map((person, index) => (
                      <DetailField key={index}>
                        <DetailLabel>Pessoa {index + 1}:</DetailLabel>
                        <DetailValue>{person}</DetailValue>
                      </DetailField>
                    ))}
                  </DetailSection>
                )}

              {selectedComplaint.files &&
                selectedComplaint.files.length > 0 && (
                  <DetailSection>
                    <h3>
                      <MdAttachFile /> Arquivos Anexados
                    </h3>
                    {selectedComplaint.files.map((file: FileData, index) => (
                      <DetailField key={index}>
                        <DetailLabel>Arquivo {index + 1}:</DetailLabel>
                        <DetailValue>
                          {file.name} ({formatFileSize(file.size)})
                          {file.type.startsWith("image/") && (
                            <FilePreview>
                              <img src={file.url} alt={file.name} />
                            </FilePreview>
                          )}
                        </DetailValue>
                      </DetailField>
                    ))}
                  </DetailSection>
                )}
            </DetailView>
          </ComplaintDetailContainer>
        </ComplaintDetailOverlay>
      )}
    </PageContainer>
  );
}
