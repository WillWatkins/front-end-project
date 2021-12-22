# Node.js nc-games (Frontend project)

## Description

This project is a frontend user friendly application that allows a user to interact with data retrieved from an API in a friendly manner. The backend project repo can be found here [link](https://github.com/WillWatkins/JS-Backend-project). The backend repo is hosted here

This frontend application is hosted [here](https://will-js-front-end-project.netlify.app/).

# Technologies and Packages

The technologies and packages used for this project are listed below:

- [Node.js](https://nodejs.org/en/) v16.9.1

### Project dependencies:

- [axios](https://www.npmjs.com/package/axios) v0.24.0
- [react](https://reactjs.org) v17.0.2
- [react-dom](https://reactjs.org/docs/react-dom.html) v17.0.2
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) v6.0.2

## Installation

If you wish to play around with the code futher follow these steps.

To install this api and its dependencies:

1.  Ensure you have installed:
    - Node.js
2.  Fork this repo to your own github account and clone to your local machine. In the CLI insert the following:

        git clone <your-github-forked-repo-url>

3.  Within the directory for this cloned file, install the dependencies by running the following in your CLI:

        npm install

Video Tour showing the following features:

- Filter by category
- Apply filters based on dates, votes, user and post title
- Sort by ascending or descending
  ![Category-and-filters](https://github.com/WillWatkins/front-end-project/blob/main/gifs/catgegoryFilters.gif)

- Select comments to see the comments for a specific review
- Vote on the review/comment (Limited to one vote per user/render)
- Add your own comment to the review
- Delete your own comments from a review
- Add your own review
