import { MouseEventHandler } from 'react';

const SharedButton = (
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
) => {
  return <button onClick={onClick}>Button Submodule 1</button>;
};

export default SharedButton;
