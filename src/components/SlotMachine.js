import React, { useState } from "react";
import styled from "styled-components";
import Reel from "./Reel";
import Lever from "./Lever";
import Confetti from "react-confetti";
import { generateReward } from "../utils/GenerateReward";
import spinSound from "../sounds/spin-sound.mp3";
import Result from "./Result"; // Import the Result component

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
  const [result, setResult] = useState([null, null, null]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const spinAudio = new Audio(spinSound);

  const handleSpin = () => {
    setIsSpinning(true);
    setShowConfetti(false);

    spinAudio.play();

    const rewards = generateReward(); // ['Weapon', 'Consumable', 'Material']

    console.log("Generated Rewards:", rewards); // Log the generated rewards

    setTimeout(() => {
      setResult(rewards); // Set the result after the spin
      console.log("Result after spin:", rewards); // Log the result after updating the state

      setIsSpinning(false);

      spinAudio.pause();
      spinAudio.currentTime = 0;

      setShowConfetti(true); // Show confetti after spin completes
    }, 2000);
  };

  return (
    <SlotMachineContainer>
      <Title>🎰 Slot Machine 🎰</Title>

      {/* Full-screen Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth} // Set the width to full screen width
          height={window.innerHeight} // Set the height to full screen height
          recycle={false}
          numberOfPieces={5000} // Adjust the number of pieces if needed
        />
      )}

      <div className="reels">
        <Reel isSpinning={isSpinning} resultItem={result[0]} />
        <Reel isSpinning={isSpinning} resultItem={result[1]} />
        <Reel isSpinning={isSpinning} resultItem={result[2]} />
      </div>

      {/* Render Result only when spin is finished */}
      {!isSpinning && result && result[0] && (
        <Result result={{ item: result[0], rarity: "Common", count: 1 }} />
      )}

      <Lever />
      <SpinButton onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </SpinButton>
    </SlotMachineContainer>
  );
};

export default SlotMachine;
