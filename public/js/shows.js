axios
    .get('http://localhost:3000/api/shows', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)

        const shows = document.getElementById('showList')
        response.data.forEach(show => {
            const newShow = document.createElement('li')
            newShow.innerHTML = show.name
            shows.appendChild(newShow)
        })
    })
    .catch(err => { alert('do not have permission') })


// function goShows() {
//     window.location = "http://localhost:3000/shows.html"
// }

// function goArtists() {
//     window.location = "http://localhost:3000/artists.html"
// }