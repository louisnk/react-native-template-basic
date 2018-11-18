# React Native Basic Template

This application was created using [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html).

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Whats setup?

- Babel support for v7

- React navigation v2

- Redux

- Redux persist

- Redux devtools (Currently works with Mac OS)

- Git hooks

- Flow for typechecking

## How to use the Template in react-native init

Use the command:
```bash
react-native init project_name --template https://github.com/DarionHernandez/rn-basic-template.git
```


## How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn install`


## How to Run App

1. cd to the repo
2. Open a tab in your terminal, and run `react-native start` to run the build server
3. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * Or run Android Studio's emulator. Download the app, create a project, run the emulator.
    * run `react-native run-android` - it should populate the emulator with the app automatically.

### Debugging on Mac OS with redux-dev-tools
- Debugging works out of the box with redux-dev-tools for Mac OS. 
- To use redux-dev-tools on Mac OS, you need to install react-native-debugger.<br />
```bash
  brew update && brew cask install react-native-debugger
```
- Run the following command before enabling debugging remotely:
```
yarn run debug
```
This will open a separate window, using the react-native-debugger
- Enable remote debugging on your phone or in the emulator

### Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)<br />
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

### Linting

To use linting, we should commit all of the meaningful code changes for the body of work, _then_ create a new commit with any linting changes. This makes the PR review much easier.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).