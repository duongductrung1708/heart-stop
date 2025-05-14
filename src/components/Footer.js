import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Hankangjk - Hướng dẫn cấp cứu ngừng tim</FooterText>
    </FooterContainer>
  );
};

export default Footer; 