import './App.module.scss';

import useWindowSize from './module/useWindowSize';

const App = () => {
  /** ゲームのサイズを画面の95％で指定 */
  const { width: rawWidth, height: rawHeight } = useWindowSize();
  const width = rawWidth * 0.95;
  const height = rawHeight * 0.95;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: '#000',
      }}
    />
  );
};

export default App;
