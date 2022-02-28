import { VFC, useState } from "react";

/** propsの型定義 */
interface Props {
  img: string;
}

/** Spriteコンポーネントの型定義 */
interface SC<P> extends VFC<P> {
  /** 表示する画像 */
  img: JSX.Element;
}

const Sprite: SC<Props> = ({ img }: Props) => {
  /** 画像の生成 */
  Sprite.img = <img src={img} />;

  const [place, setPlace] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        top: place.y,
        left: place.x,
      }}
    >
      {Sprite.img}
    </div>
  );
};
