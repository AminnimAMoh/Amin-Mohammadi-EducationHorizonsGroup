import {Color} from '../Types/GeneralTypes'

// Sorting the colors array using the average of the red, gree, blue of the color,
// from big to small.
export const sortColorsArray=(colors: Color[])=>{
    const sortedData=colors.sort((a,b)=> a.average-b.average)
    return sortedData
}