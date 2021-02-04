axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        const artists = document.getElementById('artistsPhotos')
        response.data.forEach(artist => {
            newArtist = document.createElement('a')
            newArtist.setAttribute('href', `http://localhost:3000/profilePublic.html?id=${artist._id}`)
            newArtist.innerHTML = `
            <img src="${artist.photo}" title="${artist.name}" class="img-fluid rounded p-3 d-inline-block desvanecer" alt="...">
            `
            artists.appendChild(newArtist)
        })
    })
    .catch(err => { alert('do not have permission') })

document.getElementById('loginh').addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})
