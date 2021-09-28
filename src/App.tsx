import React, {useEffect, useState, lazy} from "react";
import {Color} from "./Types/GeneralTypes";
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;

const ColorBox=lazy(()=>import("./Shared-Components/ColorBox"))

function App(): React.ReactElement {
  const [colors, setColors]=useState<Color[] | null>(null);
  const args = {
    dimensions: {
      width: 1920,
      height: 933,
    },
  };
  useEffect(()=>{
    setColors(new GenerateColor(args).constructColor());
  }, [])
  
  return (
    <div className="container">
      <h1>Hello</h1>
      {colors?.map((colors: Color, index)=>{
        return <ColorBox key={index} {...colors}/>
      })}
    </div>
  );
}

export default App;
