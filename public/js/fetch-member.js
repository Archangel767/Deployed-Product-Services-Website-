fetch('https://cpnt262-final-intfood.herokuapp.com/api/member')
    .then(function(response) {
        // Fetch JSON file from mongodb server to convert to JS object asynchronously.
        if (!response.ok) {
            throw new Error('Not 200 Ok');
        }
        return response.json();
    })
    .then(function(item) {
        let output = ''
        item.forEach((member) => {
            output +=
                `<figure>
                <h2 class="title">${member.name}</h2>
                <img src="${member.profilePic}" alt="${member.title}"></img>
                <figcaption>
                    <p>${member.bio}</p>
                    <a class="author" href="${member.github}"></a>
                </figcaption>
            </figure>`
        })

        const team = document.querySelector('.team')
        team.innerHTML = output
        console.log(item)
    })