"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUser, FaEnvelope, FaClipboardList, FaCalendarAlt, FaUsers, FaChevronDown, FaChevronUp, FaQuestionCircle, FaArrowLeft, FaFilter, FaExclamationTriangle } from "react-icons/fa";
import { MdDescription, MdAttachFile, MdCategory, MdSend, MdClose, MdAdd } from "react-icons/md";
import { FormContainer, FormTitle, FormSection, SectionTitle, FormGroup, Label, Input, Textarea, TextareaStyled, SubmitButton, FileUploadContainer, FileUploadInfo, FileInputLabel, FilePreviewCard, FileInfo, FileName, FileSize, RemoveFileButton, FileErrors, ErrorMessage, CheckboxGroup, CheckboxLabel, CategorySelect, FAQContainer, FAQTitle, FaqItem, FaqQuestion, FaqAnswer, FormPageContainer, PageContainer, Header as StyledHeader, LogoContainer, HeaderText, HeaderTitle, NavLinks, NavLink, FilterIcon, DateTimeContainer, DateTimePair, DateTimeLabel, InputPairContainer, DateInput, TimeInput, PeopleInputContainer, AddPersonButton, PeopleTagsContainer, PersonTag, RemovePersonButton, ComplaintPageWrapper, ContentWrapper, ModalOverlay, ModalContainer, ModalTitle, ModalContent, ModalButtonGroup, ModalButton, NavLinkAnchor, PreviewIframe, PreviewImage, PreviewVideo } from "./style";
import DOMPurify from "dompurify";
import { Icon } from "../style";

function HeaderComponent({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
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
          <NavLinkAnchor
            key={link.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.href);
            }}
          >
            <NavLink>{link.label}</NavLink>
          </NavLinkAnchor>
        ))}
      </NavLinks>

      <FilterIcon>
        <Icon />
      </FilterIcon>
    </StyledHeader>
  );
}

