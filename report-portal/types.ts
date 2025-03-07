export interface ComplaintData {
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
  submittedAt?: string;
  status?: string;
}

export interface FileData {
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface HeaderProps {
  isScrolled: boolean;
}

export interface ScrollProps {
  isScrolled: boolean;
}

export interface ProgressFillProps {
  progress: string;
}

export interface StylesInterface {
  container: React.CSSProperties;
  title: React.CSSProperties;
  message: React.CSSProperties;
  button: React.CSSProperties;
  icon: React.CSSProperties;
  successContainer?: React.CSSProperties;
  successCard?: React.CSSProperties;
  successIcon?: React.CSSProperties;
  successTitle?: React.CSSProperties;
  successMessage?: React.CSSProperties;
  homeButton?: React.CSSProperties;
  homeButtonHover?: React.CSSProperties;
}

export interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
