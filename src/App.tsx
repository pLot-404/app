import React, { useState, useEffect, useCallback, useRef } from "react";
import Sprite from "./modules/Sprite";
import useWindowSize from "./modules/useWindowSize";

const App: React.VFC = () => {
  const { width, height } = useWindowSize();
  const [objs, setObjs] = useState<Sprite[]>([]);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const reqIdRef = useRef(0);

  /* メソッド定義 */
  const mainloop = useCallback(() => {
    if (ctx !== null) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i <= objs.length - 1; i++) {
        objs[i].update(ctx);
      }

      reqIdRef.current = requestAnimationFrame(mainloop);
    }
  }, [ctx, height, objs, width]);

  const add = (obj: Sprite) => setObjs(objs.concat([obj]));

  /* canvas要素を取得・初期化 */
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    setCtx(context);
  }, [width, height]);

  /* 状態にコンテキストが登録されたらmainloop開始 */
  useEffect(() => {
    if (ctx !== null) {
      const school: Sprite = new Sprite("./img/school_A5.png");
      add(school);
      mainloop();
    }
    return () => cancelAnimationFrame(reqIdRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx]);

  return <canvas id="canvas" />;
};

export default App;
