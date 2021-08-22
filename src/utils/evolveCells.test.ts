import evolveCells, {
  countLiveNeighbours,
  shouldCellLive,
} from './evolveCells';

describe('evolveCells()', () => {
  it('correctly generates the next evolution of cells', () => {
    // First snapshot in:
    // https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg
    const cells = [
      [false, false, false, false, false, false],
      [false, false, true, false, false, false],
      [false, false, false, true, false, false],
      [false, true, true, true, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
    ];

    // Second snapshot in:
    // https://user-images.githubusercontent.com/7149052/53603476-bfb00e00-3c05-11e9-8862-1dfd31836dcd.jpg
    const expected = [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, true, false, true, false, false],
      [false, false, true, true, false, false],
      [false, false, true, false, false, false],
      [false, false, false, false, false, false],
    ];

    const result = evolveCells(cells);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  describe('countLiveNeighbours()', () => {
    const cells = [
      [true, false, false, false, false, false, false],
      [false, true, true, false, false, false, false],
      [false, false, true, false, false, false, false],
    ];

    it('returns the correct number of live neighbours of a given cell', () => {
      expect(countLiveNeighbours({ x: 1, y: 1, cells })).toEqual(3);
      expect(countLiveNeighbours({ x: 1, y: 5, cells })).toEqual(0);
      expect(countLiveNeighbours({ x: 10000, y: 2000, cells })).toEqual(0);

      // TODO: account for wrapping neighbours at board edges
      expect(countLiveNeighbours({ x: 0, y: 0, cells })).toEqual(1);
    });
  });

  describe('shouldCellLive()', () => {
    describe('given a live cell', () => {
      it('stays alive with 2 live neighbours', () => {
        const result = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [false, false, false],
            [true, true, true],
            [false, false, false],
          ],
          isAlive: true,
        });
        expect(result).toEqual(true);
      });

      it('stays alive with 3 live neighbours', () => {
        const result = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [false, true, false],
            [true, true, true],
            [false, false, false],
          ],
          isAlive: true,
        });
        expect(result).toEqual(true);
      });

      it('dies with less than 2 live neighbours', () => {
        const result = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [false, false, false],
            [true, true, false],
            [false, false, false],
          ],
          isAlive: true,
        });
        expect(result).toEqual(false);
      });

      it('dies with more than 3 live neighbours', () => {
        const result = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [true, true, true],
            [true, true, true],
            [true, true, true],
          ],
          isAlive: true,
        });
        expect(result).toEqual(false);
      });
    });
    describe('given a dead cell', () => {
      it('comes to life with 3 live neighbours', () => {
        const result = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [true, true, true],
            [false, false, false],
            [false, false, false],
          ],
          isAlive: false,
        });
        expect(result).toEqual(true);
      });

      it('stays dead with anything other than 3 live neighbours', () => {
        const moreThanThreeNeighboursResult = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [true, true, true],
            [true, false, false],
            [false, false, false],
          ],
          isAlive: false,
        });
        expect(moreThanThreeNeighboursResult).toEqual(false);

        const lessThanThreeNeighboursResult = shouldCellLive({
          x: 1,
          y: 1,
          cells: [
            [true, false, false],
            [false, false, false],
            [false, false, false],
          ],
          isAlive: false,
        });
        expect(lessThanThreeNeighboursResult).toEqual(false);
      });
    });
  });
});
