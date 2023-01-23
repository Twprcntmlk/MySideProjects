// export type BombsNearMe = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type CellState = {"flagged": Boolean, "weakFlagged": Boolean, "checked": Boolean}
// export type Cell = {BombsNearMe: BombsNearMe, CellInfo:CellInfo}


export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
// where 10, 11, 12
export type Field = Cell[][]
export type Coordinates = [number, number]
