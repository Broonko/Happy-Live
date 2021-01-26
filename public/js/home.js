axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)
        console.log(localStorage.name)

        const user = document.getElementById('userName')
        const newUser = document.createElement('p')
        newUser.innerHTML = localStorage.name
        user.appendChild(newUser)

        const artists = document.getElementById('artistList')
        response.data.forEach(artist => {
            const newArtist = document.createElement('li')
            newArtist.innerHTML = artist
            artists.appendChild(newArtist)
        })
    })
    .catch(err => { alert('do not have permission') })

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


document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})