import React, { useState, useEffect } from 'react';

type Props = {
  width: number;
  height: number;
};

const Game: React.VFC<Props> = (props) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const { width, height } = props;

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    setCtx(context);
  }, []);

  useEffect(() => {
    if (ctx !== null) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 1500, 1000);
    }
  }, [ctx]);

  return <canvas id="canvas" />;
};

export default Game;
