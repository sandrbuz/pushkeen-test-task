import React from "react";
import styled from "styled-components";
import Card from "./Card";

interface CardData {
  title: string;
  text: string;
}

interface CardGridProps {
  cards: CardData[];
  activeIndexes: number[];
  onCardClick: (idx: number) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 32px 3vw 24px 3vw;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 10px 2vw;
  }
`;

const CardGrid: React.FC<CardGridProps> = ({
  cards,
  activeIndexes,
  onCardClick,
}) => (
  <Grid>
    {cards.map((card, idx) => (
      <Card
        key={idx}
        title={card.title}
        text={card.text}
        active={activeIndexes.includes(idx)}
        onClick={() => onCardClick(idx)}
      />
    ))}
  </Grid>
);

export default CardGrid;
