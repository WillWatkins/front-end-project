# Checklist for NC Games Front End

​
Overall, a very nice app Will :) Great progress so far. The checklist below should help you fix any issues and continue on with the sprint. I did a cheeky accessibility test and even that score is quite high! Just a h4 used for usernames on the reviews which is considered using headers out of order. Nice and resposnive and most functionality is there. I did have some issues trying to post comments and reviews, so maybe start there for sprucing this up.
​

## README - write your own and make sure that it:

​
Please be sure o write your own readme. This site makes it very easy :) https://readme.so/ It should contain the following points
​

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
      ​

## UX

​

- [✅] Basic styling added
- [✅] Responsive design
- [✅] Items aligned
- [✅] Content legible (not too wide, obstructed, etc) `mostly legible but the text is a tad small`
- [✅] Refreshing doesn’t cause an issue on sub-pages
- [✅] No errors in the console
- [✅] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
  ​

## Functionality

​

### Login

​

- [ ] Some indication of who is logged in (this can be hardcoded) `can't seem to see any indication of user and I'm able to do things like delete anyone's comments`
      ​

### Reviews

​

- [✅] Serves all reviews / top reviews
- [✅] Can vote on reviews
- [ ] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
- [ ] Can sort reviews by date created / comment_count / votes
      ​

### Individual Review / Comments

​

- [✅] Individual reviews are served with comments
- [✅] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [ ] Can post new comments, which are persistent `I get a 422 error if I try to post. Maybe double check your BE is set up correctly and able to handle post requests`
      ​

### Additional functionality:

​

- [ ] Can only delete comments of logged in user
- [✅] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of reviews (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display reviews by specific user
- [ ] post new review `Same 422 error as when trying to post a comment`
- [ ] delete logged in user's reviews
      ​

## Error Handling

​

- [ ] Bad url
- [ ] Bad category slug in url
- [ ] Bad review_id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)
      ​

## Code

​

- [✅] Well named components
- [✅] Components reused where possible (`Reviews` / `Voter`...)
- [✅] Minimal state - don't hold derivable data in state `this is mostly fine but I wonder why we are keeping the review_id in state when we can usually grab it with params`
- [✅] Set state correctly, using previous state where possible
- [✅] Handle asynchronicity clearly (i.e. isLoading pattern)
- [✅] Functions are DRY (`handleChange` for controlled components / api calls) `would suggest breaking out functions from inline into more handler functions with onclick, onchange etc. Just a bit easier to read`
- [✅] Use object destructuring where possible
- [✅] Tidy? If not: ESLint / Prettier
- [✅] `node_modules` git ignored
- [ ] No `console.log`s / comments `a couple stary consoles for errors. Be sure to handle these to be useful for an end user`
- [✅] remove unnecessary files (e.g. App.test.js)
  ​

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

​

## Once everything else is complete, here are some extra challenges:

​

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes
