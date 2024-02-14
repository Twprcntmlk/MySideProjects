import { Cell, Coordinates, Field } from "../Types/gameTypes";

export const updateNeighours = (coordinates:Coordinates, field:Field) =>{
    const coordinatesToCheck = getNeighbourCoordinates(coordinates)

    for (const coord of Object.values(coordinatesToCheck)){
        if (checkInField(coord, field)){
            const [y,x] = coord
            const cellForUpdate = field[y][x]
            if (cellForUpdate  < 8){
                field[y][x] = (cellForUpdate + 1) as Cell
            }

        }
    }


    return field
}


export const checkInField = ([y,x]:Coordinates, field:Field): boolean => {
    if (y >=0 && y < field.length && x >=0 && x < field[0].length){
        return true
    }
    return false
}
export const getNeighbourCoordinates = ([y,x]:Coordinates):Record<string,[number,number]> => {
    // const [y,x] = coordinates

    return ({
        top: [y-1,x],
        topRight: [y-1,x+1],
        right:[y,x+1],
        bottomRight:[y+1,x+1],
        bottom:[y+1,x],
        bottomLeft:[y+1,x-1],
        Left:[y,x-1],
        topLeft:[y-1,x-1],
    })


}
