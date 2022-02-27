import { VFC } from 'react';

/** propsの型定義 */
interface Props {
  width: number;
  height: number;
}

/** Gameコンポーネントの型定義 */
interface GC<P> extends VFC<P> {
  /** 画面の幅 */
  width?: number;
  /** 画面の高さ */
  height?: number;
}

/** ゲーム全体を管理するコンポーネント */
const Game: GC<Props> = ({ width, height }: Props): JSX.Element => {
  Game.width = width;
  Game.height = height;

  return <div style={{ width: Game.width, height: Game.height, backgroundColor: '#000' }} />;
};

export default Game;
