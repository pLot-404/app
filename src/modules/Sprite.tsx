import React from 'react';

type Props = {
  ctx: CanvasRenderingContext2D;
  path: string;
};

const Sprite :React.VFC<Props> = (props) => {
  const img: HTMLImageElement = new Image();
  img.src = props.path;
  let [x,y]
};