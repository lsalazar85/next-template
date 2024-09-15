import { ParagraphProps } from '@/interfaces';

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-lg text-center">{children}</p>;
};

export default Paragraph;
