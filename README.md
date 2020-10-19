# Wikipedia Search - React app
Front-end recruitment task for XTM.

## Task description
Implement a code that will look for the top 10 results in the Wikipedia API

sample query
```
  https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%22Liverpool%22&srlimit=10)
```

1. The view should contain the “search phrase” input field, “replace with” input field and three buttons: search, replace, replace all.
2. Results should be displayed as a list and should include result title and snipped fields.
3. Search matches within each result snipped should be highlighted.
4. The request should be invoked on search button click and while typing in search field (not on every key pressed)
5. Replace should replace the first currently available highlighted search match with a phrase taken from "replace with" field.
6. Replace all should replace every highlighted search match.

## Tech stack
- React.js supported by webpack and babel.
- Style loaders with autoprefixer.
- Jest & react testing library.

## Running locally with node
Clone repository
```
git clone https://github.com/szczupag/wikipedia-search.git
```
Install node packages
```
cd wikipedia-search
npm install
```
Launch application in the browser http://localhost:8080/
```
npm start
```
Build application
```
npm run build
```
Run tests
```
npm run test
```