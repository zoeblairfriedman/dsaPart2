'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'topArticles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING username
 *  2. INTEGER limit
 *
 * base url for copy/paste
 * https://jsonmock.hackerrank.com/api/articles?author=<username>&page=<pageNumber>
 */

// NOTES: 
// if title and story are null ignore
// if if title is not null, name of the article is the title
// if the title IS null, the name of the article is the story_title

// async function topArticles(username, limit) {
 
  
// const url = `https://jsonmock.hackerrank.com/api/articles?author=${username}&page=${1}`
    
// axios.get(url).then(r => console.log(r.data))
// }
// async function main() {