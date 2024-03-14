import { MouseEventHandler } from 'react';

interface props {
  onClick: () => void;
}
const SharedButton = ({ onClick }: props) => {
  return <button onClick={onClick}>Library Button</button>;
};

export default SharedButton;
