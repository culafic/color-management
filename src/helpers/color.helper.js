export const darkenColor = (hex, percent = 20) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");

  const factor = (100 - percent) / 100;
  const [r, g, b] = [0, 2, 4].map((i) =>
    Math.max(0, Math.round(parseInt(hex.slice(i, i + 2), 16) * factor))
  );

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const getContrastColor = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");

  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));

  const luminance = (r * 299 + g * 587 + b * 114) / 1000;

  return luminance > 128 ? "#000000" : "#FFFFFF";
};
