api
    .get('/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        const artists = document.getElementById('artistsPhotos')
        response.data.forEach(artist => {
            if (artist.artist.genre) {
            newArtist = document.createElement('a')
            newArtist.setAttribute('href', 'profilePublic.html')
            newArtist.innerHTML = `
            <img src="${artist.photo}" title="${artist.name}" class="img-fluid rounded p-3 d-inline-block desvanecer" alt="...">
            `
            artists.appendChild(newArtist)
            }
            newArtist.addEventListener('click', () => {
                localStorage.setItem('artistId', artist._id) 
            })

        })
    })
    .catch(err => { alert('do not have permission') })
