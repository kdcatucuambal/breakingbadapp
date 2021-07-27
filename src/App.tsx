import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import PhraseContainer from "./components/Phrase";
import { IPhrase } from "./interfaces/Phrase.Interface";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [phrase, setPhrase] = useState<IPhrase>({ author: "", quote: "" });
  //load quote
  useEffect(() => {
    console.log("useEffect");
    consultApi();
  }, []);

  const consultApi = async () => {
    const apiPromise = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase: IPhrase = (await apiPromise.json())[0];
    setPhrase(phrase);
  };

  return (
    <Container>
      <PhraseContainer phrase={phrase}></PhraseContainer>
      <Button onClick={consultApi}>Get Phrase!!</Button>;
    </Container>
  );
}

export default App;
