import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../src/components/Container";
import Section from "../src/components/Section";
import TickersList from "../src/components/TickersList";

const App = () => {
  return (
    <Container>
      <Section title="Tickers">
        <TickersList />
      </Section>
    </Container>
  );
};

export default App;
