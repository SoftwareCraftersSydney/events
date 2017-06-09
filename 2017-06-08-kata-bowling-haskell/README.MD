# Kata Bowling Haskell

The purpose of this program is to calculate the Bowling score of a game.


*Note:* This kata wasn't finish, the final version is available [here](https://github.com/ThibautGery/dojo-haskell-bowling), there is a commit for each steps

## Requirement

* Install Haskell using the [documentation](https://www.haskell.org/platform/)
  * For Ubuntu: `sudo apt-get install haskell-platform`
  * For MacOS: `brew cask install haskell-platform`
* Install the Hspec: `cabal update && cabal install hspec`
* Install [Node](https://nodejs.org/en/download/) (optional)
  * install the [chokidar package](https://github.com/kimmobrunfeldt/chokidar-cli): `npm install -g chokidar-cli` (optional)


## Commands

```sh
ghc -o specs specs.hs # compile the tests
./specs # run the specs
chokidar '*.hs' -c 'rm specs; ghc -o specs specs.hs; ./specs' # watch the change and run the tests at every changes
```
