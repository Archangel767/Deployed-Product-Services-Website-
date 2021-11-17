'use strict';
const strict = "Strict Mode Script";

let output = '';

fetch('https://cpnt262-final-intfood.herokuapp.com/api/member')
    .then(function(response) {
        // Fetch JSON file from mongodb server to convert to JS object.
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        for (let i = 0; i < Number(data.length); i++) {
            output += `
        <div class="card" style="width:20rem;">
        <figure>
          <img src="/images/avatars/${data[i].profilePic}" alt="${data[i].name}" width="300">
          <figcaption><strong>Name:</strong>${data[i].name}</figcaption>
        </figure>
        <p><b>Job:</b>${data[i].title}</p>
        <p><b>Bio:</b>${data[i].bio}</p>
        <a href="${data[i].github}" target="_blank">Github Link</a>
        </div>
           `
        }
        console.log(output)
        document.querySelector('section').innerHTML = output;
    })
    .catch(function(err) {

    })