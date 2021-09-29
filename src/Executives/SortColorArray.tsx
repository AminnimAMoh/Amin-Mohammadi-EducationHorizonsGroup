import {Color} from '../Types/GeneralTypes'

export const sortColorsArray=(colors: Color[])=>{
    const sortedData=colors.sort((a,b)=> a.average-b.average)
    return sortedData
}