'use strict';
const strict = "Strict Mode Script";

let output = '';

fetch('https://cpnt262-final-intfood.herokuapp.com/api/member')
    .then(function(response) {
        // Fetch JSON file from mongodb server to convert to JS object asynchronously.
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        for (let i = 0; i < Number(data.length); i++) {
            output += `
        <figure>
          <img src="/images/avatars/${data[i].profilePic}">
          <figcaption>${data[i].name}</figcaption>
        </figure>
        <p>${data[i].title}</p>
        <p>${data[i].bio}</p>
        <a href="${data[i].github}" target="_blank">Github Link</a>
      `
        }

        console.log(output)
        document.querySelector('section').innerHTML = output;
    })
    .catch(function(err) {})