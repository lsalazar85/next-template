import { TextProps } from '@/interfaces';

const Text = ({ children, styles }: TextProps) => {
  return <span className={`text-2xl ${styles && styles}`}>{children}</span>;
};

export default Text;
