export function generateReward() {
  const items = {
    Weapon: [
      { name: "AK-47", image: "/images/ak47.png" },
      { name: "M4A1", image: "/images/m4a1.png" },
      { name: "Shotgun", image: "/images/shotgun.png" },
      // Add more weapons here
    ],
    Consumable: [
      { name: "Med Kit", image: "/images/medkit.png" },
      { name: "Bandage", image: "/images/bandage.png" },
      { name: "Energy Drink", image: "/images/energydrink.png" },
      // Add more consumables here
    ],
    Material: [
      { name: "Steel", image: "/images/steel.png" },
      { name: "Wood", image: "/images/wood.png" },
      { name: "Cloth", image: "/images/cloth.png" },
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
    image: item.image,
    rarity: rarities[Math.floor(Math.random() * rarities.length)],
    count: Math.floor(Math.random() * 5) + 1,
  };
}
