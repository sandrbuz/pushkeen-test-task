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
  min-height: auto;

  @media (max-width: 1400px) {
    padding: 3vw 4vw;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 30px 4vw;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 20px 4vw;
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
