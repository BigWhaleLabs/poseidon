# Backend utils

## Installation

`yarn add @big-whale-labs/backend-utils` or `npm i @big-whale-labs/backend-utils`

## Local launch

1. Install dependencies with `yarn`
2. Run the server with `yarn start`

## Development in conjunction with another project

1. Run `yarn link` in the root folder. [more about yarn link](https://classic.yarnpkg.com/en/docs/cli/link)
2. Run develop mode with `yarn start`
3. **In another project**. Run `yarn link @big-whale-labs/backend-utils`
4. Nice! Your project will now use the local version of ` @big-whale-labs/backend-utils`

## Available Scripts

- `yarn start` — development mode
- `yarn build` — builds utils
- `yarn release` — create a release and publish the package using `ci`
