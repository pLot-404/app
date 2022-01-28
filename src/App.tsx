import React, { useState } from 'react';
import Game from './modules/Game';
import Sprite from './modules/Sprite';
import useWindowSize from './modules/useWindowSize';

const App: React.VFC = () => {
  const { width, height } = useWindowSize();
  const [objs, setObjs] = useState<Sprite[]>([]);
  // let add: Sprite;
  let addFlag = false;
  // 画像のスプライト生成
  const add = new Sprite('./img/school_A5.png');

  const handleAdd = (obj: Sprite) => {
    const ar = objs.concat([obj]);
    setObjs(ar);
    console.log("add")
  };

  if (objs.indexOf(add) === -1) {
    addFlag = true;
  }

  console.log(addFlag)

  return (
    <div>
      <Game
        height={height * 0.95}
        width={width * 0.95}
        objs={objs}
        onAdd={addFlag ? () => handleAdd(add) : null}
        add={addFlag ? add:null}
      />
    </div>
  );
};

export default App;
