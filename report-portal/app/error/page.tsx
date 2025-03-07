"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  styles,
  ErrorContainer,
  ErrorCard,
  ErrorIconContainer,
  ErrorTitle,
  ErrorMessage,
  HomeButtonError,
} from "./style";

export default function ErrorPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <style jsx global>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <ErrorContainer>
        <ErrorCard>
          <ErrorIconContainer>
            <svg viewBox="0 0 24 24" width="40" height="40">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                d="M18 6L6 18"
                strokeDasharray="50"
                strokeDashoffset="0"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                d="M6 6L18 18"
                strokeDasharray="50"
                strokeDashoffset="0"
              />
            </svg>
          </ErrorIconContainer>
          <ErrorTitle>Ocorreu um Erro</ErrorTitle>
          <ErrorMessage>
            Desculpe, ocorreu um erro ao processar sua solicitação. Por favor,
            tente novamente mais tarde ou entre em contato com o suporte se o
            problema persistir.
          </ErrorMessage>
          <Link href="/">
            <HomeButtonError
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Voltar à Página Inicial
            </HomeButtonError>
          </Link>
        </ErrorCard>
      </ErrorContainer>
    </>
  );
}
