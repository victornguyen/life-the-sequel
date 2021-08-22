import toggleCell from './toggleCell';

describe('toggleCell()', () => {
  const cells = [
    [true, false, false],
    [false, true, false],
  ];

  it("toggles a given cell's value", () => {
    expect(toggleCell({ x: 0, y: 0, cells })[0][0]).toEqual(false);
    expect(toggleCell({ x: 2, y: 1, cells })[0][0]).toEqual(true);
  });

  it("returns the cells unchanged when it can't find cell to toggle", () => {
    const result = toggleCell({ x: 101, y: 0, cells });
    expect(JSON.stringify(result)).toEqual(JSON.stringify(cells));
  });
});
