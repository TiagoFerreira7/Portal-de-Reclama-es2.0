'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { styles, keyframes } from './style';

export default function SuccessPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <style jsx global>{keyframes}</style>
      
      <div style={styles.successContainer}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>
            <svg viewBox="0 0 24 24" width="40" height="40">
              <path 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                d="M1 13l8 8L23 5"
                style={{
                  animation: 'drawCheckmark 0.8s ease forwards 0.5s'
                }}
              />
            </svg>
          </div>
          <h1 style={styles.successTitle}>Reclamação Enviada com Sucesso!</h1>
          <p style={styles.successMessage}>
            Agradecemos o seu contacto. A sua reclamação foi registada e será analisada pela nossa equipa.
            Entraremos em contato em breve.
          </p>
          <Link href="/">
            <button 
              style={{
                ...styles.homeButton,
                ...(isHovering ? styles.homeButtonHover : {})
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Voltar à Página Inicial
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
