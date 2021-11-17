'use strict';
const strict = "Strict Mode Script"

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
            <div>
        <figure>
          <img src="assets/images/team-pics/${data[i].profilePic}">
          <figcaption>${data[i].fullName}</figcaption>
        </figure>
      <p>${data[i].bio}</p>
        <div class="icon">
          <img src="assets/icons/github.png">
          <a href="${data[i].github}" target="_blank">
          ${data[i].username}</a>
        </div>
      </div>
      `
        }

        console.log(output) document.querySelector('section').innerHTML = output;
    })
    .catch(function(err) {
        //console.log(err);

    })