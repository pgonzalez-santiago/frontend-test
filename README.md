# Xapo Frontend test

## Getting started
**NOTE:** To run the application you must create a new .env file with your `username` and `password` from Github. You can see an example of the file in `.env.template`

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
- **Why the application sort the repositories by stars instead of by watchers?**

  The application is using the latest version of the Github API (GraphQL - version 4) to get all of the repositories from facebook. As we can see in [documentation](https://developer.github.com/v4/enum/repositoryorderfield/) of the API it is not possible to sort by watchers. Due to the data is paginated with a limit of 100 items per request I decided to sort the repositories by stars.
  
  Also the variable `watchers` and `watchers count` from the response of the repositories query in the version 3 of the Github API corresponds to the stars of the repository and not the watchers.

- **Why is the application using two versions of the Github API to get the contributors?**

  Because this feature is not yet developed in the new version of the API. [Info](https://platform.github.community/t/contributors-of-a-repository/3680/2)

- **Why the application needs Github username and password?**

  Because version 4 of the Github API need authentication

- **Why application uses [reduxsauce](https://github.com/infinitered/reduxsauce)?**

  Creating Reducers and Actions on Redux sometimes made complicated because of too large switch statements for a single reducer, reduxsauce is here to save the day. It comes with too many magic and simplicity for your redux needs! even it comes with resettable reducer option. Reduxsauce just need one file to handle Actions for a Reducer and the Reducer itself, with minimum lines of code that also readable.

- This application also have a mobile version, try it in your mobile phone :)

## Component structure
![component-structure](./component-structure.png)


## TASK 

This is an evaluation project that tries to identify the coding compatibility with the team. Try to code as clean and clear as possible, taking into account reusability and legibility is more important than high performance. Having a great and polished design is not the goal of this project.

Follow these simple instructions:

The main idea of the project is to list projects owned by Facebook on Github.

The app must have a sidebar navigation with Facebook projects sorted by watchers. Clicking on one of them should fetch that project data and populate the main view with its details. Those details must include a list of project contributors.

Requirements for the project:

- Use ReactJS ;

- Provide a Readme with instructions on how to run the app.

Nice to have:

- Use Redux ;

- Use a side effect lib like redux-saga or RxJS.

-Any cool feature that you can think of for this project is very welcomed.
