import { FC } from "react";
import styled, { css } from "styled-components";

interface ICardProps {
  title: string;
  text: string;
  active: boolean;
  onClick: () => void;
}

interface IStyledCardProps {
  $active: boolean;
}

const CardWrapper = styled.div<IStyledCardProps>`
  background: transparent;
  box-shadow: 0 4px 24px ${({ theme }) => theme.shadow};
  border-radius: 16px;
  padding: 16px 18px;
  transition: box-shadow 0.3s, background 0.3s;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: unset;
  max-height: unset;
  backdrop-filter: blur(15px);

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
    height: auto;
  }
  ${(p) =>
    p.$active &&
    css`
      box-shadow: 0 4px 24px 0 ${p.theme.red};
    `}
  &:hover {
    background: #fff;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText = styled.div`
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Card: FC<ICardProps> = ({ title, text, active, onClick }) => (
  <CardWrapper $active={active} onClick={onClick} tabIndex={0} role="button">
    <CardTitle title={title}>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardWrapper>
);

export default Card;
