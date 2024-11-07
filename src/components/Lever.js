import React from "react";
import styled, { keyframes } from "styled-components";

const pullLever = keyframes`
  0%, 20% { transform: rotate(0deg); }
  50% { transform: rotate(30deg); }
  100% { transform: rotate(0deg); }
`;

const LeverContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
`;

const LeverStick = styled.div`
  width: 8px;
  height: 50px;
  background: #c0392b;
  transform-origin: top;
  animation: ${({ isSpinning }) => (isSpinning ? pullLever : "none")} 0.4s ease;
  border-radius: 4px;
  margin-top: 10px;
`;

const LeverBall = styled.div`
  width: 20px;
  height: 20px;
  background: #333;
  border: 3px solid #999;
  border-radius: 50%;
  margin-top: 5px;
`;

const Lever = ({ isSpinning }) => (
  <LeverContainer>
    <LeverStick isSpinning={isSpinning} />
    <LeverBall />
  </LeverContainer>
);

export default Lever;
