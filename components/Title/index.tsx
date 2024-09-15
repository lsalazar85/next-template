import { TitleProps } from '@/interfaces';

const Index = ({ children, level = 1 }: TitleProps) => {
  const Tag = level === 1 ? 'h1' : 'h2';
  return <Tag className="text-4xl font-bold text-center">{children}</Tag>;
};

export default Index;
