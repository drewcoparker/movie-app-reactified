# About
Trailers is an app that lets movie lovers browse now playing and upcoming movies
and quickly view their trailers. The trailers are presented in a modal, so it's
quite easy to start one, dismiss it, and move on to the next.

![Movie card](./images/card.png?raw=true "Example movie card")

## Under the Hood
Trailers gets its movie data from The Movie Database (tmdb.org) Api. Once queried,
the results are sent back to the frontend where they are displayed on handsome cards,
one for each movie. TMDB limits the results of each call to 20 movies, so I've included a
paginator to page through more results (making an API call per page).

## Technologies
- HTML5
- CSS3
- Bootstrap
- JavaScript (ES6)
- jQuery
- React.js
- Redux
