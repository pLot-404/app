import React, { useState, useEffect, useCallback, useRef } from 'react';

type Props = {
  width: number;
  height: number;
};

const Game: React.VFC<Props> = (props) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const reqIdRef = useRef(0);
  const { width, height } = props;

  const mainloop = useCallback(() => {
    if (ctx !== null) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      reqIdRef.current = requestAnimationFrame(mainloop);
    }
  }, [ctx, height, width]);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    setCtx(context);
  }, [width, height]);

  useEffect(() => {
    if (ctx !== null) {
      mainloop();
    }
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [ctx, mainloop]);

  return <canvas id="canvas" />;
};

export default Game;
