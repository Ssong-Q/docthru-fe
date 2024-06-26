type chipCategory = 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';
type chipCategoryColor = 'bg-[#79E16A]' | 'bg-[#FF905E]' | 'bg-[#7EB2EE]' | 'bg-[#F66E6B]' | 'bg-[#F7EA5D]';

export const categoryChipColor = (chipCategory: chipCategory): chipCategoryColor => {
  let color;
  let randomColor;

  switch (chipCategory) {
    case 'NEXT':
      color = 'bg-[#79E16A]';
      break;
    case 'API':
      color = 'bg-[#FF905E]';
      break;
    case 'CAREER':
      color = 'bg-[#7EB2EE]';
      break;
    case 'JS':
      color = 'bg-[#F66E6B]';
      break;
    case 'WEB':
      color = 'bg-[#F7EA5D]';
      break;
    default:
      // 추후 randomColor에 대해서 논의 후 결정
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      color = `bg-[#${randomColor.padStart(6, '0')}]`;
      break;
  }

  return color as chipCategoryColor;
};
