import generateCells from './generateCells';

describe('generateCells()', () => {
  const result = generateCells({ rows: 2, cols: 5 });

  it('generates the correct number of rows', () => {
    expect(result).toHaveLength(2);
  });

  it('generates the correct number of columns', () => {
    expect(result[0]).toHaveLength(5);
    expect(result[1]).toHaveLength(5);
  });

  it('only generates dead cells when random is false', () => {
    const result = generateCells({ rows: 30, cols: 30, random: false });
    const areThereSurvivors = result.flat().find((cell) => !!cell);
    expect(areThereSurvivors).toBeFalsy();
  });
});