export default function ComplaintForm() {
  const router = useRouter();

  const initialFormData = {
    name: "",
    email: "",
    category: "",
    productIssue: "",
    complaintSubject: "",
    description: "",
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
    otherPeople: "",
    checkbox1: false,
    checkbox2: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState<File[]>([]);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [peopleList, setPeopleList] = useState<string[]>([]);
  const [activeFaqItem, setActiveFaqItem] = useState<number | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null
  );

  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ];
  const maxFileSize = 10 * 1024 * 1024;

  const faqItems = [
    {
      question: "Como posso acompanhar minha reclamação?",
      answer:
        "Após o envio da reclamação, você receberá um número de protocolo por email. Utilize esse número para acompanhar o status da sua reclamação através da seção 'Minhas Reclamações' no site ou aplicativo.",
    },
    {
      question: "Qual o prazo para resolução da minha reclamação?",
      answer:
        "O prazo para análise inicial é de até 5 dias úteis. A resolução completa pode variar de acordo com a complexidade do caso, mas nosso compromisso é resolver em até 10 dias úteis.",
    },
    {
      question: "Posso alterar detalhes da minha reclamação depois de enviada?",
      answer:
        "Não é possível alterar os detalhes após o envio, mas você pode adicionar informações complementares através da seção 'Minhas Reclamações' no site ou aplicativo.",
    },
    {
      question: "Por que preciso informar o período da reclamação?",
      answer:
        "O período ajuda nossa equipe a investigar com precisão os eventos relacionados à sua reclamação e verificar registros específicos daquele intervalo de tempo.",
    },
    {
      question: "Os arquivos que enviei são confidenciais?",
      answer:
        "Sim, todos os arquivos enviados são tratados conforme nossa política de privacidade e acessados apenas pela equipe responsável pela análise da sua reclamação.",
    },
  ];

  const requiredFields: Set<string> = new Set([
    "category",
    "complaintSubject",
    "description",
    "dateFrom",
    "dateTo",
    "timeFrom",
    "timeTo",
  ]);

  const fieldLabels: { [key: string]: string } = {
    name: "Nome",
    email: "Email",
    category: "Categoria",
    productIssue: "Problema do Produto",
    complaintSubject: "Tema da Reclamação",
    description: "Descrição",
    dateFrom: "Data de Início",
    dateTo: "Data de Fim",
    timeFrom: "Hora de Início",
    timeTo: "Hora de Fim",
    otherPeople: "Outras Pessoas",
  };

  const today = new Date().toISOString().split("T")[0];

  const fetchComplaints = useCallback(() => {
    const existingComplaints = localStorage.getItem("submittedComplaints");
    return existingComplaints ? JSON.parse(existingComplaints) : [];
  }, []);

  const hasUnsavedChanges = useCallback(() => {
    const formHasData = Object.values(formData).some((value) => {
      if (typeof value === "string") return value.trim() !== "";
      if (typeof value === "boolean") return value === true;
      return false;
    });

    return formHasData || peopleList.length > 0 || files.length > 0;
  }, [formData, peopleList, files]);

  const handleNavigation = useCallback(
    (path: string) => {
      if (hasUnsavedChanges() && !isSubmitting) {
        setPendingNavigation(path);
        setShowExitModal(true);
      } else {
        router.push(path);
      }
    },
    [hasUnsavedChanges, isSubmitting, router]
  );

  const confirmNavigation = useCallback(() => {
    if (pendingNavigation) {
      router.push(pendingNavigation);
    }
    setShowExitModal(false);
  }, [pendingNavigation, router]);

  const cancelNavigation = useCallback(() => {
    setPendingNavigation(null);
    setShowExitModal(false);
  }, []);

  const toggleFaq = (index: number) => {
    if (activeFaqItem === index) {
      setActiveFaqItem(null);
    } else {
      setActiveFaqItem(index);
    }
  };

  const sanitizeInput = (input: string): string => {
    const purified = DOMPurify.sanitize(input);

    return purified
      .replace(/'/g, "''")
      .replace(/\\/g, "\\\\")
      .replace(/\u0000/g, "")
      .replace(/\u001a/g, "");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
    } else {
      const sanitizedValue = sanitizeInput(value);
      setFormData({ ...formData, [name]: sanitizedValue });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newErrors: string[] = [];
    const newFiles: File[] = [...files];

    Array.from(selectedFiles).forEach((file) => {
      if (!allowedFileTypes.includes(file.type)) {
        newErrors.push(`${file.name}: Tipo de arquivo não permitido`);
        return;
      }

      if (file.size > maxFileSize) {
        newErrors.push(`${file.name}: Tamanho excede 10MB`);
        return;
      }

      const sanitizedFileName = sanitizeInput(file.name);
      if (sanitizedFileName !== file.name) {
        newErrors.push(
          `${file.name}: Nome de arquivo contém caracteres não permitidos`
        );
        return;
      }

      newFiles.push(file);
    });

    setFiles(newFiles);
    setFileErrors(newErrors);

    e.target.value = "";
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const getFilePreview = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      return <PreviewImage src={fileURL} alt={file.name} />;
    } else if (file.type === "application/pdf") {
      return <PreviewIframe src={fileURL} title={file.name} />;
    } else if (file.type.startsWith("video/")) {
      return (
        <PreviewVideo controls>
          <source src={fileURL} type={file.type} />
        </PreviewVideo>
      );
    }
    return null;
  };

  const handlePeopleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && formData.otherPeople.trim() !== "") {
      e.preventDefault();
      const newPerson = sanitizeInput(formData.otherPeople.trim());
      if (newPerson && !peopleList.includes(newPerson)) {
        setPeopleList([...peopleList, newPerson]);
        setFormData({ ...formData, otherPeople: "" });
      }
    }
  };

  const addPerson = () => {
    if (formData.otherPeople.trim() !== "") {
      const newPerson = sanitizeInput(formData.otherPeople.trim());
      if (newPerson && !peopleList.includes(newPerson)) {
        setPeopleList([...peopleList, newPerson]);
        setFormData({ ...formData, otherPeople: "" });
      }
    }
  };

  const removePerson = (index: number) => {
    const newPeopleList = [...peopleList];
    newPeopleList.splice(index, 1);
    setPeopleList(newPeopleList);
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];

    for (const [key, value] of Object.entries(formData)) {
      if (requiredFields.has(key)) {
        if (value === "" || value === null) {
          alert(`O campo "${fieldLabels[key]}" é obrigatório.`);
          return;
        } else if (typeof value === "string" && value.trim() === "") {
          alert(`O campo "${fieldLabels[key]}" não pode estar vazio.`);
          return;
        }
      }
    }

    if (formData.email && !validateEmail(formData.email)) {
      alert("O formato do email é inválido.");
      return;
    }

    if (formData.dateFrom > formData.dateTo) {
      alert("A data de início não pode ser posterior à data de fim.");
      return;
    }

    if (formData.dateFrom > today || formData.dateTo > today) {
      alert("As datas não podem ser futuras.");
      return;
    }

    if (!formData.checkbox1 || !formData.checkbox2) {
      alert("Você precisa aceitar os termos e a política de privacidade.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataWithFiles = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        const sanitizedValue =
          typeof value === "string" ? sanitizeInput(value) : String(value);
        formDataWithFiles.append(key, sanitizedValue);
      });

      formDataWithFiles.append("peopleList", JSON.stringify(peopleList));

      files.forEach((file, index) => {
        formDataWithFiles.append(`file-${index}`, file);
      });

      console.log("Form data:", formData);
      console.log("People list:", peopleList);
      console.log("Files:", files);

      const complaintId = `REC-${new Date().getFullYear()}-${String(
        Math.floor(Math.random() * 1000)
      ).padStart(3, "0")}`;

      const processedFiles = files.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      }));

      const complaintData = {
        id: complaintId,
        ...formData,
        peopleList: peopleList,
        files: processedFiles,
        status: "new",
        submittedAt: new Date().toISOString(),
      };

      const complaintsArray = fetchComplaints();
      complaintsArray.push(complaintData);
      localStorage.setItem(
        "submittedComplaints",
        JSON.stringify(complaintsArray)
      );

      localStorage.removeItem("complaintFormData");

      router.push("/success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem("complaintFormData");
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setFormData(parsedData);

        if (parsedData.peopleList && Array.isArray(parsedData.peopleList)) {
          setPeopleList(parsedData.peopleList);
        }
      } catch (error) {
        console.error("Error parsing saved form data:", error);
        localStorage.removeItem("complaintFormData");
      }
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      ...formData,
      peopleList: peopleList,
    };
    localStorage.setItem("complaintFormData", JSON.stringify(dataToSave));
  }, [formData, peopleList]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges() && !isSubmitting) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges, isSubmitting]);

  return (
    <PageContainer>
      <HeaderComponent onNavigate={handleNavigation} />
      <ComplaintPageWrapper>
        <ContentWrapper>
          <FormContainer>
            <FormTitle>Formulário de Reclamação</FormTitle>

            <form onSubmit={handleSubmit}>
              <FormSection>
                <SectionTitle>Informações Pessoais</SectionTitle>

                <FormGroup>
                  <Label htmlFor="name">
                    <FaUser /> Nome (opcional)
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    maxLength={100}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">
                    <FaEnvelope /> Email (opcional)
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu email"
                    maxLength={100}
                  />
                </FormGroup>
              </FormSection>

              <FormSection>
                <SectionTitle>Classificação da Reclamação</SectionTitle>

                <FormGroup>
                  <Label htmlFor="category">
                    <MdCategory /> Categoria
                  </Label>
                  <CategorySelect
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="produto">Produto</option>
                    <option value="servico">Serviço</option>
                    <option value="atendimento">Atendimento</option>
                    <option value="outros">Outros</option>
                  </CategorySelect>
                </FormGroup>

                {formData.category === "produto" && (
                  <FormGroup>
                    <Label htmlFor="productIssue">
                      <MdCategory /> Problema do Produto
                    </Label>
                    <CategorySelect
                      id="productIssue"
                      name="productIssue"
                      value={formData.productIssue}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione o problema</option>
                      <option value="defeito">Produto com defeito</option>
                      <option value="quebrado">
                        Produto estragado/partido
                      </option>
                      <option value="atraso">
                        Produto atrasado na entrega
                      </option>
                      <option value="errado">
                        Produto errado/diferente do negociado
                      </option>
                      <option value="incompleto">Produto incompleto</option>
                      <option value="outros">Outros</option>
                    </CategorySelect>
                  </FormGroup>
                )}

                <FormGroup>
                  <Label htmlFor="complaintSubject">
                    <FaClipboardList /> Tema da Reclamação
                  </Label>
                  <Input
                    type="text"
                    id="complaintSubject"
                    name="complaintSubject"
                    value={formData.complaintSubject}
                    onChange={handleChange}
                    required
                    placeholder="Qual é o tema da reclamação?"
                    maxLength={150}
                  />
                </FormGroup>
              </FormSection>

              <FormSection>
                <SectionTitle>Detalhes da Reclamação</SectionTitle>

                <FormGroup>
                  <Label htmlFor="description">
                    <MdDescription /> Descrição
                  </Label>
                  <TextareaStyled
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Descreva sua reclamação"
                    maxLength={2000}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>
                    <FaCalendarAlt /> Período da Reclamação
                  </Label>
                  <DateTimeContainer>
                    <DateTimePair>
                      <DateTimeLabel>De:</DateTimeLabel>
                      <InputPairContainer>
                        <DateInput
                          type="date"
                          id="dateFrom"
                          name="dateFrom"
                          value={formData.dateFrom}
                          onChange={handleChange}
                          required
                          max={today}
                        />
                        <TimeInput
                          type="time"
                          id="timeFrom"
                          name="timeFrom"
                          value={formData.timeFrom}
                          onChange={handleChange}
                          required
                        />
                      </InputPairContainer>
                    </DateTimePair>
                    <DateTimePair>
                      <DateTimeLabel>Até:</DateTimeLabel>
                      <InputPairContainer>
                        <DateInput
                          type="date"
                          id="dateTo"
                          name="dateTo"
                          value={formData.dateTo}
                          onChange={handleChange}
                          required
                          max={today}
                        />
                        <TimeInput
                          type="time"
                          id="timeTo"
                          name="timeTo"
                          value={formData.timeTo}
                          onChange={handleChange}
                          required
                        />
                      </InputPairContainer>
                    </DateTimePair>
                  </DateTimeContainer>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="otherPeople">
                    <FaUsers /> Outras pessoas (opcional)
                  </Label>
                  <PeopleInputContainer>
                    <Input
                      type="text"
                      id="otherPeople"
                      name="otherPeople"
                      value={formData.otherPeople}
                      onChange={handleChange}
                      onKeyDown={handlePeopleInputKeyDown}
                      placeholder="Digite um nome e pressione Enter"
                      maxLength={200}
                    />
                    <AddPersonButton type="button" onClick={addPerson}>
                      <MdAdd />
                    </AddPersonButton>
                  </PeopleInputContainer>

                  {peopleList.length > 0 && (
                    <PeopleTagsContainer>
                      {peopleList.map((person, index) => (
                        <PersonTag key={index}>
                          <span>{person}</span>
                          <RemovePersonButton
                            type="button"
                            onClick={() => removePerson(index)}
                          >
                            <MdClose size={16} />
                          </RemovePersonButton>
                        </PersonTag>
                      ))}
                    </PeopleTagsContainer>
                  )}
                </FormGroup>
              </FormSection>

              <FormSection>
                <SectionTitle>Documentos</SectionTitle>

                <FormGroup>
                  <Label htmlFor="documents">
                    <MdAttachFile /> Anexar arquivos
                  </Label>
                  <FileUploadContainer>
                    <FileUploadInfo>
                      <p>Formatos: PNG, PDF, MP4, JPEG, DOC/DOCX (máx. 10MB)</p>
                    </FileUploadInfo>
                    <Input
                      type="file"
                      id="documents"
                      name="documents"
                      onChange={handleFileChange}
                      multiple
                      accept="image/png, application/pdf, video/mp4, image/jpeg, image/jpg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
                    {fileErrors.length > 0 && (
                      <FileErrors>
                        {fileErrors.map((error, index) => (
                          <ErrorMessage key={index}>{error}</ErrorMessage>
                        ))}
                      </FileErrors>
                    )}
                    {files.length > 0 && (
                      <div>
                        {files.map((file, index) => (
                          <FilePreviewCard key={index}>
                            <FileInfo>
                              <FileName>{file.name}</FileName>
                              <FileSize>{formatFileSize(file.size)}</FileSize>
                            </FileInfo>
                            <div>{getFilePreview(file)}</div>
                            <RemoveFileButton onClick={() => removeFile(index)}>
                              <MdClose />
                            </RemoveFileButton>
                          </FilePreviewCard>
                        ))}
                      </div>
                    )}
                  </FileUploadContainer>
                </FormGroup>
              </FormSection>

              <FormSection>
                <FormGroup>
                  <CheckboxGroup>
                    <CheckboxLabel>
                      <input
                        type="checkbox"
                        name="checkbox1"
                        checked={formData.checkbox1}
                        onChange={handleChange}
                        required
                      />
                      Aceito os <a href="/termos"> termos e condições</a>
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <input
                        type="checkbox"
                        name="checkbox2"
                        checked={formData.checkbox2}
                        onChange={handleChange}
                        required
                      />
                      Aceito a{" "}
                      <a href="/politica-privacidade">
                        {" "}
                        política de privacidade
                      </a>
                    </CheckboxLabel>
                  </CheckboxGroup>
                </FormGroup>
              </FormSection>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </SubmitButton>
            </form>
          </FormContainer>

          <FAQContainer>
            <FAQTitle>
              Perguntas Frequentes
              <FaQuestionCircle color="#4a6fa5" />
            </FAQTitle>

            {faqItems.map((item, index) => (
              <FaqItem key={index}>
                <FaqQuestion onClick={() => toggleFaq(index)}>
                  <span>{item.question}</span>
                  {activeFaqItem === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </FaqQuestion>
                {activeFaqItem === index && (
                  <FaqAnswer
                    className={activeFaqItem === index ? "active" : ""}
                  >
                    {item.answer}
                  </FaqAnswer>
                )}
              </FaqItem>
            ))}
          </FAQContainer>
        </ContentWrapper>
      </ComplaintPageWrapper>

      {showExitModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>
              <FaExclamationTriangle /> Alterações não salvas
            </ModalTitle>
            <ModalContent>
              Existem alterações não salvas no formulário. Se sair agora, todas
              as informações inseridas serão perdidas.
            </ModalContent>
            <ModalButtonGroup>
              <ModalButton onClick={cancelNavigation}>
                Continuar a editar
              </ModalButton>
              <ModalButton $isPrimary onClick={confirmNavigation}>
                Sair sem salvar
              </ModalButton>
            </ModalButtonGroup>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}
