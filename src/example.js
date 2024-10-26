const apiKey = process.env.API_KEY;

fetch(`https://www.eventbriteapi.com/v3/users/me/?token=${apiToken}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    });
