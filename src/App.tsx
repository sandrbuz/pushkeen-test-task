import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import CardGrid from "./components/CardGrid";
import GlobalStyle from "./styles/GlobalStyle";
import { cardsData } from "./constants/cards";

const BgRect = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70vw;
  height: 60vh;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  user-select: none;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
`;

function App() {
  const [activeIndexes, setActiveIndexes] = useState<string[]>([
    "card-3",
    "card-6",
    "card-10",
    "card-12",
  ]);

  const handleCardClick = (id: string) => {
    setActiveIndexes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <BgRect src="/bg-rect.svg" alt="bg" />
        <CardGrid
          cards={cardsData}
          activeIndexes={activeIndexes}
          onCardClick={handleCardClick}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
