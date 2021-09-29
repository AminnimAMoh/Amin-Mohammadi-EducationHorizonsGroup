interface Props {
  width: number;
  height: number;
  cellNumber: number;
}
export const calculateBoxSize = ({ width, height, cellNumber }: Props) => {
  const w = (width / cellNumber) / 2;
  const h = (height / cellNumber) / 2;
  return {width: w*100, height: h*100};
};

