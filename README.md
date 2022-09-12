# GitHub Topic Explorer

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

### How to run app & test

In the project directory, you can run:

- `nvm use 14` if you aren't already using version 14.

- `npm install`

- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

I tried to group my components small with related styles in each component's folder to improve readability.

- Refactoring:

With more time I would have put more effort into my error handling, accessibility and making everything tabbable, styling, better labeling and tooltips. (test)

- Additional Features:

If I have time, I will implement pagination, fuzzy searching and sorting.

### File description

- .env file
You should save [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) as a named vairable REACT_APP_GITHUB_API_TOKEN.

Example:
```
REACT_APP_GITHUB_API_TOKEN=xxx
```