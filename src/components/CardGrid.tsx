import styled from "styled-components";
import Card from "./Card";
import { FC } from "react";

interface ICardData {
  title: string;
  text: string;
}

interface ICardGridProps {
  cards: ICardData[];
  activeIndexes: number[];
  onCardClick: (idx: number) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  width: 100%;
  padding: 40px 5vw 40px 5vw;
  box-sizing: border-box;

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
