interface IButton {
  text: string;
  background: string;
  border: boolean;
  handleClick: () => void;
}
export const Button = ({ text, background, border, handleClick }: IButton) => {
  return <button className={`w-40 h-24  classes de tailwind ${background} ${border}`} onClick={handleClick}>{text}</button>;
};
'asdas asdasd adsasd asdasd'