import { CellState, Field } from "../Types/gameTypes"
import { getNeighbourCoordinates,updateNeighours, checkInField } from "./cellManipulator";
const {empty, bomb} = CellState

describe('Check Increment Neighbours', ()=>{
    describe("basic cases", ()=>{
        it("Field with only one item", ()=>{
            expect(updateNeighours([0,0],[[bomb]])).toStrictEqual([[bomb]])
        })
        it("2x2 Field with only one bomb", ()=>{
            expect(updateNeighours([0,0],[[bomb,empty],[empty,empty]])).toStrictEqual([[bomb,1],[1,1]])
        })
    })

    describe('Check Neighbours Selectors', () => {
        it('With [0,0] coordinates', ()=>{
            expect(getNeighbourCoordinates([0,0])).toStrictEqual({
                top: [-1,0],
                topRight: [-1,1],
                right:[0,1],
                bottomRight:[1,1],
                bottom:[1,0],
                bottomLeft:[1,-1],
                Left:[0,-1],
                topLeft:[-1,-1],
            })

        })

        it('With [4,3] coordinates', ()=>{
            expect(getNeighbourCoordinates([4,3])).toStrictEqual({
                top: [3,3],
                topRight: [3,4],
                right:[4,4],
                bottomRight:[5,4],
                bottom:[5,3],
                bottomLeft:[5,2],
                Left:[4,2],
                topLeft:[3,2],
            })

        })


    })

    describe('checkItemInField tests', () => {
        describe('Simple cases', () => {
            const field: Field = [[empty]];

            it('Out of y range', () => {
              expect(checkInField ([1, 0], field)).toBe(false);
            });

            it('Out of x range', () => {
              expect(checkInField ([0, -1], field)).toBe(false);
            });

            it('In x and y range', () => {
              expect(checkInField ([0, 0], field)).toBe(true);
            });
          });
    })
    describe('Check Increment Neibours', () => {
        describe('Simple cases', () => {
          it('Field with only one item', () => {
            expect(updateNeighours([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
          });
          it('Field 2x2 with one mine', () => {
            expect(
                updateNeighours(
                [0, 0],
                [
                  [bomb, empty],
                  [empty, empty],
                ]
              )
            ).toStrictEqual([
              [bomb, 1],
              [1, 1],
            ]);
          });
          it('Field 2x2 with two mines', () => {
            expect(
                updateNeighours(
                [0, 0],
                [
                    [bomb, empty],
                    [empty, bomb],
                ]
              )
            ).toStrictEqual([
              [bomb, 1],
              [1, bomb],
            ]);
          });
        });
        describe('3x3 cases', () => {
          it('Field 3x3 with one centered mine', () => {
            expect(
                updateNeighours(
                [1, 1],
                [
                  [empty, empty, empty],
                  [empty, bomb, empty],
                  [empty, empty, empty],
                ]
              )
            ).toStrictEqual([
              [1, 1, 1],
              [1, bomb, 1],
              [1, 1, 1],
            ]);
          });
          it('Field 3x3 with two mines', () => {
            expect(
                updateNeighours(
                [1, 1],
                [
                  [0, 1, bomb],
                  [0, bomb, 1],
                  [0, 0, 0],
                ]
              )
            ).toStrictEqual([
              [1, 2, bomb],
              [1, bomb, 2],
              [1, 1, 1],
            ]);
          });
          it('Field 3x3 as syntetic case with neighbors cells is reached max possible bombs', () => {
            expect(
                updateNeighours(
                [1, 1],
                [
                  [0, 1, bomb],
                  [8, bomb, 1],
                  [8, 8, 8],
                ]
              )
            ).toStrictEqual([
              [1, 2, bomb],
              [8, bomb, 2],
              [8, 8, 8],
            ]);
          });
        });
        describe('9x9 cases', () => {
          it('Field 9x9 with 7 mines', () => {
            expect(
                updateNeighours(
                [4, 5],
                [
                  [9, 1, 0, 0, 0, 0, 1, 1, 1],
                  [1, 1, 1, 1, 1, 0, 1, 9, 1],
                  [0, 0, 1, 9, 1, 0, 2, 2, 2],
                  [0, 0, 1, 1, 1, 0, 1, 9, 1],
                  [0, 1, 1, 1, 1, 9, 1, 1, 1],
                  [0, 1, 9, 2, 1, 1, 0, 0, 0],
                  [0, 1, 1, 2, 9, 1, 0, 0, 0],
                  [0, 0, 0, 1, 1, 1, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                ]
              )
            ).toStrictEqual([
              [9, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 1, 0, 1, 9, 1],
              [0, 0, 1, 9, 1, 0, 2, 2, 2],
              [0, 0, 1, 1, 2, 1, 2, 9, 1],
              [0, 1, 1, 1, 2, 9, 2, 1, 1],
              [0, 1, 9, 2, 2, 2, 1, 0, 0],
              [0, 1, 1, 2, 9, 1, 0, 0, 0],
              [0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
          });
          it('Field 9x9 with 11 mines', () => {
            expect(
                updateNeighours(
                [5, 4],
                [
                  [9, 2, 9, 1, 0, 0, 1, 1, 1],
                  [1, 2, 2, 2, 1, 0, 1, 9, 1],
                  [0, 0, 1, 9, 1, 0, 2, 2, 2],
                  [0, 0, 1, 1, 1, 0, 1, 9, 1],
                  [0, 1, 1, 1, 1, 9, 1, 1, 1],
                  [0, 1, 9, 2, 9, 1, 0, 0, 0],
                  [0, 2, 2, 3, 9, 1, 1, 1, 1],
                  [0, 1, 9, 2, 1, 1, 1, 9, 1],
                  [0, 1, 1, 1, 0, 0, 1, 1, 1],
                ]
              )
            ).toStrictEqual([
              [9, 2, 9, 1, 0, 0, 1, 1, 1],
              [1, 2, 2, 2, 1, 0, 1, 9, 1],
              [0, 0, 1, 9, 1, 0, 2, 2, 2],
              [0, 0, 1, 1, 1, 0, 1, 9, 1],
              [0, 1, 1, 2, 2, 9, 1, 1, 1],
              [0, 1, 9, 3, 9, 2, 0, 0, 0],
              [0, 2, 2, 4, 9, 2, 1, 1, 1],
              [0, 1, 9, 2, 1, 1, 1, 9, 1],
              [0, 1, 1, 1, 0, 0, 1, 1, 1],
            ]);
          });
        });
      });
})
