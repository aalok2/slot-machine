export function generateReward() {
  const items = ["Weapon", "Consumable", "Material"];
  const rarities = ["Common", "Rare", "Legendary"];

  return {
    item: items[Math.floor(Math.random() * items.length)],
    rarity: rarities[Math.floor(Math.random() * rarities.length)],
    count: Math.floor(Math.random() * 5) + 1,
  };
}
