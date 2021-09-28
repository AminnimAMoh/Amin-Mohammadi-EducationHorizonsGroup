import React, {useEffect, useState} from "react";
import {Color} from "./GeneralTypes";
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;


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
    <div>
      <h1>Hello</h1>
      {colors?.map(({red, green, blue}: any)=>{
        return <div className="container_color-box" style={{backgroundColor: `rgba(${red}, ${green},${blue}, 1)`, height: "100px"}}/>
      })}
    </div>
  );
}

export default App;
