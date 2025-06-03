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
  backdrop-filter: blur(15px);

  @media (max-width: 1100px) {
    height: auto;
    min-height: unset;
    max-height: unset;
  }
  @media (max-width: 850px) {
    height: auto;
    min-height: unset;
    max-height: unset;
  }
  @media (max-width: 600px) {
    height: auto;
    min-height: unset;
    max-height: unset;
  }
  ${(p) =>
    p.$active &&
    css`
      box-shadow: 0 4px 24px 0 ${p.theme.red};
    `}
  &:hover {
    background: #fff;
  }
  @media (hover: hover) {
    &:hover {
      background: #fff;
    }
  }
  @media (hover: none) {
    &:active {
      background: #fff;
    }
    &:not(:active) {
      background: transparent;
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
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
  font-size: 12px;
`;

const Card: FC<ICardProps> = ({ title, text, active, onClick }) => (
  <CardWrapper $active={active} onClick={onClick} tabIndex={0} role="button">
    <CardTitle title={title}>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardWrapper>
);

export default Card;
