fetch('https://cpnt262-final-intfood.herokuapp.com/api/member')
    .then(function(response) {
        // Fetch JSON file from mongodb server to convert to JS object asynchronously.
        if (!response.ok) {
            throw new Error('Not 200 Ok');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data)

    })

for (let i = 0; i < Number(data.length); i++) {
    output += `
            <div>
                <figure>
                    <h2 class="name">${data[i].name}</h2>
                    <img src="${public\images\avatars\${data[i].profilePic}" alt="">$</img>
                    <figcaption><p>${data[i].bio}</p>
                        <a href="${data[i].github}" target="_blank">Github Link</a>
                    </figcaption>
                </figure>
                </div>
            `
})

console.log(output)
document.querySelector('section').innerHTML = output;
})
.catch(function(err) {
    //console.log(err);

})