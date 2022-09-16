# GitHub Topic Explorer

## Introduction

This project is a simple React.js SPA app, integrating GitHub GraphQL API to browse GitHub topics.

## Features

- List GitHub topics searched by `react` keyword
- Get number of stargazers and display per each topic (aggregate total sum in all subtopics)
- Query by user-inputted keyword
- Beautiful UI in React.js
- Using public GitHub GraphQL API

## Highlights

- Dedicated react hook for `GetTopics` endpoint
- Using Apollo client for interacting with GraphQL API
- Styling by styled-components
- Additional CSS styling by `saas`

## Getting started

```bash
# clone the repo
git clone git@github.com:incredible-develop/github-topics-explore.git

# cd into repo folder
cd github-topics-explore

# select node version
nvm use 14

# install dependencies
npm i

# start development server
npm start

# run unit tests
npm test

# build production
npm run build
```

### Future improvements

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