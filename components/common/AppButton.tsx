import { twMerge } from 'tailwind-merge';

type AppButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};
const AppButton = (props: AppButtonProps) => {
  const { text, onClick, className } = props;
  return (
    <button
      className={twMerge(
        `cursor-pointer px-4 py-2 gradient-bg text-background rounded-lg 
        font-semibold hover:opacity-90 transition-all`,
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AppButton;
