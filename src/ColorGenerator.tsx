import {Color} from './GeneralTypes'
interface CanvasDimensionsMeasur {
  width: number;
  height: number;
}

interface Props {
  dimensions: CanvasDimensionsMeasur;
}

export class ColorGenerator {
  dimensions: CanvasDimensionsMeasur;
  color: Color[];
  constructor(props: Props) {
    this.dimensions = props.dimensions;
    this.color=[];
  }

  calculateCellSize = () => {
    return `size=${this.dimensions.width}x${this.dimensions.height}`;
  };

  constructColor = () => {
    const increment=Math.round(255/32)
    for (let r = 0; r < 255; r+=increment) {
      for (let g = 0; g < 255; g+=increment) {
        for (let b = 0; b < 255; b+=increment) {
          const color = { red: Math.floor(r), green: g, blue: Math.round(b) };
          this.color.push(color);
        }
      }
    }
    return {...this.color};
  };
}

module.exports.ColorGenerator = ColorGenerator;
