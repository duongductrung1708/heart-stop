import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: ${props => props.isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`;

const ArticleHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin: 1.5rem auto;
  display: block;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled.figcaption`
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
`;

const Header = ({ title, author, date, heroImage, imageCaption }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <Nav>
          <Logo>Hankangjk</Logo>
          <NavLinks>
            <NavLink href="#overview">Tổng quan</NavLink>
            <NavLink href="#causes">Cách sơ cứu</NavLink>
            <NavLink href="#steps">Tài liệu</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </NavLinks>
        </Nav>
      </HeaderContainer>
      <ArticleHeader>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleMeta>
          <span>{author}</span>
          <span>{date}</span>
        </ArticleMeta>
        <figure>
          <HeroImage src={heroImage} alt={imageCaption} />
          <ImageCaption>{imageCaption}</ImageCaption>
        </figure>
      </ArticleHeader>
    </>
  );
};

export default Header; 