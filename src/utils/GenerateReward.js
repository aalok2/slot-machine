import IMG1 from "../images/ak-47.png";
import IMG2 from "../images/m4.png";
import IMG3 from "../images/sniper.png";
import IMG4 from "../images/medkit.png";
import IMG5 from "../images/potion.png";
import IMG6 from "../images/grenade.png";
import IMG7 from "../images/stone.png";
import IMG8 from "../images/wood.png";
import IMG9 from "../images/metal.png";

export function generateReward() {
  const items = {
    Weapon: [
      { name: "AK-47", image: IMG1 },
      { name: "M4", image: IMG2 },
      { name: "Snipper", image: IMG3 },
      // Add more weapons here
    ],
    Consumable: [
      { name: "Med Kit", image: IMG4 },
      { name: "Potion", image: IMG5 },
      { name: "Grenade", image: IMG6 },
      // Add more consumables here
    ],
    Material: [
      { name: "Stone", image: IMG7 },
      { name: "Wood", image: IMG8 },
      { name: "Metal", image: IMG9 },
      // Add more materials here
    ],
  };

  const rarities = ["Common", "Rare", "Legendary"];
  const itemType = ["Weapon", "Consumable", "Material"];
  const selectedType = itemType[Math.floor(Math.random() * itemType.length)];
  const item =
    items[selectedType][Math.floor(Math.random() * items[selectedType].length)];

  return {
    type: selectedType,
    name: item.name,
    image: { src: item.image },
    rarity: rarities[Math.floor(Math.random() * rarities.length)],
    count: Math.floor(Math.random() * 5) + 1,
  };
}
