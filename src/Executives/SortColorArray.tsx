import {Color} from '../Types/GeneralTypes'

// Sorting the colours array using the average of the red, gree, blue of the colour,
// from big to small (dark to bright).
export const sortColorsArray=(colors: Color[])=>{
    const sortedData=colors.sort((a,b)=> a.average-b.average)
    return sortedData
}