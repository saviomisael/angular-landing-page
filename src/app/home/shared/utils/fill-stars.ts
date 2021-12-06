export const fillStars = (starsCount: number, content: string): string[] => {
  const stars: string[] = [];

  for (let index = 0; index < starsCount; index++) {
    stars.push(content);
  }

  return stars;
};
