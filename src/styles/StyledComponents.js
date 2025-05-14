import styled from 'styled-components';

export const ModernArticle = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
  color: #374151;
`;

export const AlertBox = styled.div`
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  &.warning {
    background-color: #fffbeb;
    border-left: 4px solid #f59e0b;
    color: #92400e;
  }

  &.success {
    background-color: #ecfdf5;
    border-left: 4px solid #10b981;
    color: #065f46;
  }
`;

export const StepCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const StepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 600;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 1.25rem;
  margin: 1rem 0;
`;

export const ListItem = styled.li`
  position: relative;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  font-size: 1.05rem;
  color: #374151;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 8px;
    height: 8px;
    background-color: #3b82f6;
    border-radius: 50%;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const ResourceLink = styled.a`
  display: inline-block;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

export const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

export const FAQItem = styled.li`
  margin-bottom: 0.75rem;
`;

export const FAQLink = styled.a`
  display: block;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  color: #111827;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  border: 1px solid #e5e7eb;

  &:hover {
    background-color: #f3f4f6;
    transform: translateX(4px);
    border-color: #d1d5db;
  }
`; 