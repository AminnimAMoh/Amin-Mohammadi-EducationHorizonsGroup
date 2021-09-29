import React, { useEffect, useState, lazy, useRef } from "react";
import { Color } from "./Types/GeneralTypes";
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;
const calculateBoxSize = require("./Executives/CalculateBoxSize").calculateBoxSize;

const ColorBox = lazy(() => import("./Shared-Components/ColorBox"));

interface CanvasDimantions {
  width: number;
  height: number;
}

function App(): React.ReactElement {
  const [colors, setColors] = useState<Color[] | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasDimantions>({
    width: 0,
    height: 0,
  });
  const containerQuery = useRef<HTMLDivElement>(null);
  const args = {
    dimensions: {
      width: 1920,
      height: 933,
    },
  };

  // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
  // So it will be 2c*2c=4c and to fit 6 box in this canvas you have to 4/6=0.666. So the width and height for a perfect rect will be 0.666/2.
  useEffect(() => {
    setColors(new GenerateColor(args).constructColor());
  }, []);

  useEffect(() => {
    let canvasWidth: number = 0;
    let canvasHeight: number = 0;
    if (colors && containerQuery.current) {
      canvasWidth = containerQuery.current.clientWidth;
      canvasHeight = containerQuery.current.clientHeight;
    }
    console.log(canvasWidth, canvasHeight);
    
    const args = {
      width: canvasWidth,
      height: canvasHeight,
      cellNumber: 32768,
    };
    setCanvasSize(calculateBoxSize(args));
  }, [containerQuery.current]);
  // console.log(canvasSize);c
  
  return (
    <div className="container" ref={containerQuery}>
      {canvasSize.width && (
      colors?.map((color: Color, index) => {
        const props = { ...color, ...canvasSize };
        return <ColorBox key={index} {...props} />;
      }))}
    </div>
  );
}

export default App;
