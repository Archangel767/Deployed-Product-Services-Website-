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
        <div class="gallery-item">
        <img class="gallery-image" src="/images/avatars/${data[i].profilePic}" alt="${data[i].name}" style="width: 300px;height: 300px;">
        <br>
        <><strong>Name:</strong>${data[i].name}<br>
        <strong>Job:</strong>${data[i].title}<br>
        <strong>Bio:</strong>${data[i].bio}<br>
        <a href="${data[i].github}" target="_blank">Github Link</a></p>
        </div>
        `
        }
        console.log(output)
        document.querySelector('section').innerHTML = output;
    })
    .catch(function(err) {

    })