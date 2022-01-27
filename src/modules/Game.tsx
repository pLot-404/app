import React, { useState, useEffect, useRef } from "react";

type Props = {
  width: number;
  height: number;
};

const Game: React.VFC<Props> = (props) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const reqIdRef = useRef();
  const { width, height } = props;

  const mainloop = () => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    reqIdRef.current = requestAnimationFrame(mainloop);
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    setCtx(context);
  }, []);

  useEffect(() => {
    if (ctx !== null) {
      mainloop();
    }
    return () => cancelAnimationFrame(reqIdRef);
  }, [ctx, mainloop]);

  return <canvas id="canvas" />;
};

export default Game;
