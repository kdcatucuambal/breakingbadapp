import styled from "@emotion/styled";
import { IPhrase } from "../interfaces/Phrase.Interface";

interface Props {
  phrase: IPhrase;
}

const PhraseContainer = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Phrase = (prop: Props) => {
  return (
    <PhraseContainer>
      <h1>{prop.phrase.quote}</h1>
      <p>{prop.phrase.author}</p>
    </PhraseContainer>
  );
};

export default Phrase;
