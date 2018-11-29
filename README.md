# Xapo Frontend test

## Getting started
NOTE: To run the application you must create a new .env file with your `username` and `password` from Github. You can see an example of the file in `.env.template`

Install dependencies with yarn (or npm):
```
yarn
```

Start the bundler:
```
yarn start
```

Run tests
```
yarn test
```

Run storybook
```
yarn storybook
```

## Dependencies:
- Internationalization: i18n-js
- State management: react-redux (reduxsauce)
- Styles: styled-components
- Navigation: react-router
- Functional programming: ramda
- Testing: Jest, Enzyme.


## Directory Structure
- assets: Static files, localization files are located here.
- components: General purpose components have their home here.
- containers: Components that use other components go here.
- screens: This directory holds Components that serve as Screens.
- store: All global state management are located here.


## NOTES
-

## Component structure
![component-structure](./component-structure.png)
