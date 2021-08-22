import getCell from './getCell';

describe('getCell()', () => {
  const cells = [
    [true, false, false],
    [false, true, false],
  ];

  it('returns a cell value at the provided coordinates', () => {
    expect(getCell({ x: 0, y: 0, cells })).toEqual(true);
    expect(getCell({ x: 1, y: 0, cells })).toEqual(false);
    expect(getCell({ x: 1, y: 1, cells })).toEqual(true);
  });

  it("returns null when a cell isn't found", () => {
    expect(getCell({ x: 99, y: 0, cells })).toEqual(null);
    expect(getCell({ x: 0, y: 69, cells })).toEqual(null);
    expect(getCell({ x: -1000, y: -2222, cells })).toEqual(null);
  });
});
