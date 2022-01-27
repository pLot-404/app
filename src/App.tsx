import React from 'react';
import Game from './modules/Game';
import useWindowSize from './modules/useWindowSize';

const App: React.VFC = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Game height={height * 0.95} width={width * 0.95} />
    </div>
  );
};

export default App;
