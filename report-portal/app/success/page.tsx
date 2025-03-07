"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  styles,
  GlobalKeyframes,
  SuccessContainer,
  SuccessCard,
  SuccessIconContainer,
  CheckmarkPath,
  SuccessTitleHeading,
  SuccessMessageParagraph,
  HomeButton,
  HomeButtonWrapper,
} from "./style";

interface StyledHomeButtonProps {
  href: string;
}

const StyledHomeButton: React.FC<StyledHomeButtonProps> = ({ href }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={href} passHref legacyBehavior>
      <HomeButtonWrapper
        as="a"
        $isHovering={isHovering}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <HomeButton as="span">Voltar à Página Inicial</HomeButton>
      </HomeButtonWrapper>
    </Link>
  );
};

export default function SuccessPage() {
  return (
    <SuccessContainer>
      <GlobalKeyframes />
      <SuccessCard>
        <SuccessIconContainer>
          <svg viewBox="0 0 24 24" width="40" height="40">
            <CheckmarkPath
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 13l8 8L23 5"
            />
          </svg>
        </SuccessIconContainer>
        <SuccessTitleHeading>
          Reclamação Enviada com Sucesso!
        </SuccessTitleHeading>
        <SuccessMessageParagraph>
          Agradecemos o seu contacto. A sua reclamação foi registada e será
          analisada pela nossa equipa. Entraremos em contato em breve.
        </SuccessMessageParagraph>
        <StyledHomeButton href="/" />
      </SuccessCard>
    </SuccessContainer>
  );
}
