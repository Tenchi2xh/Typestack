# Typestack

Webpack starter pack using Typescript, Jade, Bootstrap

Example output build [here](http://tenchi2xh.github.io/Typestack/)

## Usage

### Installation

- Clone the repo with `git clone https://github.com/Tenchi2xh/Typestack.git`
- Run `npm install`

### Building

To build, run from the root of the project:

```bash
npm run build
```

This will compile the Typescript files and dependencies, then minify and bundle. The required CSS stylesheets and Jade templates will also be processed. The output can be accessed in the `dist/` folder.

### Deploying

To deploy current build to Github pages (you need to be in a Git repository), run from the root of the project:

```bash
npm run deploy
```

This will create a `gh-pages` branch if needed and push the content of the `dist/` folder to it (you will need to [build](#building) first). You can then acccess the deployed site at `http://[USERNAME].github.io/[REPOSITORY]`.

## Troubleshooting

Make sure you are using the latest version of `NodeJS` (>= v5.5.0) and `npm` (>= 3.6.0).

```bash
node --version
npm -version
```

You can install [`NodeJS`](https://nodejs.org/en/) with [`Homebrew`](http://brew.sh/)

```bash
brew install node
```

To upgrade `npm`, run:

```bash
sudo npm install npm -g
```

## TODO

- Separate `dev` and `prod` configs
- `dev` setup with watcher and reload

## Credits

- [Typescript](http://www.typescriptlang.org/)
- [Webpack](https://webpack.github.io/)
- [Jade](http://jade-lang.com/)
- [Bootstrap](http://getbootstrap.com/)
- [`git-directory-deploy`](https://github.com/X1011/git-directory-deploy)
