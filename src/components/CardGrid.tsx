import styled from "styled-components";
import Card from "./Card";
import { FC } from "react";

interface ICardData {
  id: string;
  title: string;
  text: string;
}

interface ICardGridProps {
  cards: ICardData[];
  activeIndexes: string[];
  onCardClick: (id: string) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  width: 100%;
  padding: 6vw 8vw;
  box-sizing: border-box;
  min-height: 100vh;
  grid-auto-rows: 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 40px 5vw 40px 5vw;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 3vw 24px 3vw;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px 2vw 10px 2vw;
  }
`;

const CardGrid: FC<ICardGridProps> = ({
  cards,
  activeIndexes,
  onCardClick,
}) => (
  <Grid>
    {cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        text={card.text}
        active={activeIndexes.includes(card.id)}
        onClick={() => onCardClick(card.id)}
      />
    ))}
  </Grid>
);

export default CardGrid;
