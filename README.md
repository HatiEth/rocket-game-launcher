Rocket Game Launcher

A open-sourced project configurable game launcher useful for presentating multiple games at once at a venue in a compact view for players.

# Features

- Launch applications in a fullscreen mode and return to the launcher ones playing is finished
- Configurable files for multiple setups
- Relative paths using `~` in the config file


## Planned 

- Carousell mode ( Fullscreen tile for each game, moving left/right. )
    - Also adds auto-preview after [30s] of no input
- Theme customization
- Controller, Keyboard support


# .Rocket Files

A .rocket file is a json file which contains all the projects that can be launched.

Paths can be relative to file via ~ (see examples in Rocket/example)

Allowed properties are defined as JSDoc type in `app/common/rocket.js`

# Development Setup

The project was developed with Electron ( Node.js ) and webpack. Using npm as a package repository.

**Make sure you are inside the Rocket-Subfolder.**

1. Install [Node.js](https://nodejs.org/en/) preferably LTS
1. Use NPM to install yarn `npm i -g yarn` ( npm comes with node.js )
1. Use `yarn install` inside the `/Rocket/` folder ( or yarn install if you installed yarn )
1. Use `yarn dev` to run the app in development mode ( auto starts development window of electron/chrome )

It is adviced to use yarn, as npm does not install dependencies correctly.

## Create a packaged exe

You may want to create a standalone application for venues or sites, as you wouldn't have to deal with the setup process on a showcase machine.

You can build it yourself for windows using `yarn dist` or `npm run dist`.

Other OS apps are currently untested and may need some tinkering 🙂.

The executable will be in `dist/rocket-<version>.exe`.



