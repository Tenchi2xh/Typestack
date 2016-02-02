# Typestack

Webpack starter pack using Typescript, Jade, Bootstrap

## Usage
First install the package:

```bash
npm install
```

To build, run:

```bash
npm run build
```

This will compile and bundle the Typescript files and dependencies and minify. The required CSS stylesheets and Jade templates will also be processed. The output can be accessed in the `dist/` folder.

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

