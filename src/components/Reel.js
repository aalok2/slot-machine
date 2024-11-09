import React from "react";
import styled, { keyframes } from "styled-components";
import IMG1 from "../images/ak-47.png";
import IMG2 from "../images/m4.png";
import IMG3 from "../images/sniper.png";
import IMG4 from "../images/medkit.png";
import IMG5 from "../images/potion.png";
import IMG6 from "../images/grenade.png";
import IMG7 from "../images/stone.png";
import IMG8 from "../images/wood.png";
import IMG9 from "../images/metal.png";
// Reel container styling
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

// Spinning animation keyframes
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

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

// Reel component
const Reel = ({ isSpinning, resultItem }) => {
  // Placeholder images for spinning, categorized by type
  const placeholderImages = {
    weapons: [
      { src: IMG1, alt: "AK-47" },
      { src: IMG2, alt: "M4" },
      { src: IMG3, alt: "Sniper" },
    ],
    consumables: [
      { src: IMG4, alt: "Medkit" },
      { src: IMG6, alt: "Grenade" },
      { src: IMG5, alt: "Potion" },
    ],
    materials: [
      { src:IMG8, alt: "Wood" },
      { src: IMG9, alt: "Metal" },
      { src:IMG7, alt: "Stone" },
    ],
  };

  // Randomly select a placeholder category and item when spinning
  const randomCategory =
    Object.keys(placeholderImages)[Math.floor(Math.random() * 3)];
  const placeholders = placeholderImages[randomCategory];

  return (
    <ReelContainer>
      {isSpinning ? (
        <SpinningWrapper isSpinning={isSpinning}>
          {placeholders.map((item, index) => (
            <ItemImage key={index} src={item.src} alt={item.alt} />
          ))}
        </SpinningWrapper>
      ) : (
        // Show the result item as an image when spinning stops
        <ItemImage src={resultItem.src} alt={resultItem.alt} />
      )}
    </ReelContainer>
  );
};

export default Reel;
