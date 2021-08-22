# The Game of Life II: Judgement Day 🤖

A JavaScript-based implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) with a UI available at [https://victornguyen.github.io/life-the-sequel](https://victornguyen.github.io/life-the-sequel)

This is the sequel to [this implementation](https://github.com/victornguyen/life), but re-implemented 4 years later in TypeScript and with this additional rule:

> A Cell who "comes to life" outside the board should wrap at the other side of the board.

## Quick start

To run the project locally:

```sh
$ yarn
$ yarn start
// Then go to http://localhost:3000
```

Run tests with:

```sh
$ yarn test --verbose
```

## Development notes
- Much of the game logic is contained in `src/hooks/useCells.ts`
- Project was scaffolded with [Create React App](https://github.com/facebookincubator/reate-react-app) using the TypeScript template
- Styling via [styled-components](https://styled-components.com/)
- Includes [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configs
- Uses a 2D array to store game state because traversing rows and columns (like on a board) seemed natural that way. A flat array of objects representing an absolute representation of each cell `[ { x:0, y:0, live:true }, ... ]` was another option.
