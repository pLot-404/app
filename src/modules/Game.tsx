import React, { useState, useEffect, useCallback, useRef } from "react";
import Sprite from "./Sprite";

type Props = {
  width: number;
  //canvasの幅
  height: number;
  //canvasの高さ
  objs: Sprite[];
  //ゲーム内オブジェクト一覧
  onAdd: VoidFunction | null;
  //追加する関数
};

const Game: React.VFC<Props> = (props) => {
  /*状態の初期化・Props受け取り*/
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const reqIdRef = useRef(0);
  const { width, height, objs, onAdd } = props;

  /*メソッド定義*/
  const mainloop = useCallback(() => {
    if (ctx !== null) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      if (onAdd !== null) {
        onAdd();
      }

      for (let i = 0; i <= objs.length; i++) {
        objs[i].update(ctx);
      }

      reqIdRef.current = requestAnimationFrame(mainloop);
    }
  }, [ctx, height, width]);

  /*canvas要素を取得・初期化*/
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    setCtx(context);
  }, [width, height]);

  /*状態にコンテキストが登録されたらmainloop開始 */
  useEffect(() => {
    if (ctx !== null) {
      mainloop();
    }
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [ctx, mainloop]);

  return <canvas id="canvas" />;
};

export default Game;
