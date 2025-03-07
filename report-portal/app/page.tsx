"use client";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import * as Styled from "./style";
import { NavItemProps } from "../types";

const NavItem = memo(({ href, label }: NavItemProps) => (
  <Link href={href} passHref legacyBehavior>
    <Styled.NavLink>{label}</Styled.NavLink>
  </Link>
));

NavItem.displayName = "NavItem";

function MiniNav() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/report", label: "Criar Reclamação" },
    { href: "/list", label: "Listagem" },
  ];

  return (
    <Styled.PageContainer>
      <Styled.Nav>
        <Styled.NavText>Crie uma </Styled.NavText>
        <Link href="/report" passHref legacyBehavior>
          <Styled.LinkText>reclamação</Styled.LinkText>
        </Link>
      </Styled.Nav>
      <Styled.Header>
        <Styled.LogoContainer>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority={true}
          />
        </Styled.LogoContainer>

        <Styled.HeaderText>
          <Styled.HeaderTitle>INSERTPAGE</Styled.HeaderTitle>
        </Styled.HeaderText>

        <Styled.NavLinks>
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </Styled.NavLinks>

        <Styled.FilterIcon>
          <Styled.Icon aria-label="Filter" />
        </Styled.FilterIcon>
      </Styled.Header>
      <Styled.Section>
        <Styled.SectionTitle>Bem-vindo!</Styled.SectionTitle>
        <Styled.MainTitle>Portal de Reclamações</Styled.MainTitle>
        <Styled.SectionText>
          Aqui você pode criar e consultar suas reclamações de forma fácil,
          rápida e completamente segura. A nossa plataforma foi projetada para
          simplificar o processo de registro e acompanhamento de reclamações.
        </Styled.SectionText>
      </Styled.Section>
      <Styled.ComplaintSection>
        <Styled.ComplaintTitle>Faça a sua Reclamação</Styled.ComplaintTitle>
        <Styled.ComplaintText>
          Tem algo a reclamar? Registe a sua reclamação aqui e o nosso sistema
          irá ajudá-lo a resolvê-la rapidamente. O processo é rápido e seguro,
          pode consultar as suas reclamações a qualquer momento.
        </Styled.ComplaintText>
        <Link href="/report" passHref legacyBehavior>
          <Styled.ComplaintButton>Fazer Reclamação</Styled.ComplaintButton>
        </Link>
      </Styled.ComplaintSection>
    </Styled.PageContainer>
  );
}

export default memo(MiniNav);
