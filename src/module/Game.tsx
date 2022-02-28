import { VFC, useEffect, useRef } from "react";

/** propsの型定義 */
interface Props {
  /** 画面の幅 */
  width: number;
  /** 画面の高さ */
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

  /** requestAnimationFrameのrequestIdを保持 */
  const requestId = useRef(null);

  /** 更新処理 */
  const mainloop = () => {
    requestId.current = requestAnimationFrame(mainloop);
  };

  /** 開始処理 */
  useEffect(() => {
    mainloop();
    return () => cancelAnimationFrame(requestId.current);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: Game.width,
        height: Game.height,
        backgroundColor: "#000",
      }}
    />
  );
};

export default Game;
