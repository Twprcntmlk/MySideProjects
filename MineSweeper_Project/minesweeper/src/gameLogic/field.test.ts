import { emptyFieldGenerator, fieldGenerator} from "./field"
import {CellState} from "../Types/gameTypes"
const  { empty, bomb, hidden } = CellState;

describe('Field Generator', ()=>{
    describe("emptyFieldGenerator", ()=>{
        it("2x2", ()=>{
            expect(emptyFieldGenerator(2)).toStrictEqual([[empty,empty],[empty,empty]])
        })
        it("3x3", ()=>{
            expect(emptyFieldGenerator(3)).toStrictEqual([[empty,empty,empty],[empty,empty,empty],[empty,empty,empty]])
        })
        it("3x3 with hidden state", ()=>{
            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden,hidden,hidden],
                [hidden,hidden,hidden],
                [hidden,hidden,hidden]
            ])
        })
    })


    describe("fieldGenerator", ()=>{
        it("Under 0% Density Error", ()=>{
            const errorText = "Density must be between 0 and 1"
            expect(()=>fieldGenerator(1,-1)).toThrowError(errorText)
        })
        it("Over 100% Density Error", ()=>{
            const errorText = "Density must be between 0 and 1"
            expect(()=>fieldGenerator(1,2)).toThrowError(errorText)
        })
        it("Smallest possible field without mine", ()=>{
            expect(fieldGenerator(1,0)).toStrictEqual([[empty]])
        })
        it("Biggest possible field without mine", ()=>{
            expect(fieldGenerator(10,0)).toStrictEqual([
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty]
            ])
        })
        it("Smallest possible field with mine", ()=>{
            expect(fieldGenerator(1,1)).toStrictEqual([[bomb]])
        })
        it("Biggest possible field wit mine", ()=>{
            expect(fieldGenerator(10,1)).toStrictEqual([
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb],
                [bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb,bomb]
            ])
        })
        it("2x2 field with 50% Mines", ()=>{
            const field= fieldGenerator(2,.5)
            const flattenMatrix= field.flat()

            console.table(field)
            console.table(flattenMatrix)
            const bombs = flattenMatrix.filter((cell)=>cell===bomb)
            const emptyCells = flattenMatrix.filter((cell)=>cell!==bomb)

            expect(bombs).toHaveLength(2)
            expect(emptyCells).toHaveLength(2)

        })
    })
})
