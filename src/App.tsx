import React, {useEffect, useState, lazy} from "react";
import {Color} from "./Types/GeneralTypes";
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;

// const ColorBox=lazy(()=>import("./Shared-Components/ColorBox"))

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
      {colors?.map((color: Color, index)=>{
        return <span key={index} className="container_colorBox" style={{backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, 1)`}}/>
        // return <ColorBox key={index} {...colors}/>
        // return <div key={index} style={{backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, 1)`}} />
      })}
    </div>
  );
}

export default App;
