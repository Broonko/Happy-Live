axios
    .get('http://localhost:3000/api/users', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
        console.log(response.data)
        console.log(localStorage.name)
        

        // const user = document.getElementById('userName')
        // const newUser = document.createElement('p')
        // newUser.innerHTML = localStorage.name
        // user.appendChild(newUser)

        const artists = document.getElementById('artistList')
        response.data.forEach(artist => {
            // console.log(artist)
            // console.log(`http://localhost:3000/profilePublic.html?id=${artist.id}`)
            const newArtist = document.createElement('a')
            newArtist.setAttribute('href', `http://localhost:3000/profilePublic.html?id=${artist.id}`)
            newArtist.innerHTML = artist.name
            artists.appendChild(newArtist)
           
        })
    })
    .catch(err => { alert('do not have permission') })

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.clear()
        window.location.reload()
    })
