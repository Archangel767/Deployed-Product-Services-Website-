'use strict';
const strict = "This is strict mode script!";

let output = "";

fetch('https://cpnt262-final-intfood.herokuapp.com/')
    .then(function(response)) {
        throw new Error('Not 200 OK');
    }
return response.json