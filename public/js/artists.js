axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)
        console.log(localStorage.name)
        
        // const user = document.getElementById('userName')
        // const newUser = document.createElement('p')
        // newUser.innerHTML = localStorage.name
        // user.appendChild(newUser)

        const artists = document.getElementById('artistsPhotos')
        response.data.forEach(artist => {
            // console.log(artist)
            // console.log(`http://localhost:3000/profilePublic.html?id=${artist.id}`)
            // let newArtist = document.createElement('a')
            // newArtist.setAttribute('href', `http://localhost:3000/profilePublic.html?id=${artist.id}`)
            // newArtist.innerHTML = artist.name
            //poner aqui artist.photo// tengo que crear artistas reales con una foto
            //y poner la ruta images/ en artist.photo
            //al picar en la foto ira al perfil del artista
            // artists.appendChild(newArtist)

            newArtist = document.createElement('a')
            newArtist.setAttribute('href', `http://localhost:3000/profilePublic.html?id=${artist.id}`)
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
