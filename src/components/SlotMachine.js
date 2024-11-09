import React, { useState } from "react";
import styled from "styled-components";
import Reel from "./Reel";
import Lever from "./Lever";
import Confetti from "react-confetti";
import { generateReward } from "../utils/GenerateReward";
import spinSound from "../sounds/spin-sound.mp3";
import Result from "./Result"; // Import the Result component
import image from "../images/ak-47.png";

const SlotMachineContainer = styled.div`
  background: linear-gradient(145deg, #2b2b2b, #1f1f1f);
  border: 5px solid #e0a800;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.8);
  padding: 30px;
  text-align: center;
  width: 450px;
  max-width: 90vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 5px;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.6);
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f9c80e;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
`;

const SpinButton = styled.button`
  margin-top: 20px;
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: radial-gradient(circle, #d73a31, #b02520);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(215, 58, 49, 0.8);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

const SlotMachine = () => {
  const [result, setResult] = useState({
    image: {src: image},
  }); // Set to null initially
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const spinAudio = new Audio(spinSound);

  const handleSpin = () => {
    setIsSpinning(true);
    setShowConfetti(false);
    setResult(null); // Clear the previous result

    spinAudio.play();

    const rewards = generateReward(); // Ensure this returns the correct reward format

    setTimeout(() => {
      setResult(rewards); // Set the result after the spin
      setIsSpinning(false);
      spinAudio.pause();
      spinAudio.currentTime = 0;
      setShowConfetti(true); // Show confetti after spin completes
    }, 2000);
  };

  return (
    <div>
      <SlotMachineContainer className="SlotMachineContainer">
        <Title>🎰 Slot Machine 🎰</Title>

        <div className="reels">
          <Reel isSpinning={isSpinning} resultItem={result?.image || ""} />
          <Reel isSpinning={isSpinning} resultItem={result?.image || ""} />
          <Reel isSpinning={isSpinning} resultItem={result?.image || ""} />
        </div>

        <Lever />
        <SpinButton onClick={handleSpin} disabled={isSpinning}>
          {isSpinning ? "Spinning..." : "Spin"}
        </SpinButton>

        {/* Render Result only when spin is finished and result is valid */}
        {!isSpinning && result.name && <Result result={result} />}
      </SlotMachineContainer>
      {showConfetti && (
        <Confetti
          width={window.innerWidth} // Set the width to full screen width
          height={window.innerHeight} // Set the height to full screen height
          recycle={false}
          numberOfPieces={2000} // Adjust the number of pieces if needed
        />
      )}
    </div>
  );
};

export default SlotMachine;
