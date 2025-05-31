import React from "react";
import styled, { css } from "styled-components";

interface CardProps {
  title: string;
  text: string;
  active: boolean;
  onClick: () => void;
}

const CardWrapper = styled.div<{ active: boolean }>`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 16px 18px;
  transition: box-shadow 0.3s, background 0.3s;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  height: calc((100vh - 2 * 32px - 2 * 36px) / 3);
  min-height: unset;
  max-height: unset;

  @media (max-width: 1100px) {
    height: 180px;
    min-height: 140px;
    max-height: 220px;
  }
  @media (max-width: 800px) {
    height: 160px;
    min-height: 120px;
    max-height: 200px;
  }
  @media (max-width: 600px) {
    height: 140px;
    min-height: 100px;
    max-height: 180px;
  }
  ${(p) =>
    p.active &&
    css`
      box-shadow: 0 4px 24px 0 rgba(255, 0, 0, 0.5);
    `}
  &:hover {
    background: #fff;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText = styled.div`
  font-size: 0.95rem;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Card: React.FC<CardProps> = ({ title, text, active, onClick }) => (
  <CardWrapper active={active} onClick={onClick} tabIndex={0} role="button">
    <CardTitle title={title}>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardWrapper>
);

export default Card;
