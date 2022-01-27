/* eslint-disable import/extensions */
import React from 'react';
import Game from './modules/Game';
import useWindowSize from './modules/useWindowSize';

const App: React.VFC = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Game height={height} width={width} />
    </div>
  );
};

export default App;
