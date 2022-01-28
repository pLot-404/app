import React, { useState } from "react";
import Game from "./modules/Game";
import Sprite from "./modules/Sprite";
import useWindowSize from "./modules/useWindowSize";

const App: React.VFC = () => {
  const { width, height } = useWindowSize();
  const [objs, setObjs] = useState<Sprite[]>([]);
  let add: Sprite[];
  let addFlag: boolian = false;
  //画像のスプライト生成
  let school: Sprite = new Sprite("./img/school_A5.png");
  if (!objs.find(school)) {
    add = [school];
    addFlag = true;
  }

  const handleAdd = (obj: Sprite) => {
    const ar = objs.concat([obj]);
    setObjs(ar);
  };

  return (
    <div>
      <Game
        height={height * 0.95}
        width={width * 0.95}
        objs={objs}
        onAdd={addFlag ? () => handleAdd(add) : null}
      />
    </div>
  );
};

export default App;
