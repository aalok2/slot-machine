import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 12px;
  color: #f9c80e;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
`;

const ResultTitle = styled.h2`
  color: #e0a800;
  font-size: 1.6rem;
  font-weight: bold;
`;

const Result = ({ result }) => {
  // Log the result prop when the component renders

  return (
    <ResultContainer>
      <ResultTitle>✨ You Won! ✨</ResultTitle>
      <p>Name: {result.name}</p>
      <p>Type: {result.type}</p>
      <p>Rarity: {result.rarity}</p>
      <p>Count: {result.count}</p>
    </ResultContainer>
  );
};

export default Result;
