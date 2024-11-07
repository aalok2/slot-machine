import React from "react";
import styled, { keyframes } from "styled-components";

const ReelContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: #333;
  border: 3px solid #e0a800;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-size: 1.5rem;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

// Placeholder animation items
const SpinningItem = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #f1c40f;
  animation: ${(props) =>
    props.isSpinning ? "move 0.2s linear infinite" : "none"};
`;

const reelSpin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const SpinningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${(props) => (props.isSpinning ? reelSpin : "none")} 0.3s linear
    infinite;
`;

const Reel = ({ isSpinning, resultItem }) => {
  // Array of placeholder items shown during spin
  const placeholders = ["🍒", "🍋", "🍊", "🍉"];

  return (
    <ReelContainer>
      {isSpinning ? (
        <SpinningWrapper isSpinning={isSpinning}>
          {placeholders.map((item, index) => (
            <SpinningItem key={index}>{item}</SpinningItem>
          ))}
        </SpinningWrapper>
      ) : (
        <SpinningItem>{resultItem}</SpinningItem> // Display the result when spinning stops
      )}
    </ReelContainer>
  );
};

export default Reel;
