import { Cell, CellState, Field } from "../Types/gameTypes"
import { updateNeighours } from "./cellManipulator"


export const emptyFieldGenerator = (
    size:number,
    state: Cell = CellState.empty
): Field => new Array(size).fill(null).map(()=>new Array(size).fill(state))

export const fieldGenerator = (
    size:number,
    density:number
): Field => {
    if(density < 0 || density > 1){
        throw new Error("Density must be between 0 and 1")
    }

    let result: Field = emptyFieldGenerator(size)
    let freeCellCount = size*size
    let cellsWithBombs = freeCellCount*density

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            if (cellsWithBombs === 0){
                return result
            }
            if(cellsWithBombs/freeCellCount > Math.random()){
                result[i][j]=CellState.bomb
                updateNeighours([i,j],result)
                cellsWithBombs--
            }
            freeCellCount--
        }
    }


    return result
}
