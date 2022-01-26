import React, { useState, useEffect } from "react";

const Game: React.VFC = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById("canvas");
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    setCtx(context);
  }, []);

  useEffect(() => {
    if (ctx !== null) {
      //絵画処理
    }
  }, [ctx]);

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Game;
