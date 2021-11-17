'use strict';
const strict = 'Strict Mode Script';

let output = '';

fetch('https://cpnt262-final-intfood.herokuapp.com/api/image')
    .then(function(response) {
        // Fetch image JSON file from mongodb server to convert to JS object.
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
            console.log(data)
        }

        for