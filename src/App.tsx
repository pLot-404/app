import React, { useState, useEffect, useRef } from 'react';
import Sprite from './modules/Sprite';
import useWindowSize from './modules/useWindowSize';
import kzImg from './img/kanzaki.png';

const App: React.VFC = () => {
  const { width: rawWidth, height: rawHeight } = useWindowSize();
  const width = rawWidth * 0.95;
  const height = rawHeight * 0.95;
  const [objs, setObjs] = useState<Sprite[]>([]);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const reqIdRef = useRef(0);
  let objes: Sprite[] = objs;

  /* メソッド定義 */
  const mainloop = () => {
    if (ctx !== null) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i <= objes.length - 1; i++) {
        objes[i].update(ctx);
      }
      reqIdRef.current = requestAnimationFrame(mainloop);
    }
  };

  const add = (obj: Sprite) => {
    setObjs(objs.concat([obj]));
    objes = objs.concat([obj]);
  };

  /* canvas要素を取得・初期化 */
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    setCtx(context);
  }, [width, height]);

  /* 状態にコンテキストが登録されたらmainloop開始 */
  useEffect(() => {
    if (ctx !== null) {
      const school: Sprite = new Sprite(kzImg);
      add(school);
      mainloop();
    }
    return () => cancelAnimationFrame(reqIdRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx]);

  return <canvas id="canvas" />;
};

export default App;
