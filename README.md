<h2 align="center">
  Word Frequency Counter<br/>
  <h3 align ="center"><a href ="https://word-frequency-counter-sage.vercel.app/">GO TO WEBSITE</a></h3>
</h2>


<br/>

<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;


</div>

## Built With

A react app to count frequency of words from an API and display the frequency of top 20 words as a histogram.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Understanding The Code

<div>
This is a Javascript application built using React library. The main logic is located inside `src/Button.js`. On button click, a function `getData` is evoked, which uses axios client to fetch data from the given API (in this case `https://www.terriblytinytales.com/test.txt`). If data cannot be fetched, the function returns an error message, otherwise it gives a call to another function `parsestring` that parses the given data and counts the frequency of all words in the data. These words along with their frequencies are stored in a state variable. 

Next, we sort the object(by converting it into an array) and get first 20 elements from the array. We use Chart.js library to use this data and display it in the form of a column chart where X-axis contains the top 20 most-occuring words and Y-axis contains respective frequencies of these words.
</div>
<hr/>
