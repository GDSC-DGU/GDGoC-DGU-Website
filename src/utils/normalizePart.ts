export const normalizePart = (part: string) => {
  if (["Marketing", "Community", "Lead"].includes(part)) return "Devrel";
  return part;
};
