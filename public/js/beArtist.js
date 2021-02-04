const api = axios.create( {
    baseURL: 'https://happy-live.herokuapp.com',
    timeout: 1000
})

document.getElementById('beAnArtist').addEventListener('click', () => {
    api
        .put('/users/me/artist', {
            "artist.genre": document.getElementById('editGenre').value,
            "artist.bio": document.getElementById('editBio').value
        }, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
            window.location = "http://localhost:3000/profile.html"
        })
        .catch(err => { alert('do not have permission') })
})
