import './App.module.scss';

import useWindowSize from './module/useWindowSize';

import Game from './module/Game';

const App = () => {
  const { width: rawWidth, height: rawHeight } = useWindowSize();
  const width = rawWidth * 0.95;
  const height = rawHeight * 0.95;

  return <Game width={width} height={height} />;
};

export default App;
